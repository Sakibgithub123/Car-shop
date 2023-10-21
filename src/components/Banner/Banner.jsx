
import img from "../../assets/m1.jpg"
import logo from "../../assets/carlogo.png"
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-neutral-focus ">
        <div className="hero-content  flex-col-reverse lg:flex-row-reverse">
          <img src={img} className="max-w-base md:max-w-md rounded-full border border-b-red-600  shadow-2xl" />
          <div className=" md:w-2/4 text-center">
            <h1 className="text-3xl md:text-5xl text-[#f15d5d] font-bold italic">Welcome To Our CarMall!</h1>
            <p className="py-6 text-[#fff] italic">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-[#f15d5d] text-[#fff]">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;