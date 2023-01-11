import React from 'react';
import { Contacts } from '../../models/contacts.class';
import { useState } from 'react';
import ContactComponent from '../pure/forms/contacts';

const ContactListComponent = () => {

    const [estado, setEstado] = useState(false);

    const changeState = () => {
        if(estado == false){
            setEstado(true);
        }else{
            setEstado(false);
        }
    }

    const contacto = new Contacts('Diego', 'Heredia', 'diego@gmail.com', estado);

    return(
        <div>
            <h2>Lista de Contactos</h2>
            <ContactComponent contacts={contacto}></ContactComponent>
            <button onClick={changeState}>{estado ? 'Desconectar':'Conectar'}</button>
        </div>
    );
};


export default ContactListComponent;