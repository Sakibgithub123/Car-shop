import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import AllProduct from "../AllProduct/AllProduct";


const Home = () => {
    const cars=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {
                    cars.map(car=><AllProduct key={car._id} car={car}></AllProduct>)
                }
                

            </div>
        </div>
    );
};

export default Home;