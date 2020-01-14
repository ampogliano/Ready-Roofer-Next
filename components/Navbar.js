import Link from "next/link"

const Navbar = () => {
    const logo = require(`./images/ready-roofer-logo-flat-with-corner.png`)
    return(
        <div className="" >
            <div className="row-fluid">

                <a href="/"> <img className="logo mt-n4" src={logo} width="40%" height="" alt="Ready Roofer Logo"/></a>
                <ul className="nav menu justify-content-end bg-transparent pt-4 px-4 mt-4">
                    <li>
                        <a className="nav-link menu-item" href="/get-a-quote">Get a Quote</a>
                    </li>
                    <li>    
                        <a className="nav-link menu-item" href="/learn-roofing">Learn Roofing</a>
                    </li>
                    <li>    
                        <a className="nav-link menu-item" href="/materials">Materials</a>
                    </li>
                    <li>    
                        <a className="nav-link menu-item" href="/our-work">Our Work</a>
                    </li>
                    <li>    
                        <a className="nav-link menu-item" href="/about">About</a>
                    </li>
                </ul>
            <style jsx>{`
            .logo {
                position:absolute;
                z-index:2;
                opacity: 1;
            }
            .menu{
                z-index:3;
            }
            .menu-item{
                font-size: 1.2rem;
                color: white;
                text-decoration: none;
                text-shadow: 2px 2px 5px #000000;
                z-index:4;
            }
            `}</style>
            </div>
        </div>
    )
}


export default Navbar