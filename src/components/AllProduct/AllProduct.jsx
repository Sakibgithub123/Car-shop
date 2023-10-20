
import { Link } from "react-router-dom";
import {  saveCartData } from "../Utility/localStorage";

const AllProduct = ({ car }) => {
    const { _id, name, brand_name, price, short_description, rating, image } = car;
   
    const handleAddCart = (car) => {
        saveCartData(car._id)
        alert("You have donate successfully!")
    }
   
    return (

        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{brand_name}</div>
                </h2>
                {/* <div className="badge badge-outline py-5 px-7  font-medium text-xl  text-accent-conten ">{brand_name}</div> */}
                <p>{short_description}</p>
                <div className="card-actions justify-center ">
                    <div className="  font-medium text-xl  text-accent-conten"> Price : {price}</div>
                    <div className="font-medium text-xl   text-accent-conten">Rating : {rating}k</div>
                </div>
                <div className="card-actions ">
                    <div className=" flex flex-col md:flex-row justify-between gap-10">
                        <div>
                            <button type="submit" onClick={() => handleAddCart(car)} className="btn btn-active text-[#fff] bg-neutral-focus">Add Cart</button>
                        </div>
                        <div>
                            <Link to={`/productDetails/${_id}`}><button className="btn btn-active text-[#fff] bg-neutral-focus">Show Details</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllProduct;