// import { nanoid } from 'nanoid';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Loader } from './Loader/Loader';
import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';

const AppBar = lazy(() => import('components/AppBar/AppBar'));
const Home = lazy(() => import('pages/Home/Home'));
const RegisterView = lazy(() => import('pages/Register/Register'));
const LogInView = lazy(() => import('pages/LogIn/LogIn'));
const ContactsView = lazy(() => import('pages/Contacts/Contacts'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

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

      <ToastContainer />
    </div>
  );
}
