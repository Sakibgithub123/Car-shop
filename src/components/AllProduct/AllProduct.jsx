
import { Link } from "react-router-dom";
import {  saveCartData } from "../Utility/localStorage";
import Swal from 'sweetalert2'

const AllProduct = ({ car }) => {
    const { _id, name, brand_name, price, short_description, rating, image } = car;
   
    const handleAddCart = (car) => {
        saveCartData(car._id)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Added Cart Successfully!',
            showConfirmButton: false,
            timer: 1500
          })
    }
   
    return (

        <div className="card  bg-slate-200 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{brand_name}</div>
                </h2>
                {/* <div className="badge badge-outline py-5 px-7  font-medium text-xl  text-accent-conten ">{brand_name}</div> */}
                <p className="text-neutral-focus">{short_description}</p>
                <div className="flex  md:flex-row justify-between gap-10 ">
                    <div className="  font-medium text-xl  text-neutral-focus"> Price : <span className="text-secondary">{price}</span></div>
                    <div className="font-medium text-xl   text-neutral-focus">Rating : <span className="text-secondary">{rating}k</span></div>
                </div>
                <div className="card-actions ">
                    <div className=" flex flex-row justify-between gap-10">
                        <div>
                            <button type="submit" onClick={() => handleAddCart(car)} className="btn btn-active text-[#fff] bg-[#f15d5d]">Add Cart</button>
                        </div>
                        <div>
                            <Link to={`/productDetails/${_id}`}><button className="btn btn-active text-[#fff] bg-[#f15d5d]">Show Details</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllProduct;