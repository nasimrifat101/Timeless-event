
/* eslint-disable react/prop-types */
const ServiceDetails = ({ card }) => {
    const {
      img,
      title,
      description,
      pkz1,
      pkz2,
      pkz3,
      price,
      price2,
      price3,
    } = card;
    
    return (
      <div>
        <div className="my-5">
          <div>
            <div className="card m-3 md:m-0 lg:w-96 bg-base-100 shadow-xl">
              <div className="card-body h-[350px]">
                <h2 className="card-title text-2xl">{title}</h2>
                <div className="flex justify-between">
                  <h1>{pkz1}</h1>
                  <h1>{pkz2}</h1>
                  <h1>{pkz3}</h1>
                </div>
                <div className="flex justify-between font-semibold">
                  <h1>{price}</h1>
                  <h1>{price2}</h1>
                  <h1>{price3}</h1>
                </div>
                <p>{description}</p>
               
              </div>
               <div className="relative">
               <img src={img} className="h-[550px] rounded-b-xl w-full" alt="Shoes" />
              <button className="absolute top-[500px] p-7 border-none btn bg-yellow-400 w-full">Book Now</button>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceDetails;
  