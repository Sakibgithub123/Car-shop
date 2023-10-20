import img1 from "../../assets/bmw.jpg"
import img2 from "../../assets/ford.jpg"
import img3 from "../../assets/honda.jpg"
import img4 from "../../assets/tesla.jpg"
import img5 from "../../assets/toyoto.jpg"
import img6 from "../../assets/mecedes.jpg"
import { Link } from "react-router-dom"

const BrandSection = () => {
  // const {brand_name}=car;
    

    return (
       <div>
         <h1 className="text-5xl font-bold my-5 text-center">Our Brands</h1>

         <div className="avatar flex flex-row justify-between bg-slate-400 p-5 rounded">
        <div  className="w-24 rounded-full">
          {/* <Link to={`/brand/${brand_name}`} ><img src={img1} /></Link> */}
        </div>
        <div className="w-24 rounded-full">
          <img src={img2} />
        </div>
        <div className="w-24 rounded-full">
          <img src={img3} />
        </div>
        <div className="w-24 rounded-full">
          <img src={img4} />
        </div>
        <div className="w-24 rounded-full">
          <img src={img5} />
        </div>
        <div className="w-24 rounded-full">
          <img src={img6} />
        </div>
      </div>
       </div>
       
    );
};

export default BrandSection;