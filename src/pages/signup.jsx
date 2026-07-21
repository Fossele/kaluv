const Signup = () => {
    return (
        <form action="/sign-up" method="POST" className="flex flex-col w-full max-w-sm p-4 rounded-2xl gap-4 border-gray-100 shadow-[0_0_25px_rgba(0,0,0,0.08)]">
            <h2 className="font-bold text-2xl">Create an account.</h2>
            <h3>Please, enter your details.</h3>
            <div className="flex flex-col">
                <label for="username">
                    Username:
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your full name."
                    required
                    autoComplete="username"
                    className="p-3 border-2 rounded-xl focus:border-red-500  focus:outline-0"
                />
            </div>

            <div className="flex flex-col">
                <label for="email">
                    Email:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="algra.mentor@gmail.com"
                    required
                    autoComplete="email"
                    className="p-3 border-2 rounded-xl focus:border-red-500  focus:outline-0"
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
                    autoComplete="current-password"
                    className="p-3 border-2 rounded-xl focus:border-red-500  focus:outline-0"
                />
            </div>

            <button type="submit" className="w-full p-2 rounded-xl text-white bg-red-700">Sign Up</button>


            <p className="underline hover:text-red-700">
                Already have an account? <a href="/signup">Sign in here</a>
            </p>
            
        </form>
    );
}

export default Signup;