import React, { useEffect, useContext } from 'react';
import { Contact } from '../components/contact/Contact';
import { ContactForm } from '../components/contact/ContactForm';
import ContactFilter from '../components/contact/ContactFilter';
import AuthContext from '../context/auth/authContext';

export const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, [authContext]);
  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contact />
      </div>
    </div>
  );
};
