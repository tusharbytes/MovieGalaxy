    import React, { useState } from 'react';
    import InputField from '../../common/InputField'; // Your custom InputField

    function Login() {
    const [userLog, setUserLog] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', userLog);
        // Add API logic here
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="space-y-5 w-full   max-w-sm mx-auto px-4 sm:px-6 md:px-8"
        >
        <InputField
            type="text"
            label="UserName"
            value={userLog.username}
            onChange={(e) => setUserLog({ ...userLog, username: e.target.value })}
        />

        <InputField
            type="password"
            label="Password"
            value={userLog.password}
            onChange={(e) => setUserLog({ ...userLog, password: e.target.value })}
        />

        <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 px-4 py-3 rounded-2xl text-white font-semibold transition duration-300"
        >
            Submit
        </button>
        </form>
    );
    }

    export default Login;
