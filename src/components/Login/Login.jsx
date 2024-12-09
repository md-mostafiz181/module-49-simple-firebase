import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubLogin = ()=>{
    signInWithPopup(auth,githubProvider)
    .then(result=>{
        const loggedUser = result.user;
        setUser(loggedUser)
        
    })
    .catch(error=>{
        console.log(error)
    })
  }

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          {user && (
            <div>
              <h1>User : {user.displayName}</h1>
              <h2>Email: {user.email}</h2>
              <img className="w-[300px] h-[300px]" src={user.photoURL} alt="" />
            </div>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow mt-2"
            >
              LogOut
            </button>
          ) : (
            <div>
              <button
                onClick={handleGoogleLogin}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow focus:outline-none focus:ring focus:ring-red-300"
              >
                Sign in with Google
              </button>
              <button
                onClick={handleGithubLogin}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow focus:outline-none focus:ring focus:ring-red-300 mt-3"
              >
                Sign in with Github
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
