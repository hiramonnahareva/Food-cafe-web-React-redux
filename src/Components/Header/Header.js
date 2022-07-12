import React, {useRef} from 'react';
import { NavLink, Link} from 'react-router-dom';
import { Container } from 'reactstrap';
import logo from '../../Assets/logo.png';
import { BiShoppingBag, BiUser, BiMenu } from 'react-icons/bi';
import '../../Styles/Header.css'


const navLink = [
   { 
    display: 'Home',
    path: '/home'
},
   { 
    display: 'Foods',
    path: '/foods'
},
   { 
    display: 'Cart',
    path: '/cart'
},
   { 
    display: 'Contact',
    path: '/contact'
}
]
const Header = () => {
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
    return (
        <header className='header_shrink'>
            <Container>
            <div className='nav_wripper d-flex align-items-center justify-content-between'>
            <div className='logo d-flex align-items-center gap-2'>
                    <img src={logo} alt="logo" />
                    <h4 className='title'>Food Cafe</h4>
                </div>
                {/* ---------- menu -------- */}
                <div className="navigation" ref={menuRef}>
                    <div className="menu d-flex align-items-center gap-5">
                        {
                            navLink.map((item, index) => (
                                <NavLink 
                                onClick={toggleMenu}
                                to={item.path} 
                                key={index}
                                className={(navActive) => navActive.isActive ? 'activeMenu' : '' }
                                >{item.display}</NavLink>
                            ))
                        }

                    </div>
                    </div>
                    {/* --------- nav right icons ---------- */}
                    <div className="nav_right d-flex align-items-center gap-3">
                        <span className='cart_icon'>
                           <BiShoppingBag/>
                            <span className='cart_badge'>2</span>
                        </span>
                        <span className='user_icon'>
                            <Link to='/login'><BiUser/></Link>
                        </span>
                        <span className='mobile_menu' onClick={toggleMenu}>
                            <BiMenu/>
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;