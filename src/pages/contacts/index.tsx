import React from 'react';
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {ContactsPage} from "../../components/pages/ContactPage";

const Contacts = () => {
    return (
        <div>
            <Header/>
            <ContactsPage/>
            <Footer/>
        </div>
    );
};

export default Contacts
