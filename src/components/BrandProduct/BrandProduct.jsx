import { useLoaderData } from "react-router-dom";


const BrandProduct = () => {
    const loader =useLoaderData()
    return (
        <div>
            <h1>{loader.length}</h1>
        </div>
    );
};

export default BrandProduct;