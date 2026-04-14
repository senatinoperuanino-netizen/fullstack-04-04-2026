//libreria para manejar estados
import { useState } from "react";
//libreria para hacer peticiones http
import axios from "axios";
//hook para redireccionar
import { useNavigate } from "react-router-dom";

function Login()
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //para redireccionar a otra pagina
  const navigate = useNavigate();  

  const login = async (e) => {
    try {
      const res = await axios.post('http://localhost:3000/api/login', { email, password });
      //Guardar el token en el localStorage
      localStorage.setItem('token', res.data.token);
      //Redireccionar al dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error("Error en el login", error);
      alert('Credenciales incorrectas');
    }
  };
  return (
    <div className="min-h-screen flexx items-center justify bg-gradient-to-br from-blue-500 to-indig0-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">

      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="space-y-4">

      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={login}
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
      >Login</button>
      </div>
    </div>
  );
}
export default Login;
