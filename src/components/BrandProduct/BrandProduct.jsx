import { useLoaderData } from "react-router-dom";


const BrandProduct = () => {
    const car =useLoaderData();
    const {_id,name,brand_name,price,short_description,rating,image}=car;
    return (
        <div>
            <h1>{car.length}</h1>
        </div>
    );
};

export default BrandProduct;