import { useNavigate } from "react-router-dom";

function HomePage(){
    const navigate = useNavigate();

    function handleRegister(){
        navigate("/register");
    }

    function handleLogin(){
        navigate("/login");
    }

    return(
        <div className="h-screen flex justify-center items-center">
            <div className="border flex flex-col justify-end h-screen w-96 p-3 font-medium ">
                <h1 className="text-2xl font-medium">Welcome to PopX</h1>
                <p className="text-sm mt-2 font-300 text-black/50">Lorem ipsum dolor sit amet,</p>
                <p className="text-sm font-300 text-black/50">consectetur adipisicing elit,</p>
                <button onClick={handleRegister} className="bg-[#5930dff1] cursor-pointer mt-6 text-sm text-white w-full border my-1 p-2 rounded-md">Create Account</button>
                <button onClick={handleLogin} className="bg-[#ae7ce088] cursor-pointer w-full text-sm my-1 p-2 rounded-md">Already Registered? Login</button>
            </div>
        </div>
    )
}

export default HomePage;