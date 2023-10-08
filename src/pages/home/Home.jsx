import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Navigation/Nav";
import Banner from "../homePageComponents/Banner";
import HomeCard from "../homePageComponents/homecard";
import AboutUS from "../homePageComponents/AboutUS";
import Footer from "../footer/Footer";
import Marquee from "react-fast-marquee";
import Recent from "../homePageComponents/Recent";
import Reviews from "../homePageComponents/Reviews";

const Home = () => {
  const cards = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const filteredCards = showAll ? cards : cards.slice(0, 6);

  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      
      {/* cards */}
      <h2 className="text-4xl font-bold text-center mt-10">Our Services</h2>
        <div className="py-5">
        <Marquee speed={30} direction="left">
          <div className="flex">
            <p className="text-2xl">Planning With Heart</p>
            <p className="text-2xl">Planning With Heart</p>
            <p className="text-2xl">Planning With Heart</p>
            <p className="text-2xl">Planning With Heart</p>
            <p className="text-2xl">Planning With Heart</p>
            <p className="text-2xl">Planning With Heart</p>
          </div>
        </Marquee>
      </div>
      <div className="max-w-6xl mx-auto mt-10">
        <div className="grid grid-cols-3 gap-7">
  {Array.isArray(filteredCards) &&
    filteredCards.map((card) => (
      <Link to={`/details/${card.id}`} key={card.id}>
        <HomeCard card={card}></HomeCard>
      </Link>
    ))}
</div>
        {!showAll && cards.length > 6 && (
          <div className="flex justify-center my-5">
            <button
              className="bg-yellow-400 text-black font-bebas font-bold py-2 px-4 rounded"
              onClick={() => setShowAll(true)}
            >
              Show All
            </button>
          </div>
        )}
      </div>
      {/* cards over */}
      <AboutUS></AboutUS>
      <Reviews></Reviews>
      <Recent></Recent>
     <Footer></Footer>
    </div>
  );
};

export default Home;
