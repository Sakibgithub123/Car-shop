

const Contactus = () => {
    return (

        <div className="hero min-h-screen  bg-base-200 font-lato">
            <div className="hero-content w-full flex-row lg:flex-col">
                <div className="text-center  my-3">
                    <h1 className="text-5xl font-bold italic">Contact Us</h1>
                </div>
                <div className="card md:w-7/12  shadow-2xl bg-neutral-focus ">

                    <form className="card-body">
                        {/* <h1 className="text-5xl font-bold mt-5 text-center text-[#fff]">Contact Us</h1> */}
                        {/* <h1 className="text-center text-[#f15d5d] text-3xl font-semibold">Contact Us</h1> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="text-[#fff]">Name</span>
                            </label>
                            <input type="email" name="name" placeholder="Enter name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-[#fff]">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter email" className="input input-bordered" />
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
                            <button className="border   py-2 px-6 text-[#fff] font-semibold text-base">Sent</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactus;