
import img from "../../assets/m1.jpg"
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-neutral-focus ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-full border border-b-red-600 shadow-2xl" />
          <div className="w-2/4">
            <h1 className="text-5xl text-[#f15d5d] font-bold">Welcome Our CarMall!</h1>
            <p className="py-6 text-[#fff]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;