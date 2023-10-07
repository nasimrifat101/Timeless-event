import { Link, useLoaderData, useParams } from "react-router-dom";
import Nav from "../Navigation/Nav";

const Details = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idint = parseInt(id);
  const card = cards.find((card) => card.id === idint);

  const { img, title, description, price, features } = card;
  return (
    <div>
      <Nav></Nav>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <img src={img} alt="" className="w-full" />
          </div>
          <div className="space-y-4 bg-white p-10">
            <h1 className="text-7xl font-semibold">{title}</h1>
            <p className="text-xl">{description}</p>
            <p className="font-semibold text-4xl">Our Features</p>
            {features.map((feature, index) => (
              <p key={index}>{feature}</p>
            ))}

            <Link to='/services'><button className="btn bg-yellow-400 font-bebas text-xl">Book Now at {price}</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
