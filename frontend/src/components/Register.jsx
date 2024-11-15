import '../styles/auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Register</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
        <a href="/login">Already have an account? Login</a>
      </form>
    </div>
  );
};

export default Register;
