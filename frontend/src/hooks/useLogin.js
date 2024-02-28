import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = (setIsAuthenticated) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Login failed");
        setError("Login failed");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;