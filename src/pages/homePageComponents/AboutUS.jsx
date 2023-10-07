import Marquee from "react-fast-marquee";

const AboutUS = () => {
  return (
    <div className="mt-32">
      <div className="mx-auto max-w-6xl">
      <p className="text-4xl font-bold text-center">What we do</p>
      </div>
      <div className="py-5">
        <Marquee speed={30} direction="right">
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
      {/*  */}
      <div className="bg-[#F4F1EA]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-5">
          <div className="text-center">
            <h1 className="text-6xl  pb-5">Planning</h1>
            <p>
            With over a decade of experience, leave the spreadsheets, budget management, vendor outreach, mobile bidding software, and onsite event management to us. 
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-6xl pb-5">Design</h1>
            <p>
            From event storyboarding to marketing, our team will design your dream event from the ground up. and give you the best of design and decore.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-6xl  pb-5">Production</h1>
            <p>
            Stage management is our forte. Working with our preferred production partners, we will ensure that every light, sound, and moment is perfectly on cue! Did we mention that scripting is also in our scope? 
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-6xl  pb-5">Cultivation</h1>
            <p>
            You bring the contacts, and we will bring the solicitation and fulfillment management! Not only that, but we will oversee the event board, leadership, and committee communications to ensure that we stay on track for a successful event. 
            </p>
          </div>
        </div> 
        <div className="flex justify-center p-10">
        <button className="btn bg-yellow-400 w-96 text-black font-bebas text-xl">Learn More About our services</button>
          </div> 
      </div>
    </div>
  );
};

export default AboutUS;
