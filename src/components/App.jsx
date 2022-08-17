// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { Routes, Route, Suspense } from 'react-router-dom';

export function App() {
  return (
    <div className={css.container}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />
            <Route path="register " element={<RegisterView />} />
            <Route path="login  " element={<LogInView />} />
            <Route path="contacts  " element={<ContactsView />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
}
