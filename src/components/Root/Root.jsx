import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { getCartData } from "../Utility/localStorage";
// ES6 Modules or TypeScript


const Root = () => {
    const car = useLoaderData()
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCartId = getCartData()
        if (car.length > 0) {
            const appliedCart = car.filter(car => storedCartId.includes(car._id))
            setCart(appliedCart)
        }
    }, [car])
    return (
        <div>
            <Header cart={cart}></Header>
           <div className="max-w-6xl mx-auto my-6">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;