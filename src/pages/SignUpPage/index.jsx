import { useState } from "react";
import login from "../../assets/images/signup.png";
import logo from "../../assets/images/logo.png";
import FormInput from "../../components/common/FormField";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const [isChecked, setIsChecked] =
    useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !isChecked
    ) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
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
    setConfirmPassword("");
    setIsChecked(false);
    error("");
  };

  return (
    <>
      <div className="flex justify-end">
        <img src={logo} alt="logo" className="" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 md:p-10">
        <div>
          <img
            src={login}
            alt="photo"
            className=""
          />
        </div>
        <div>
          <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary mb-10">
            <h1>Sign Up</h1>
          </div>
          <p className="mb-8">
            Your jouney start here
          </p>
          <form className="mr-50">
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
            <FormInput
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="confirmPassword"
              placeholder="***************"
              value={confirmPassword}
              onChange={
                handleConfirmPasswordChange
              }
              required
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
                required
              />
              <label
                htmlFor="terms"
                className="text-sm"
              >
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-primary"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark"
              onClick={handleOnSubmit}
            >
              Create Account
            </button>
          </form>
          <p className="mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-primary"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
