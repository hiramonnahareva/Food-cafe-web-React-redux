import React from 'react';
import Routers from '../../Routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <div>
            <Header/>
            <div>
                <Routers/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;