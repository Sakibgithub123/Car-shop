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
           {/*   */}
           <BrandSection ></BrandSection>
            <h1 className="text-5xl font-bold my-10 text-center  italic">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-neutral-focus rounded p-5 ">

                {
                    cars.map(car=><AllProduct  key={car._id} car={car}></AllProduct>)
                }
                

            </div>
            
            <ReView></ReView>
        </div>
    );
};

export default Home;