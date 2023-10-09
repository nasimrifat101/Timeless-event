const Banner = () => {
  return (
    <div className="">
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/B6pyNhBX/bg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 md:text-3xl font-semibold"> Creating an experience that remains memorable and </h1>
            <h1 className="mb-5 text-5xl md:text-8xl font-bold font-bebas ">Timeless</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;