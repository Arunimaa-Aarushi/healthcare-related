import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Doctors from '../Doctors/Doctors';
import Message from '../Message/Message';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <Doctors></Doctors>
           <Message></Message>
            <Footer></Footer>
        </div>
    );
};

export default Home;