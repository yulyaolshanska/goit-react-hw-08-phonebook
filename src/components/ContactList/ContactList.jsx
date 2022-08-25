import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';

import { useGetContactsQuery } from 'redux/contactsSlice';
import { useEffect } from 'react';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts, error, isLoading, refetch } = useGetContactsQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase().trim();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container className="mt-5">
      {isLoading && <div className={css.loading}>Loading...</div>}

      {contacts && (
        <ListGroup as="ul">
          {filteredContacts.length !== 0 ? (
            filteredContacts.map(({ name, number, id }) => {
              return (
                <ContactItem
                  key={id}
                  id={id}
                  name={name}
                  number={number}
                ></ContactItem>
              );
            })
          ) : (
            <ListGroup.Item>Contact {filter} not found</ListGroup.Item>
          )}
        </ListGroup>
      )}

      {error && <p>Ups, something was wrong!</p>}
    </Container>
  );
};

// <ul className={css.contactList}>
//   {filteredContacts.length !== 0 ? (
//     filteredContacts.map(({ name, number, id }) => {
//       return (
//         <ContactItem
//           key={id}
//           id={id}
//           name={name}
//           number={number}
//         ></ContactItem>
//       );
//     })
//   ) : (
//     <li> Contact {filter} not found </li>
//   )}
// </ul>
