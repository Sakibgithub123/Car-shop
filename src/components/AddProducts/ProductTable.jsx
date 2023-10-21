import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const ProductTable = ({car,cars,setcar}) => {
    const {_id,name,brand_name,price,short_description,rating,image}=car;
    const handleDelete=_id=>{
        console.log(_id)
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/addproducts/${_id}`,{
              method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data)
       
              if(data.deletedCount > 0){
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
              const remainingCar = cars.filter(car=>car._id !== _id);
              setcar(remainingCar);
          })
           
          }
        })
      

    }
    return (
         <tbody className="text-[#fff]">
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
                       <td className="flex flex-col space-y-3">
                       {/* <button className="btn btn-outline">Default</button> */}
                         <Link to={`/updateCar/${_id}`}><button className="btn btn-outline text-[#fff] btn-info btn-xs">Edit</button></Link>
                         <button onClick={()=>handleDelete(_id)} className="btn btn-outline btn-info  btn-xs">Delete</button>
                       </td>
                     </tr>
                   </tbody>
       
    );
};

export default ProductTable;