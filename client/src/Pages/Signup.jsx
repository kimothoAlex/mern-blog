import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen mt-20 p-5">
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">
        {/*right side*/}
        <div className="flex-1">
          <Link
            to={"/"}
            className="text-4xl dark:text-white sm:text-4xl font-bold"
          >
            <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              Muchene's
            </span>
            blog
          </Link>
          <p className="mt-5 text:sm">
            Sign up with your username, email and password or continue with
            google.{" "}
          </p>
        </div>
        {/*left side */}
        <div className="flex-1">
          <form className="flex-col gap-3 flex">
            <div>
              <Label value="Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              SignUp
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an acount?</span>
            <Link to="/sign-in" className="text-blue-500">
              SignIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
