import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Nav from "../Navigation/Nav";
import Banner from "../homePageComponents/Banner";
import HomeCard from "../homePageComponents/homecard";
import AboutUS from "../homePageComponents/AboutUS";
import Footer from "../footer/Footer";
import Marquee from "react-fast-marquee";
import Recent from "../homePageComponents/Recent";
import Reviews from "../homePageComponents/Reviews";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from "../contact/ContactUs";

const Home = () => {
  const cards = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
    });
  }, []);

  const filteredCards = showAll ? cards : cards.slice(0, 6);

  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>

      <div data-aos="zoom-in">
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
              <Link to="/services">
                <button
                  className="bg-yellow-400 text-black font-bebas font-bold py-2 px-4 rounded"
                  onClick={() => setShowAll(false)}
                >
                  Show All
                </button>
              </Link>
            </div>
          )}
        </div>
        {/* cards over */}
      </div>

      <div data-aos="zoom-in-down">
        <AboutUS></AboutUS>
      </div>
      <div data-aos="fade-down">
        <Reviews></Reviews>
      </div>
      <div data-aos="fade-in">
        <Recent></Recent>
      </div>
      <div data-aos="fade-down">
        <ContactUs></ContactUs>
      </div>
      <Footer></Footer>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Home;
