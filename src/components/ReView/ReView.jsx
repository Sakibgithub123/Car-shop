import man1 from "../../assets/man1.jpg"
import man2 from "../../assets/man2.jpg"
import man3 from "../../assets/man3.jpg"
import man4 from "../../assets/woman4.jpg"
const ReView = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold my-10 text-center italic">What are they say's?</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  ">
           <div className="card  bg-neutral-focus shadow-xl border">
                <div className="avatar flex items-center justify-center pt-5">
                    <div className="w-24 rounded-full border border-[#f15d5d]">
                        <img src={man1} />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title  text-[#fff] font-semibold">Micheal john</h2>
                    <p className="text-justify text-[#fff] italic text-base">A customer review is an evaluation of a product or service made by someone who has purchased and used, or had experience with, a product or service.
                        Customer reviews are a form of customer feedback on electronic commerce and online shopping sites.</p>
                    <div className="card-actions">
                        <div className="rating gap-1">
                            <input type="radio" name="rating-1" className="mask mask-heart bg-red-400" />
                            <input type="radio" name="rating-1" className="mask mask-heart bg-orange-400" checked />
                            <input type="radio" name="rating-1" className="mask mask-heart bg-yellow-400" />
                            <input type="radio" name="rating-1" className="mask mask-heart bg-lime-400" />
                            <input type="radio" name="rating-1" className="mask mask-heart bg-green-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card  bg-neutral-focus shadow-xl border">
                <div className="avatar flex items-center justify-center pt-5 ">
                    <div className="w-24 rounded-full border border-[#f15d5d] ">
                        <img src={man2} />
                    </div>
                </div>
                <div className="card-body items-center text-center ">
                    <h2 className="card-title text-[#fff] font-semibold">Rabinson hood</h2>
                    <p className="text-justify text-[#fff] italic text-base">A customer review is an evaluation of a product or service made by someone who has purchased and used, or had experience with, a product or service.
                        Customer reviews are a form of customer feedback on electronic commerce and online shopping sites.</p>
                    <div className="card-actions">
                        <div className="rating gap-1">
                            <input type="radio" name="rating-2" className="mask mask-heart bg-red-400" />
                            <input type="radio" name="rating-2" className="mask mask-heart bg-orange-400"  />
                            <input type="radio" name="rating-2" className="mask mask-heart bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-heart bg-lime-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-heart bg-green-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card  bg-neutral-focus shadow-xl border">
                <div className="avatar flex items-center justify-center pt-4">
                    <div className="w-24 rounded-full border border-[#f15d5d]">
                        <img src={man4} />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#fff] font-semibold">Sara johnson</h2>
                    <p className="text-justify text-[#fff] italic text-base">A customer review is an evaluation of a product or service made by someone who has purchased and used, or had experience with, a product or service.
                        Customer reviews are a form of customer feedback on electronic commerce and online shopping sites.</p>
                    <div className="card-actions">
                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"  />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" checked />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card   bg-neutral-focus shadow-xl border">
                <div className="avatar flex items-center justify-center pt-5">
                    <div className="w-24 rounded-full border border-[#f15d5d]">
                        <img src={man3} />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#fff] font-semibold">Wood mark</h2>
                    <p className="text-justify text-[#fff] italic text-base">A customer review is an evaluation of a product or service made by someone who has purchased and used, or had experience with, a product or service.
                        Customer reviews are a form of customer feedback on electronic commerce and online shopping sites.</p>
                    <div className="card-actions">
                        <div className="rating gap-1">
                            <input type="radio" name="rating-4" className="mask mask-heart bg-red-400" />
                            <input type="radio" name="rating-4" className="mask mask-heart bg-orange-400"  />
                            <input type="radio" name="rating-4" className="mask mask-heart bg-yellow-400" checked />
                            <input type="radio" name="rating-4" className="mask mask-heart bg-lime-400" />
                            <input type="radio" name="rating-4" className="mask mask-heart bg-green-400" />
                        </div>
                    </div>
                </div>
            </div>
           </div>

        </div>
    );
};

export default ReView;