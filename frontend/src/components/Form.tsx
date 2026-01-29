import { Link } from "react-router";
import logo from "../assets/YouTube-1.png";

type FormProps =
  | {
      title: string;
      mode: "Signup";
    }
  | { title: string; mode: "Login" };

const Form = ({ title, mode }: FormProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} alt="YouTube logo" className="w-50" />
      <form className="form flex flex-col gap-2 justify-center items-center px-2 py-2">
        <h1 className="text-3xl font-bold text-[#EA0000]">{title}</h1>
        {mode == "Signup" && (
          <div className="name-input">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" className="px-3 py-2" />
          </div>
        )}

        <div className="email-input">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" className="px-3 py-2" />
        </div>
        <div className="password-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="px-3 py-2"
          />
          {mode == "Login" && (
            <p className="font-bold self-start text-blue-900 cursor-pointer">
              Forget Password?
            </p>
          )}
        </div>
        <button className="w-[90%] rounded mx-5 mt-3 text-lg bg-blue-500 text-white font-bold py-2">
          Submit
        </button>
        {mode == "Signup" && (
          <p className="text-gray-600 font-semibold py-2 px-2">
            Already have a Account?{" "}
            <Link to="/login" className="hover:cursor-pointer text-blue-700">
              Login here
            </Link>
          </p>
        )}
        {mode == "Login" && (
          <p className="text-gray-600 font-semibold py-2 px-2">
            Don't have an Account?{" "}
            <Link to="/signup" className="hover:cursor-pointer text-blue-700">
              Signup here
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
