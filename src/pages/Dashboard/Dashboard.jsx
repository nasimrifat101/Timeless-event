import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthPrivider";
import Nav from "../Navigation/Nav";

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
    const totalAmount = selectedCards.reduce((acc, card) => acc + parseFloat(card.price), 0);
    return (
        <div>
            <Nav />
            <div className="mt-10">
                {user ? (
                    <div className="max-w-6xl mx-auto grid grid-cols-3">
                        <div className="col-span-1">
                            <img className="w-full" src={user.photoURL} alt={user.displayName} />
                        </div>
                        <div className="col-span-1 px-10">
                            <p>Honorable Client</p>
                            <h1><span className="text-8xl font-semibold">{user.displayName}</span></h1>
                            <p>Email: <span>{user.email}</span></p>

                            <p className="font-bebas pt-5">Your Total is: <span className="font-bebas text-2xl font-semibold">${totalAmount.toFixed(2)}</span> </p>
                        </div>
                        <div className="col-span-1 px-10">
                            <h1 className="text-2xl font-semibold py-3">Your Events: {selectedCards.length}</h1>
                            {selectedCards.length > 0 ? (
                                <div className="">
                                    {selectedCards.map((card) => (
                                        <div key={card.id} className="p-4 rounded shadow-md">
                                            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                                          <div className="flex items-center justify-between">
                                          <p className="text-gray-600">${card.price}</p>
                                            <button
                                                onClick={() => removeFromSelectedCards(card.id)}
                                                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                            >
                                                Remove
                                            </button>
                                          </div>
                                        </div>
                                    ))}
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
        </div>
    );
};

export default Dashboard;
