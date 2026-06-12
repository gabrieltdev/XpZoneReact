import { Navigate } from "react-router-dom";
import { checkToken } from "../services/user.js";
import { useEffect, useState } from "react";

export const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

  // token verify
  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem("token");

      try {
        const result = await checkToken(token);

        if (result.valid === true) {
          setIsValid(true);
          setLoading(false);
        }
      } catch (error) {
        console.error("Token falso ou expirado!", error);
        setIsValid(false);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, []);

  if (loading) {
    return <div>Verificando segurança...</div>;
  }

  if (!isValid) {
    return <Navigate to="/auth/login" replace />;
  }

  // authorization garanted
  return children;
};
