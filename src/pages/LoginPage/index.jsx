import { useState } from "react";
import login from "../../assets/images/login.png";
import logo from "../../assets/images/logo.png";
import FormInput from "../../components/common/FormField";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    // Send form data to backend
    const formData = {
      email,
      password,
    };

    console.log(formData);

    // Clear form fields and error message
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <>
      <div className="flex justify-end">
        <img src={logo} alt="logo" className="" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 md:p-10">
        <div>
          <img src={login} alt="photo" className="" />
        </div>
        <div>
          <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-10">
            <h1>Login</h1>
          </div>
          <p className="mb-8">
            Welcome back! Please login to your account.
          </p>
          <form onSubmit={handleOnSubmit} className="mr-50">
            <FormInput
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <FormInput
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="***************"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
            >
              Login
            </button>
          </form>
          <p className="mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-primary">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
