/* eslint-disable react/prop-types */

const HomeCard = ({ card }) => {
  const { img, title, description1, price } = card;

  return (
    <div className="">
      <div className="card card-compact w-96 bg-transparent ">
        <figure>
          <img
            src={img}
            alt={img}
            className="w-full h-[560px] p-4 rounded-t-full shadow-lg"
          />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="font-bebas text-2xl font-bold">Starting at  {price}</p>
          <p>{description1}</p>
          <div className="card-actions justify-end">
            <button className="btn w-full bg-amber-300 font-bebas text-xl">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
