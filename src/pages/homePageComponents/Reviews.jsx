import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import './css/reviews.css';
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/public/reviews.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="h-[500px] bg-[#016A70] p-20 hidden lg:block">
      <div className="max-w-6xl mx-auto grid grid-cols-3">
        <div className="col-span-1 bg-[#FF6969] h-full p-10">
          <h1 className="text-6xl mt-10 pb-6 font-semibold">Client reviews</h1>
          <p className="text-sm">
            Discover what our clients have to say about their experiences with
            our services. Read heartfelt testimonials from satisfied customers
            who have celebrated their special moments with us. Their stories
            highlight the attention to detail, creativity, and professionalism
            we bring to every event, ensuring unforgettable memories for all.
          </p>
        </div>
        <div className="col-span-2 bg-[#D0E7D2]">
          <div className="container">
            <Slider {...settings}>
              {cards.map((item) => (
               <ReviewCard key={item.id} item={item}></ReviewCard>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
