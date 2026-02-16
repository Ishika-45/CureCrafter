import { useContext, useState } from "react";
import axios from "axios";
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {

  const [state, setState] = useState("Admin");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAdminToken, backendURL } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
       
      if(state === "Admin") {

        const {data} = await axios.post(backendURL + "/api/admin/login", {email, password});

        if (data.success) {
  toast.success("Admin logged in successfully");

  setTimeout(() => {
    localStorage.setItem("adminToken", data.token);
    setAdminToken(data.token);
  }, 300); 
}
        
      } else { 

      } 

    } catch (error) {
  console.error("Login error:", error);

  const message =
    error.response?.data?.message || "Login failed";

  toast.error(message);
}
  }

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg border-green-200 bg-green-50">

        <p className="text-2xl font-semibold m-auto">
          <span className="text-green-400">{state}</span> Login
        </p>

        <div className="w-full">
          <p className="font-semibold">Email</p>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border bg-white border-[#DADADA] rounded-xl w-full p-2 mt-3 shadow-lg"
            placeholder="Enter your email"
          />
        </div>

        <div className="w-full">
          <p className="font-semibold">Password</p>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border bg-white border-[#DADADA] rounded-xl w-full p-2 mt-3 shadow-lg"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="bg-green-300 w-full py-2 rounded-full mt-3 shadow-lg text-lg font-medium hover:translate-y-[-5px] transition-all duration-200"
        >
          Login
        </button>

        {state === "Admin" ? 
          <p className="mt-1">
            Doctor Login ??
            <span
              onClick={() => setState("Doctor")}
              className="text-green-500 underline cursor-pointer ml-1"
            >
              Login as Doctor
            </span>
          </p>
         : 
          <p className="mt-1">
            Admin Login ??
            <span
              onClick={() => setState("Admin")}
              className="text-green-500 underline cursor-pointer ml-1"
            >
              Login as Admin
            </span>
          </p>
        }
      </div>
    </form>
  );
};

export default Login;
