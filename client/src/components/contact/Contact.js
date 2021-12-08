import React, { useEffect } from 'react';
import { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { ContactItem } from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../../layouts/Spinner';

export const Contact = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;
  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);
  if (contacts !== null && contacts.length === 0 && !loading) {
    return <h3>Please add a contact</h3>;
  }
  return (
    <>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {filtered
            ? filtered.map((contact) => {
                return (
                  <CSSTransition
                    key={contact._id}
                    timeout={500}
                    classNames='item'
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                );
              })
            : contacts.map((contact) => {
                return (
                  <CSSTransition
                    key={contact._id}
                    timeout={500}
                    classNames='item'
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                );
              })}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </>
  );
};
