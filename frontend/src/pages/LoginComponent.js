import useField from '../hooks/useField';
import useLogin from '../hooks/useLogin';

const LoginComponent = ({ setIsAuthenticated }) => {
  const email = useField("");
  const password = useField("");
  const { login, loading, error } = useLogin(setIsAuthenticated);

  const handleLogin = () => {
    login(email.value, password.value);
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          {...email}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          {...password}
        />
      </label>
      <br />
      <button onClick={handleLogin} disabled={loading}>Log In</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginComponent;