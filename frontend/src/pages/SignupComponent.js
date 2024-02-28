import useField from '../hooks/useField';
import useSignup from '../hooks/useSignup';

const SignupComponent = ({ setIsAuthenticated }) => {
  const email = useField("");
  const password = useField("");
  const password2 = useField("");
  const { signup, loading, error } = useSignup(setIsAuthenticated);

  const handleSignup = () => {
    if (password.value !== password2.value) {
      alert("Passwords don't match!");
      return;
    }
    signup(email.value, password.value);
  };
    return (
      <div>
        <h2>Signup</h2>
        <label>
          email:
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
        <label>
          Confirm password:
          <input
            type="password"
            {...password2}  
          />
        </label>
        <br />
        <button onClick={handleSignup} disabled={loading}>Sign Up</button>
        {error && <p>{error}</p>}
      </div>
    );
  };

  export default SignupComponent;

  