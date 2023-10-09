import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const nameRef = useRef(null);
  const textareaRef = useRef(null);
  const emailRef = useRef(null);

  const handleButtonClick = () => {
    const name = nameRef.current.value;
    const description = textareaRef.current.value;
    const email = emailRef.current.value;

    if (name && description && email) {
      toast.success("Message sent successfully!");
    } else {
      toast.error("All fields are required.");
    }
  };

  return (
    <div className="my-10">
      <h1 className="font-semibold text-4xl text-center">Say Hello</h1>
      <div className="grid grid-cols-3 max-w-6xl mx-auto">
        <div className="col-span-2 h-[400px]  p-14">
          <h1 className="text-2xl font-young">
            Hello there my name is{" "}
            <input
              ref={nameRef}
              type="text"
              placeholder="Your Name here"
              className="bg-transparent outline-none border-b-2"
            />
          </h1>
          <h1 className="text-2xl pt-10 font-young">
            I'm looking for a team to help me with
            <textarea
              ref={textareaRef}
              name="text-area"
              placeholder="Short project description"
              className="w-full bg-transparent outline-none border-b-22 h-32"
            ></textarea>
          </h1>
          <h1 className="text-2xl font-young">
            You can reach me at{' '}
            <input
              type="text"
              ref={emailRef}
              placeholder="Your email here"
              className="bg-transparent outline-none border-b-2"
            />
          </h1>
          <div className="flex justify-end">
            <button className="btn font-young" onClick={handleButtonClick}>
              send
            </button>
          </div>
        </div>
        <div className="bg-black">
          <img
            src="https://i.postimg.cc/tJ6xcP6g/ilia-bronskiy-pq2-VLU9-59-E-unsplash.jpg"
            className="h-[400px] w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
