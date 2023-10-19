import { Link } from "react-router-dom";


const ProductTable = ({car,cars,setcar}) => {
    const {_id,name,brand_name,price,short_description,rating,image}=car;
    const handleDelete=_id=>{
        console.log(_id)
        fetch(`http://localhost:5000/addproducts/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted')
            }
            const remainingCar = cars.filter(car=>car._id !== _id);
            setcar(remainingCar);
        })

    }
    return (
         <tbody>
                     {/* row 1 */}
                     <tr>
                       
                       <td><div className="avatar">
                             <div className="mask mask-squircle w-12 h-12">
                               <img src={image} alt="Avatar Tailwind CSS Component" />
                             </div>
                           </div></td>
                       <td> {name}</td>
                       <td>{brand_name}</td>
                       <td>{price}</td>
                       <td>{short_description}</td>
                       <td>{rating}</td>
                       <td>
                         <Link to={`/updateCar/${_id}`}><button className="btn btn-ghost btn-xs">Edit</button></Link>
                         <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
                       </td>
                     </tr>
                   </tbody>
       
    );
};

export default ProductTable;