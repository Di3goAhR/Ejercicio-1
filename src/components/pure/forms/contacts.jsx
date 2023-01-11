import React from 'react';
import PropTypes from 'prop-types';
import {Contacts} from '../../../models/contacts.class';

const ContactComponent = ({contacts}) => {
    return(
        <div>
            <h3>
                Nombre: { contacts.name }
            </h3>
            <h4>
                Apellido: { contacts.lastname }
            </h4>
            <h5>
                Email: { contacts.email }
            </h5>
            <h6>
                Estado: { contacts.conected ? ' Contacto En Línea':'Contacto No Disponible' }
            </h6>
        </div>
    );
};

ContactComponent.propTypes = {
    contacts: PropTypes.instanceOf(Contacts)
}

export default ContactComponent;