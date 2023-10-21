import { useLoaderData } from "react-router-dom";
import ProductTable from "./ProductTable";
import { useState } from "react";
import Swal from 'sweetalert2'

// CommonJS



const AddProducts = () => {
    const loaderCars = useLoaderData()
    const [cars,setcar]=useState(loaderCars)
    const handleAddProduct = event => {
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
        fetch('http://localhost:5000/addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Added Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }
    return (

        <div>
            <div className=" min-h-screen bg-base-200 font-lato">
                <div className="hero-content flex-row lg:flex-col">
                    <div className="text-center  my-3">
                        <h1 className="text-5xl font-bold italic">Add Products</h1>
                    </div>
                    <div className="card  w-full max-w-3xl shadow-2xl bg-neutral-focus">
                        <form onSubmit={handleAddProduct} className="card-body w-full ">
                            <div className="flex flex-row justify-between ">
                                <div className="w-5/12">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#fff]">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Enter name here.." className="input input-bordered text-[#e95959]" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#fff]">Brand Name</span>
                                        </label>
                                        <input type="text" name="brand_name" placeholder="Enter brand name here.." className="input input-bordered text-[#fff]" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#fff]">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder="Enter price here.." className="input input-bordered" required />

                                    </div>
                                </div>
                                <div className="w-5/12" >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#fff]">Short description</span>
                                        </label>
                                        <textarea name="short_description" className="input input-bordered" placeholder="Enter short description here.." id="" cols="30" rows="30"></textarea>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#fff]">Rating</span>
                                        </label>
                                        <input type="text" name="rating" placeholder="Enter rating here.." className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-[#fff]">Image</span>
                                        </label>
                                        <input type="text" name="image" placeholder="Enter image url here.." className="input input-bordered" required />
                                    </div>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                            <button type="submit" className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* loaderdata */}
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-semibold text-center py-3 italic">Brand new total cars  : {loaderCars.length}</h1>

                <div className="overflow-x-auto">
                    <table className="table bg-neutral-focus ">
                        {/* head */}
                        <thead className="">
                            <tr className="text-xl text-[#fff]">
                                <th >Image</th>
                                <th>Name</th>
                                <th>Brand Name</th>
                                <th>Price</th>
                                <th>Short Description</th>
                                <th>Rating</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        {
                            loaderCars.map(car => <ProductTable key={car._id} car={car} cars={cars} setcar={setcar} ></ProductTable>)
                        }


                    </table>
                </div>


            </div>
        </div>
    );
};

export default AddProducts;