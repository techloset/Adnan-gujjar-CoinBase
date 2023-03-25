import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import About from '../../pages/about/About'
import Contact from '../../pages/contactUs/Contact'
import LandingPage from '../../pages/landingPage/LandingPage';
import Blog from '../../pages/blog/Blog';
import Header from '../header/Header'
import Footer from '../footer/Footer';



function Navigation() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog"  element={<Blog/>}/>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Navigation