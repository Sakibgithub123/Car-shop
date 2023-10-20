import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import AllProduct from "../AllProduct/AllProduct";
import BrandSection from "../BrandSection/BrandSection";
import ReView from "../ReView/ReView";
import { useEffect, useState } from "react";
import { addToLS, getStoredCart } from "../Utility/localStorage";


const Home = () => {
    const cars=useLoaderData()
    const [addcart,setAddcart]=useState([])
    const handleAddCart=car=>{
        console.log(car)
        const newcart=[...addcart,car];
        setAddcart(newcart)
        addToLS(car._id)

    }
    useEffect(()=>{
        if(cars.length>0){
            const storedCart= getStoredCart()
            console.log(storedCart)
            const saveCart= []
            for( const id of storedCart ){
                const car=cars.find(car=> car._id === id)
                if(car){
                    saveCart.push(car)
                }
            }
            setAddcart(saveCart)
        }
        
       
    },[cars])
    return (
        <div>
            <Banner></Banner>
           {/* {
             
             cars.map(car=><BrandSection key={car._id} car={car}></BrandSection>)
           } */}
           <BrandSection></BrandSection>
            <h1 className="text-5xl font-bold my-5 text-center">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-neutral-focus rounded p-5 ">

                {
                    cars.map(car=><AllProduct handleAddCart={handleAddCart} key={car._id} car={car}></AllProduct>)
                }
                

            </div>
            
            <ReView></ReView>
        </div>
    );
};

export default Home;