import { useLoaderData } from "react-router-dom";
import CartDetails from "./CartDetails";


const Cart = () => {
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
            <h1>{c.length}</h1>
            {/* {
                c.map(cart=><CartDetails key={cart._id} cart={cart}></CartDetails>)
            } */}
        </div>
    );
};

export default Cart;