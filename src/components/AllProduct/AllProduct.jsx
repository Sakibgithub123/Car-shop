import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import { addToLS, getStoredCart, saveCart } from "../Utility/localStorage";


const AllProduct = ({ car}) => {
    const { _id, name, brand_name, price, short_description, rating, image } = car;
    // const handleAddCart = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const brand_name = form.brand_name.value;
    //     const price = form.price.value;
    //     const short_description = form.short_description.value;
    //     const rating = form.rating.value;
    //     const image = form.image.value;
    //     const product = { name, brand_name, price, short_description, rating, image }
    //     console.log(product)
    //     fetch('http://localhost:5000/addcarts', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },

    //         body: JSON.stringify(product)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if(data.insertedId){
    //                 alert('add cart')
    //             }
    //         })
    // }
    
   
  
    return (
        // <form onSubmit={handleAddCart}>
        //     <input type="hidden" name="id" value={_id} />
            <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <input type="hidden" name="image" value={image} />
            <div className="card-body">
                <h2 className="card-title">
                   {name}
                   <input type="hidden" name="name" value={name} />
                </h2>
                <div className="badge badge-outline py-5 px-7  font-medium text-xl  text-accent-conten ">{brand_name}</div>
                <p>{short_description}</p>
               
                <input type="hidden" name="short_description" value={short_description} />
                <div className="card-actions justify-center ">
                    <div className="  font-medium text-xl  text-accent-conten"> Price : {price}</div>
                    <input type="hidden" name="price" value={price} />
                    <input type="hidden" name="brand_name" value={brand_name} />
                    <div className="font-medium text-xl   text-accent-conten">Rating : {rating}</div>
                    <input type="hidden" name="rating" value={rating} />
                </div>
                <div className="card-actions ">
                    <div className=" flex flex-col md:flex-row justify-between gap-10">  
                  <div>
                  <button type="submit" onClick={()=>handleAddCart(car)} className="btn btn-active text-[#fff] bg-neutral-focus">Add Cart</button>
                  </div>
                      <div>
                      <Link to={`/productDetails/${_id}`}><button className="btn btn-active text-[#fff] bg-neutral-focus">Show Details</button></Link>
                      </div>
                    </div>
             
                </div>
            </div>
        </div>
        // </form>
    );
};

export default AllProduct;