import {Link} from 'react-router-dom';

import './index.css';


const Navbar = () =>{
    return (
        <nav className="navContainer">
        <img src="https://t4.ftcdn.net/jpg/01/69/52/13/240_F_169521381_WqhkDfreXDQduIf4weTPhsrClNYNs23E.jpg" alt="vklogo" className="logo"/>
        <div className="title-container">
            <h2 className="heading" style={{color: "white"}}>React SPA</h2>
            <ul className="unordered-list">
                <li>
                    <Link to="/" className='list-item' style={{color: "white"}}>About</Link>
                </li>

            <div className='dropdown'>
                <button type="button" className="dropbtn">
                    SPA
                </button>


                <div className="dropdown-content">
                    <Link to="/resume" className="dropdownLink">
                        <p className="dropList">Resume</p>
                    </Link>
                    <Link to="/logical" className="dropdownLink">
                        <p className="dropList">Logical Part</p>
                    </Link>
                </div>

            </div>
                    
                <li className>
                    <Link to="/contact" className='list-item' style={{color: "white"}}>Contact</Link>
                </li>
            </ul>
        </div>
        <h2 className="heading">Veeresh Kumar Kavali</h2>
        </nav>
    )
}

export default Navbar