/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { useContext } from "react";
import Nav from "../Navigation/Nav";
import { AuthContext } from "../../authProvider/AuthPrivider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storage } from "../../firebase/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Signup = () => {
  const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const storageRef = ref(storage, 'profilePicture');

  const handleSignUp = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const profilePicture = form.get("profilePicture");
    const email = form.get("email");
    const password = form.get("password");
    
    

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

    try {
      const storageRef = ref(storage, `profilePictures/${name}-profilePicture.jpg`);
      await uploadBytes(storageRef, profilePicture);
      const imageURL = await getDownloadURL(storageRef);
  
      
      // Create user and update profile with imageURL
      createUser(email, password)
        .then((res) => {
          updateUserProfile(name, imageURL)
            .then(() => {
              console.log("Profile updated!");
            })
            .catch((error) => {
              console.error("Error updating profile:", error);
            });
          navigate("/");
          toast.success("Account Created Successfully");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Email already exists");
        });
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      toast.error("Error uploading profile picture. Please try again.");
    }
  };
  const handleGoogleLog = async () => {
    try{
      await googleLogin();
      navigate(location?.state ? location.state : "/");
    } catch(error){
      console.log(error)
    }
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
                          className="input input-bordered font-sans"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Profile Picture</span>
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          name="profilePicture"
                          className="input input-bordered font-sans p-2"
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
                          className="input input-bordered font-sans"
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
                          className="input input-bordered font-sans"
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
                <button onClick={handleGoogleLog} className="btn btn-outline rounded-full w-96">
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
