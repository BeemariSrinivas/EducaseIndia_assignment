import { useNavigate } from "react-router-dom";

function AccountRegisterPage(){
    const navigate = useNavigate();

    function handleRegister(){
        navigate("/dashboard");
    }


    return(
        <div className="h-screen flex justify-center items-center">
            <div className="border flex flex-col justify-between h-screen">
                <div className="flex flex-col w-96 p-4 font-medium">
                    <h1 className="text-2xl font-bold">Create your<br/> PopX account</h1>
                    <input className="outline-2 outline-gray-200 relative mt-8 w-full text-xs my-1 p-2 px-4.5 text-black rounded-md" placeholder="Mary Doe" type="text" name="name" id="name" />
                    <label className="text-[#7030dfdb] relative translate-x-3.5 -translate-y-11.5 z-10 w-fit pl-1 text-[11px] pr-8 bg-white" htmlFor="emailAddress">Full Name<sup className="text-red-600 font-bold">*</sup></label>

                    <input className="outline-2 outline-gray-200 relative mt-0.5 w-full text-xs p-2 px-4.5 text-black rounded-md" placeholder="Mary Doe" type="text" name="phoneNumber" id="phoneNumber" />
                    <label className="text-[#7030dfdb] relative translate-x-3.5 -translate-y-10.5 z-10 w-fit pl-1 text-[11px] pr-1 bg-white" htmlFor="phoneNumber">Phone number<sup className="text-red-600 font-bold">*</sup></label>

                    <input className="outline-2 outline-gray-200 relative w-full text-xs my-1 p-2 px-4.5 text-black rounded-md" placeholder="Mary Doe" type="email" name="emailAddress" id="emailAddress" />
                    <label className="text-[#7030dfdb] relative translate-x-3.5 -translate-y-11.5 z-10 w-fit pl-1 text-[11px] pr-1 bg-white" htmlFor="emailAddress">Email Address<sup className="text-red-600 font-bold">*</sup></label>

                    <input className="outline-2 outline-gray-200 relative mt-0.5 w-full text-xs p-2 px-4.5 text-black rounded-md" placeholder="Mary Doe" type="password" name="password" id="password" />
                    <label className="text-[#7030dfdb] relative translate-x-3.5 -translate-y-10.5 z-10 w-fit pl-1 text-[11px] pr-9 bg-white" htmlFor="password">Password<sup className="text-red-600 font-bold">*</sup></label>

                    <input className="outline-2 outline-gray-200 relative mt-0.5 w-full text-xs p-2 px-4.5 text-black rounded-md" placeholder="Mary Doe" type="text" name="company" id="company" />
                    <label className="text-[#7030dfdb] relative translate-x-3.5 -translate-y-10.5 z-10 w-fit pl-1 text-[11px] pr-1 bg-white" htmlFor="password">Company name</label>

                    <p className="text-[#3c3b3b] text-[12px]">Are you an Agency?<sup className="text-red-600 font-bold">*</sup></p>
                    <div className="flex items-center gap-8 mt-2">
                        <div className="flex gap-2 items-center">
                            <input className="align-middle size-4.5 accent-[#7030dfdb]" defaultChecked type="radio" name="agency" id="Yes" />
                            <label className="text-[11px]" htmlFor="Yes">Yes</label>
                        </div>
                        <div className="flex gap-2 items-center">
                            <input className="align-middle size-4.5 accent-[#7030dfdb]" type="radio" name="agency" id="No"/>
                            <label className="text-[11px]" htmlFor="No">No</label>
                        </div>
                    </div>
                </div>

                <button onClick={handleRegister} className="bg-[#5930dff1] hover:bg-[#5930dfe0] active:bg-[#5930dfce] text-center text-white cursor-pointer m-6 text-sm p-2 rounded-md">Create Account</button>
            </div>
        </div>
    )
}

export default AccountRegisterPage;