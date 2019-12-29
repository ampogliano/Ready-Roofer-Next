import Link from "next/link"

const Navbar = () => (
    <nav className="nav nav-tabs justify-content-end px-4 mb-4">
        <a className="nav-link active" href="/">Home</a>
        <a className="nav-link" href="/about">About</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
    </nav>
)

export default Navbar