

const Contactus = () => {
    return (
        <div className="hero min-h-screen bg-base-200 font-montserrat">
        <div className="hero-content w-full">

            <div className="card md:w-7/12  shadow-2xl bg-[#2d3e50] ">
                
                <form className="card-body">
                <h1 className="text-center text-[#fff] text-3xl font-semibold">Contact Us</h1>
                <div className="form-control">
                        <label className="label">
                            <span className="text-[#fff]">Name</span>
                        </label>
                        <input type="email" name="name" placeholder="Enter name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#fff]">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter email" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#fff]">Message</span>
                        </label>
                        <textarea className="textarea textarea-primary" placeholder="Message"></textarea>
                      <div>
                      </div>
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="border border-slate-500 py-2 px-6 text-[#fff] font-semibold text-base">Sent</button>
                       
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Contactus;