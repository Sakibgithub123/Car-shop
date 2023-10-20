

const Contactus = () => {
    return (
        <div className="hero min-h-screen bg-base-200 font-montserrat">
        <div className="hero-content w-full">

            <div className="card md:w-7/12  shadow-2xl bg-neutral-focus ">
                
                <form className="card-body">
                <h1 className="text-center text-[#f15d5d] text-3xl font-semibold">Contact Us</h1>
                <div className="form-control">
                        <label className="label">
                            <span className="text-[#f15d5d]">Name</span>
                        </label>
                        <input type="email" name="name" placeholder="Enter name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#f15d5d]">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter email" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-[#f15d5d]">Message</span>
                        </label>
                        <textarea className="textarea textarea-primary" placeholder="Message"></textarea>
                      <div>
                      </div>
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="border border-[#f15d5d] py-2 px-6 text-[#f15d5d] font-semibold text-base">Sent</button>
                       
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Contactus;