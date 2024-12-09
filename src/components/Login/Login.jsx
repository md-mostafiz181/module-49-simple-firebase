import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleGoogleLogin = () => {
    signInWithPopup(auth,googleProvider)
    .then(result=>{
        const user = result.user;
        console.log(user)
    })
    .catch(error=>{
        console.log("error", error.message)
    })
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Login to your account
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-50 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </form>

          <div className="mt-4">
            <button
              onClick={handleGoogleLogin}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow focus:outline-none focus:ring focus:ring-red-300"
            >
              <svg
                className="inline w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.989 12.261c0-.852-.073-1.72-.212-2.564H12.261v5.076h6.623c-.288 1.501-1.194 2.776-2.515 3.63l4.059 3.198c2.37-2.183 3.761-5.402 3.761-9.34z"
                  fill="#4285F4"
                />
                <path
                  d="M12.261 24c3.45 0 6.35-1.145 8.467-3.096l-4.059-3.198c-1.124.748-2.544 1.19-4.408 1.19-3.388 0-6.267-2.285-7.294-5.373L1.826 16.54c2.033 4.025 6.282 7.459 10.435 7.459z"
                  fill="#34A853"
                />
                <path
                  d="M5.037 14.523a7.498 7.498 0 0 1-.392-2.262c0-.787.143-1.547.392-2.262L1.826 7.46A12.017 12.017 0 0 0 0 12.261c0 1.931.46 3.76 1.826 5.341l3.211-3.079z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.261 4.837c1.865 0 3.55.641 4.87 1.899l3.657-3.657C18.611 1.145 15.711 0 12.261 0 7.108 0 2.859 3.434 1.826 7.46l3.211 3.079c1.027-3.088 3.906-5.373 7.294-5.373z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Do not have an account?{" "}
              <a href="#!" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
