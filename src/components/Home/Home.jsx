import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import AllProduct from "../AllProduct/AllProduct";
import BrandSection from "../BrandSection/BrandSection";


const Home = () => {
    const cars=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-5xl font-bold my-5 text-center">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

                {
                    cars.map(car=><AllProduct key={car._id} car={car}></AllProduct>)
                }
                

            </div>
            <BrandSection></BrandSection>
        </div>
    );
};

export default Home;