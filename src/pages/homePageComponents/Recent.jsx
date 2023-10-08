import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Recent = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/public/images.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-32">
      <div>
        <h3 className="text-4xl font-bold text-center">Recent works</h3>
        <div>
          <Marquee speed={20} pauseOnHover>
            {images.map((img) => (
              <img key={img.id} className="w-80 p-10" src={img.img} alt={`Recent work ${img.id}`} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Recent;
