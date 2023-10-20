import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import AllProduct from "../AllProduct/AllProduct";
import BrandSection from "../BrandSection/BrandSection";
import ReView from "../ReView/ReView";


const Home = () => {
    const cars=useLoaderData()
    return (
        <div>
            <Banner></Banner>
           {/* {
             
             cars.map(car=><BrandSection key={car._id} car={car}></BrandSection>)
           } */}
           <BrandSection></BrandSection>
            <h1 className="text-5xl font-bold my-5 text-center">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-base-100 p-5 ">

                {
                    cars.map(car=><AllProduct key={car._id} car={car}></AllProduct>)
                }
                

            </div>
            
            <ReView></ReView>
        </div>
    );
};

export default Home;