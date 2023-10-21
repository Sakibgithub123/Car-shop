import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const UpdateCar = () => {
    const car =useLoaderData();
    const {_id,name,brand_name,price,short_description,rating,image}=car;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const price = form.price.value;
        const short_description = form.short_description.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const product = { name, brand_name, price, short_description, rating, image }
        console.log(product)
        fetch(`http://localhost:5000/addproducts/${_id}`, {
            method: 'Put',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Updated Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }
    return (
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content flex-row lg:flex-col">
                <div className="text-center  my-3">
                    <h1 className="text-5xl font-bold italic">Update Products</h1>
                </div>
                <div className="card  w-full max-w-3xl shadow-2xl bg-neutral-focus">
                    <form onSubmit={handleUpdateProduct}  className="card-body w-full ">
                        <div className="flex flex-row justify-between">
                        <div className="w-5/12">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Name</span>
                            </label>
                            <input type="text" defaultValue={name} name="name"   className="input input-bordered"  required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Brand Name</span>
                            </label>
                            <input type="text" name="brand_name" defaultValue={brand_name} placeholder="Enter brand name here.." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="Enter price here.." className="input input-bordered" required />
                           
                        </div>
                        </div>
                       <div className="w-5/12" >
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Short description</span>
                            </label>
                            <textarea name="short_description" defaultValue={short_description} className="input input-bordered" placeholder="Enter short description here.." id="" cols="50" rows="50"></textarea> 
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={rating} placeholder="Enter rating here.." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Image</span>
                            </label>
                            <input type="text" name="image" defaultValue={image} placeholder="Enter image url here.." className="input input-bordered" required />
                        </div>
                       </div>

                        </div>
                        <div className="form-control mt-6">
                        <button type="submit" className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Update Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCar;