import React, { useState } from "react";
import InputField from "../../common/InputField";

function Register() {
  const [userReg, setUserReg] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", userReg);
    // Add registration API logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 w-full max-w-sm mx-auto px-4 sm:px-6 md:px-8"
    >
      <InputField
        type="text"
        label="UserName"
        value={userReg.name}
        onChange={(e) => setUserReg({ ...userReg, name: e.target.value })}
      />

      <InputField
        type="email"
        label="Email"
        value={userReg.email}
        onChange={(e) => setUserReg({ ...userReg, email: e.target.value })}
      />

      <InputField
        type="password"
        label="Set-Password"
        value={userReg.password}
        onChange={(e) => setUserReg({ ...userReg, password: e.target.value })}
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

export default Register;
