import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import {  getCartData } from "../Utility/localStorage";
// import Swal from 'sweetalert2'


const Cart = () => {
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
            <h1 className="text-5xl font-bold my-5 text-center italic">Your Cart : {cart.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    cart.map(car => <div key={car._id}>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img src={car.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {car.name}
                                    <div className="badge badge-secondary">{car.brand_name}</div>
                                </h2>
                                <p className=" font-medium text-xl  "> <span >Quantity :</span> <input type="number" min={1} max={5}  value={1} className="input bg-secondary text-[#fff] w-full m-2 max-w-xs" /></p>
                                <div className=" flex flex-row justify-between ">
                                    <div className="  font-medium text-xl  text-accent-conten"> Price : <span className="text-secondary">{car.price}</span></div>
                                    <div className="font-medium text-xl   text-accent-conten">Rating : <span className="text-secondary">{car.rating}k</span></div>
                                </div>
                                <div className="card-actions ">
                                    <div className=" flex flex-col md:flex-row justify-between gap-10">
                                        <div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)

                }
            </div>
            {/* <div className={`dataLength === cart.length ? 'hidden' : ''`}>
                <button onClick={() => setDtaLength(cart.length)} className="btn bg-[#009444] btn-accent text-[#fff] text-lg font-semibold my-6">See All</button>
            </div> */}
        </div>
    );
};

export default Cart;