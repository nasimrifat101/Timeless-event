import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthPrivider";
import Nav from "../Navigation/Nav";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("selectedCards")) || [];
    setSelectedCards(storedCards);
  }, []);
  const removeFromSelectedCards = (id) => {
    const updatedCards = selectedCards.filter((card) => card.id !== id);
    setSelectedCards(updatedCards);
    localStorage.setItem("selectedCards", JSON.stringify(updatedCards));
  };
  const totalAmount = selectedCards.reduce(
    (acc, card) => acc + parseFloat(card.price),
    0
  );

  const handlePay = () => {
    toast.success("Payment Successfull");
  };

  return (
    <div className="bg-white">
      <Nav />
      <div className="mt-10">
        {user ? (
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3">
            <div className="col-span-1">
              <img
                className="w-full"
                src={user.photoURL}
                alt={user.displayName}
              />
            </div>
            <div className="col-span-1 px-10">
              <h1>
                <span className="lg:text-5xl font-semibold">
                  {user.displayName}
                </span>
              </h1>
              <p className="text-sm">
                Email: <span>{user.email}</span>
              </p>
            </div>
            <div className="col-span-1 px-10">
              <h1 className="lg:text-4xl font-semibold py-3">Your Events</h1>
              {selectedCards.length > 0 ? (
                <div className="rounded-lg">
                  <div>
                    <hr className="border-2 border-black" />
                  </div>
                  <div>
                    {selectedCards.map((card) => (
                      <div
                        key={card.id}
                        className=" p-2 rounded flex justify-between items-center"
                      >
                        <h2 className="font-semibold">{card.title}</h2>
                        <div className="">
                          <button
                            onClick={() => removeFromSelectedCards(card.id)}
                          >
                            <AiOutlineCloseCircle></AiOutlineCloseCircle>
                          </button>
                        </div>
                      </div>
                    ))}
                    <div></div>
                    <hr className="border-2 border-black" />
                    <p className="font-bebas mt-5">
                      Events Selected:{" "}
                      <span className="font-bebas text-2xl font-semibold">
                        {selectedCards.length}
                      </span>
                    </p>
                    <p className="font-bebas pb-3">
                      Your Total is:{" "}
                      <span className="font-bebas text-2xl font-semibold">
                        ${totalAmount.toFixed(2)}
                      </span>{" "}
                    </p>
                    <button
                      onClick={handlePay}
                      className="btn bg-yellow-400 w-full font-bebas text-2xl mb-10"
                    >
                      pay now
                    </button>
                  </div>
                </div>
              ) : (
                <p>No selected cards.</p>
              )}
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Dashboard;
