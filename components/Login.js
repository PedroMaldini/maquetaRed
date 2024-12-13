const Login = () => {
  return (
    <>
      <section className="max-w-md mx-auto my-auto mt-24 p-6 shadow-lg rounded-lg bg-base-100 space-y-6 mb-10">
        <h1 className="text-2xl font-bold text-center p-2 bg-gradient-to-r  rounded-md">
          Login
        </h1>
        <label className="input input-bordered flex items-center gap-2 w-80 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow bg-base-200 focus:outline-none"
            placeholder="Username"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-80 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-5 w-5 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow bg-base-200 focus:outline-none "
            placeholder="Password"
          />
        </label>
        <div className="flex justify-center">
          <a href="/home">
            <button className="btn btn-primary">Entrar</button>
          </a>
        </div>
        <p className="text-center text-sm">
          ¿No tienes una cuenta?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Regístrate
          </a>
        </p>
      </section>
    </>
  );
};

export default Login;
