import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const singleCarDetails=useLoaderData();
   
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={singleCarDetails.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                   {singleCarDetails.name}
                   
                </h2>
                <p className="text-xl">{singleCarDetails.short_description}</p>
                <div className="card-actions justify-start">
                    <div className="badge badge-outline badge-secondary">{singleCarDetails.price}</div>
                    <div className="badge badge-outline badge-secondary">{singleCarDetails.brand_name}</div>
                    <div className="badge badge-outline badge-secondary">*{singleCarDetails.rating}k</div>
                </div>
                <div>
                <p className="text-base text-neutral-focus">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Voluptas placeat illum doloremque est, saepe delectus, 
                 sapiente nesciunt eligendi, veniam quasi atque mollitia
                  dicta iure fugiat enim molestias id non recusandae! 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Dolores ducimus vel alias exercitationem ea fuga cum, a non eos,
                   eaque possimus explicabo delectus soluta deserunt quam? 
                   Quos cum explicabo enim eum dolores repellendus commodi 
                   fugit maxime. Ad, architecto! Ut voluptatibus autem sit 
                   architecto natus obcaecati culpa perferendis iste cupiditate ipsa?</p>
                </div>

            </div>
        </div>
        
    );
};

export default ProductDetails;