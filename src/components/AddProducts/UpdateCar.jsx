import { useLoaderData } from "react-router-dom";


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
                    alert('update')
                }
            })
    }
    return (
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content flex-row lg:flex-col">
                <div className="text-center  my-3">
                    <h1 className="text-5xl font-bold">Update Products</h1>
                </div>
                <div className="card  w-full max-w-3xl shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdateProduct}  className="card-body w-full ">
                        <div className="flex flex-row justify-between">
                        <div className="w-5/12">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={name} name="name"   className="input input-bordered"  required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name="brand_name" defaultValue={brand_name} placeholder="Enter brand name here.." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="Enter price here.." className="input input-bordered" required />
                           
                        </div>
                        </div>
                       <div className="w-5/12" >
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <textarea name="short_description" defaultValue={short_description} className="input input-bordered" placeholder="Enter short description here.." id="" cols="30" rows="30"></textarea> 
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={rating} placeholder="Enter rating here.." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" name="image" defaultValue={image} placeholder="Enter image url here.." className="input input-bordered" required />
                        </div>
                       </div>

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Update Car</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCar;