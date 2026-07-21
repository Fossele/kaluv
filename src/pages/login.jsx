const Login = () => {
    return (
        <form action="/login-endpoint" method="POST" className="flex flex-col w-full max-w-2xl h mx-auto p-4 mt-20 rounded-2xl gap-4 border-gray-100 shadow-2xl">
            <h2 className="font-bold text-2xl">Welcome back!</h2>
            <h3>Please, enter your details.</h3>


            <div className="flex flex-col">
                <label for="email">
                    Email:
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="algra.mentor@gmail.com"
                    required
                    autocomplete="email"
                    className="p-3 border-2 rounded-xl focus:border-indigo-700  focus:outline-0"
                />
            </div>


            <div className="flex flex-col">
                <label for="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    autocomplete="current-password"
                    className="p-3 border-2 rounded-xl focus:border-indigo-700  focus:outline-0"
                />
            </div>


            <div class="flex justify-between">
                <label class="remember-me">
                    <input type="checkbox" name="remember" /> Remember me
                </label>
                <a href="/forgot-password" class="underline hover:text-indigo-700">Forgot password?</a>
            </div>


            <button type="submit" class="w-full p-2 rounded-xl text-white bg-indigo-700">Sign In</button>

            
            <p class="underline hover:text-indigo-700">
                Don't have an account? <a href="/signup">Sign up here</a>
            </p>
        </form>
    );
}

export default Login;