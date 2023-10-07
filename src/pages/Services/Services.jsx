import { useLoaderData } from "react-router-dom";
import Nav from "../Navigation/Nav";
import ServiceDetails from "./ServiceDetails";

const Services = () => {
    const sCards = useLoaderData();
    return (
        <div>
            <Nav></Nav>
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
            
          {
                sCards.map(card=> <ServiceDetails key={card.id} card={card}></ServiceDetails>)
            }
          </div>
        </div>
    );
};

export default Services;