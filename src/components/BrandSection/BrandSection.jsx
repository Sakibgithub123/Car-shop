import img1 from "../../assets/bmw.jpg"
import img2 from "../../assets/ford.jpg"
import img3 from "../../assets/honda.jpg"
import img4 from "../../assets/tesla.jpg"

const BrandSection = () => {
    return (
       <div>
         <h1 className="text-5xl font-bold my-5 text-center">Our Brands</h1>

         <div className="avatar flex flex-row justify-between">
        <div className="w-24 rounded-full">
          <img src={img1} />
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
          <img src={img1} />
        </div>
        <div className="w-24 rounded-full">
          <img src={img2} />
        </div>
      </div>
       </div>
       
    );
};

export default BrandSection;