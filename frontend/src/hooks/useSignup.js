import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useSignup = (setIsAuthenticated) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signup = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed");
        setError("Signup failed");
      }
    } catch (err) {
      console.error("Error during signup:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};

export default useSignup;