import { useNavigate } from "react-router-dom";

function LoginPage(){
    const navigate = useNavigate();

    function handleLogin(){
        navigate("/profile");
    }

    return(
        <div className="h-screen flex justify-center items-center">
            <div className="border flex flex-col justify-start h-screen w-96 p-6 font-medium ">
                <h1 className="text-3xl font-bold">Signin to your <br/>PopX account</h1>
                <p className="text-md mt-2 font-300 text-black/50">Lorem ipsum dolor sit amet,</p>
                <p className="text-md font-300 text-black/50">consectetur adipisicing elit,</p>
                <input className="outline-2 outline-gray-200 relative mt-8 w-full text-sm my-1 p-2 px-4.5 text-gray-800 rounded-md" placeholder="Enter Email Address" type="email" name="emailAddress" id="emailAddress" />
                <label className="text-[#7030dfdb] relative translate-x-3.5 -translate-y-13 z-10 w-fit pl-1 text-[12px] pr-3 bg-white" htmlFor="emailAddress">Email Address</label>
                <input className="outline-2 outline-gray-200 relative mt-1 w-full text-sm p-2 px-4.5 text-gray-800 rounded-md" placeholder="Enter Password" type="password" name="password" id="password" />
                <label className="text-[#7030dfdb] relative translate-x-3.5 -translate-y-12 z-10 w-fit pl-1 text-[12px] pr-9 bg-white" htmlFor="password">Password</label>
                <button onClick={handleLogin} className="bg-[#73707067] hover:bg-[#73707056] active:bg-[#7370703f] text-center text-white cursor-pointer w-full text-sm p-2 rounded-md">Login</button>
            </div>
        </div>
    )
}

export default LoginPage;