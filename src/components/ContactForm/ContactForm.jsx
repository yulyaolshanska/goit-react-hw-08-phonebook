import React, { useState } from 'react';
import css from './ContactForm.module.css';
import {
  successToast,
  errorToast,
  alreadyExistsToast,
} from 'utils/notifications';
import 'react-toastify/dist/ReactToastify.css';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading, isSuccess }] = useAddContactMutation();

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
    const contact = { name, phone };
    try {
      await addContact(contact);
      if (isSuccess) {
        successToast('Contact added ');
        setName('');
        setPhone('');
      }
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
        setPhone(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} autoComplete="off" onSubmit={handleAddContact}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          value={phone}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
      </label>
      <button className={css.addBtn} type="submit" disabled={!name || !phone}>
        {isLoading ? 'Loading...' : ' Add contact'}
      </button>
    </form>
  );
}
