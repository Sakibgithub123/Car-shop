import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const singleCarDetails=useLoaderData();
   
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={singleCarDetails.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                   {singleCarDetails.name}
                   
                </h2>
                <p>{singleCarDetails.short_description}</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{singleCarDetails.price}</div>
                    <div className="badge badge-outline">{singleCarDetails.brand_name}</div>
                    <div className="badge badge-outline">{singleCarDetails.rating}</div>
                </div>
                <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Voluptas placeat illum doloremque est, saepe delectus, 
                 sapiente nesciunt eligendi, veniam quasi atque mollitia
                  dicta iure fugiat enim molestias id non recusandae!</p>
                </div>

            </div>
        </div>
        
    );
};

export default ProductDetails;