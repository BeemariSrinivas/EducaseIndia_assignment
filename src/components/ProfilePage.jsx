import profileImg from "../assests/image.png";
import { FaCamera } from "react-icons/fa";

function ProfilePage(){
    return(
        <div className="h-screen text-xl flex justify-center items-center">
            <div className="border flex flex-col justify-start h-screen w-96 p-6 font-medium ">
                <h1 className="my-4">Account Settings</h1>
                <div className="bg-gray-100 w-full p-4 h-screen">
                    <div className="flex gap-4 my-4">
                        <div>
                            <img className="relative z-0" src={profileImg} alt="Mary Doe" height={80} width={80}/>
                            <div className="bg-[#5930dff1] w-fit p-2 rounded-2xl text-white relative z-1 translate-x-15 -translate-y-7">
                                <FaCamera size={16} />
                            </div>
                        </div>
                        <div className="text-xs">
                            <p>Mary Doe</p>
                            <p className="text-gray-600">Marry@Gmail.Com</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut autem impedit sint aspernatur commodi quo, cupiditate tenetur eum eaque</p>
                </div>
            </div>
        </div>
    )
}


export default ProfilePage;