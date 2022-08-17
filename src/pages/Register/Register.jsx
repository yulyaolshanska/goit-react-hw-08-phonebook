const RegisterView = () => {
  return (
    <>
      <h1>Register</h1>
      <form>
        <label>
          Name
          <input type="text" name="name" value="" />
        </label>
        <label>
          Email
          <input type="email" name="email" value="" />
        </label>
        <label>
          Password
          <input type="password" name="password" value="" />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterView;
