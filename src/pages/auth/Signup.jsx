import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { useContext } from "react";
import Nav from "../Navigation/Nav";
import { AuthContext } from "../../authProvider/AuthPrivider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one capital letter.");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      toast.error("Password must contain at least one special character.");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Account Created Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("sSomething went wrong. Please try Again");
      });
  };

  return (
    <div>
      <div>
        <Nav></Nav>
        <div>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="grid h-fit card rounded-box place-items-center">
              <div className="">
                <div className="hero-content flex-col">
                  <div className="card w-[500px] max-w-xl border border-black bg-base-100">
                    <h1 className="text-2xl px-8 pt-10 font-bold">
                      Create An Account
                    </h1>
                    <form onSubmit={handleSignUp} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          name="password"
                          className="input input-bordered"
                          required
                        />
                        <div className="flex justify-between mt-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              name="checkbox"
                              id="remember-me"
                            />
                            <label htmlFor="remember-me">Remember me</label>
                          </div>
                          <div className="text-yellow-400 font-bold">
                            <Link> Forgot Password?</Link>
                          </div>
                        </div>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn bg-yellow-400">Register</button>
                      </div>
                      <p className="text-center text-sm">
                        Already Have An Account?
                        <span className="text-yellow-400 underline ml-2 font-medium">
                          <Link to="/login">Login</Link>
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider">OR</div>
            <div className="grid h-fit card rounded-box place-items-center">
              <div className="space-y-3 flex flex-col mb-10">
                <button className="btn btn-outline rounded-full w-96">
                  <BsGoogle className="text-xl"></BsGoogle>Continue With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Signup;
