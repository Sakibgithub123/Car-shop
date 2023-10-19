

const Aboutus = () => {
    return (
        <div className="hero min-h-screen bg-base-200 font-montserrat">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">About Us!</h1>
            <p className="py-6 text-justify md:w-96">
            Music festival is a universal and timeless form of art and expression that has been an integral part of human culture for millennia.
             It is created through the organization of sounds, tones, and rhythms, often with the use of instruments, vocals, or electronic equipment.
              Music encompasses a wide range of styles and genres, reflecting the diversity of human experiences and emotions.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                {/* <img src={logo} alt="" /> */}
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default Aboutus;