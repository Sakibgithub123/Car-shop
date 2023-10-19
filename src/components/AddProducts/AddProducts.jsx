import { useLoaderData } from "react-router-dom";
import ProductTable from "./ProductTable";
import { useState } from "react";


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
                    alert('update')
                }
            })
    }
    return (

        <div>
            <div className=" min-h-screen bg-base-200">
                <div className="hero-content flex-row lg:flex-col">
                    <div className="text-center  my-3">
                        <h1 className="text-5xl font-bold">Add Products</h1>
                    </div>
                    <div className="card  w-full max-w-3xl shadow-2xl bg-base-100">
                        <form onSubmit={handleAddProduct} className="card-body w-full ">
                            <div className="flex flex-row justify-between">
                                <div className="w-5/12">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Enter name here.." className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Brand Name</span>
                                        </label>
                                        <input type="text" name="brand_name" placeholder="Enter brand name here.." className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="price" placeholder="Enter price here.." className="input input-bordered" required />

                                    </div>
                                </div>
                                <div className="w-5/12" >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Short description</span>
                                        </label>
                                        <textarea name="short_description" className="input input-bordered" placeholder="Enter short description here.." id="" cols="30" rows="30"></textarea>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Rating</span>
                                        </label>
                                        <input type="text" name="rating" placeholder="Enter rating here.." className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image</span>
                                        </label>
                                        <input type="text" name="image" placeholder="Enter image url here.." className="input input-bordered" required />
                                    </div>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Add Car</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* loaderdata */}
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl text-center py-3">Brand new cars total : {loaderCars.length}</h1>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className=" text-xl">
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