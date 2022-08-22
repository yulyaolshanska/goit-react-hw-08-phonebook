import React, { useEffect, useState } from 'react';
// import css from './ContactForm.module.css';
import {
  successToast,
  errorToast,
  alreadyExistsToast,
} from 'utils/notifications';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

import 'react-toastify/dist/ReactToastify.css';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading, isSuccess }] = useAddContactMutation();

  useEffect(() => {
    if (isSuccess) {
      successToast(`Contact added `);
      setName('');
      setNumber('');
    }
  }, [isSuccess]);

  const handleAddContact = async e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alreadyExistsToast(`Contact ${name} already exists`);
      return;
    }
    const contact = { name, number };
    try {
      await addContact(contact);
    } catch (err) {
      errorToast(err.message);
    }
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <Container className="mb-5">
      <Form onSubmit={handleAddContact} gap={3}>
        <Row className="justify-content-md-center" mb={3} gap={2}>
          <Col xs={6} md={4}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />{' '}
          </Col>
          <Col xs={6} md={4}>
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="tel"
              value={number}
              placeholder="Enter number"
              onChange={handleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="number number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col gap={2} className="justify-content-md-center">
            <button
              className={'justify-content-md-center'}
              type="submit"
              disabled={!name || !number}
            >
              {isLoading ? 'Loading...' : ' Add contact'}
            </button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

// <form className={css.form} autoComplete="off" onSubmit={handleAddContact}>
//   <label className={css.label}>
//     Name
//     <input
//       className={css.input}
//       onChange={handleChange}
//       type="text"
//       name="name"
//       value={name}
//       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//       required
//     />
//   </label>
//   <label className={css.label}>
//     Number
//     <input
//       className={css.input}
//       value={number}
//       onChange={handleChange}
//       type="tel"
//       name="number"
//       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//       title="number number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +"
//       required
//     ></input>
//   </label>
//   <button className={css.addBtn} type="submit" disabled={!name || !number}>
//     {isLoading ? 'Loading...' : ' Add contact'}
//   </button>
// </form>
