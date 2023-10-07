
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Navigation/Nav";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
  const sCards = useLoaderData();

  return (
    <div>
      <Nav />
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
        {sCards.map((card) => (
          <Link key={card.id} to={`/details/${card.id}`}>
            <ServiceDetails card={card} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
