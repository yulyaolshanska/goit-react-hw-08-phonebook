const LogInView = () => {
  return (
    <form>
      <label>
        Email
        <input type="email" name="email" value="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" value="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogInView;
