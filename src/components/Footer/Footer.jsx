

const Footer = () => {
    return (
        <div className="p-10 bg-neutral-focus text-[#fff]">
           <footer className="footer max-w-6xl mx-auto ">
           <nav>
                <header className="footer-title text-xl">Services</header>
                <a className="link link-hover italic">Branding</a>
                <a className="link link-hover italic">Design</a>
                <a className="link link-hover italic">Marketing</a>
                <a className="link link-hover italic">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title text-xl">Company</header>
                <a className="link link-hover italic">About us</a>
                <a className="link link-hover italic">Contact</a>
                <a className="link link-hover italic">Jobs</a>
                <a className="link link-hover italic">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title text-xl">Legal</header>
                <a className="link link-hover italic">Terms of use</a>
                <a className="link link-hover italic">Privacy policy</a>
                <a className="link link-hover italic">Cookie policy</a>
            </nav>
            <nav className="text-center flex">
            <input type="text" placeholder="Email here" className="input input-bordered input-secondary w-full max-w-xs" />
            <button className="btn btn-active btn-secondary">Subscribe</button>
            </nav>
           </footer>
        </div>
    );
};

export default Footer;