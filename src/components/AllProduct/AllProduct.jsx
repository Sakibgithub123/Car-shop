import { Link } from "react-router-dom";


const AllProduct = ({ car }) => {
    const { _id, name, brand_name, price, short_description, rating, image } = car;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                   {name}
                   
                </h2>
                <p>{short_description}</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{price}</div>
                    <div className="badge badge-outline">{brand_name}</div>
                    <div className="badge badge-outline">{rating}</div>
                </div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                       
                       <Link to={`/productDetails/${_id}`}><button>Details</button></Link>
                    </div>
             
                </div>
            </div>
        </div>
    );
};

export default AllProduct;