import { Link, useLoaderData, useParams } from "react-router-dom";
import Nav from "../Navigation/Nav";

const Details = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idint = parseInt(id);
  const card = cards.find((card) => card.id === idint);

  const { img, title, description, price,price2, price3, features, pkz1, pkz2, pkz3 } = card;
  return (
    <div>
      <Nav></Nav>
      <div className="max-w-6xl mx-auto mt-5">
        <div className="grid grid-cols-2">
          <div>
            <img src={img} alt="" className="w-full" />
          </div>
          <div className="space-y-4 bg-white p-10">
            <h1 className="text-7xl font-semibold">{title}</h1>
            <p className="text-lg">{description}</p>
            <p className="font-semibold text-4xl">Our Features</p>
            {features.map((feature, index) => (
              <p className="text-md font-medium" key={index}>{feature}</p>
            ))}

           <div className="py-2">
            <h2 className="text-2xl font-semibold">Choose from </h2>
           <div className="flex justify-between font-medium">
              <h1>{pkz1}</h1>
              <h1>{pkz2}</h1>
              <h1>{pkz3}</h1>
            </div>
            <div className="flex justify-between font-bold">
              <h1>{price}</h1>
              <h1>{price2}</h1>
              <h1>{price3}</h1>
            </div>
           </div>

            <Link to={`/booknow/${id}`}><button className="btn w-full bg-yellow-400 font-bebas text-xl">Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
