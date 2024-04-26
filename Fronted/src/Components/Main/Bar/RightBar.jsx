import { useEffect, useState } from "react";
import FindInfoCard10User from "../../../Function/FindInfoCard10User";
import FetchUserProfileNoLogin from "../../../Function/FetchUserProfileNoLogin";

function RightBar() {
    const [data,setData] = useState([])
    const [profiles,setProfiles] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const users = await FindInfoCard10User();
                setData(users);
                const promises = users.map(user => FetchUserProfileNoLogin(user.id));
                const profiles = await Promise.all(promises);
                setProfiles(profiles);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-screen overflow-y-auto shadow-2xl border relative"> 
            <div className="h-fitw w-full overflow-y-auto flex flex-col justify-start gap-10">
                <div className="w-full xl:w-[80%] h-[350px] p-2 mx-auto">
                    <h1 className="text-md font-medium pb-2">Other People</h1>
                    <div className="bg-gray-100 w-full h-full p-2 overflow-y-auto">
                        <div className="h-fit w-full flex flex-col justify-start items-center gap-3">
                            {data.map((i,index) => (
                                <div key={index} className="w-full h-14 p-3 bg-gray-200 flex justify-start gap-5 items-center overflow-hidden">
                                    <div className="relative">
                                        {profiles[index] ? (
                                            <img className="w-10 h-10 rounded-full object-cover border shadow-md overflow-hidden" src={profiles[index]} alt="profile" />
                                        ) : (
                                            <img className="w-10 h-10 rounded-full object-cover border shadow-md overflow-hidden" src="../../../../public/img/profile/profile-icon.png" alt="profile" />
                                        )}
                                        <p className="absolute top-0 left-0 w-3 h-3 shadow-2xl bg-green-500 rounded-full"></p>
                                    </div>
                                    <h1 className="text-sm font-semibold">{i.fullName}</h1>
                                </div>
                            ))}
                        </div>
                    </div> 
                </div>

                <div className="w-full xl:w-[80%] h-[150px] px-2 pt-2 pb-10 mx-auto">
                    <h1 className="text-md font-medium pb-2">Follow People</h1>
                    <div className="bg-gray-100 w-full h-full p-2 overflow-y-auto">
                        <div className="h-fit w-full flex flex-col justify-start items-center gap-3">
                            {data.map((i,index) => (
                                <div key={index} className="w-full h-14 p-3 bg-gray-200 flex overflow-hidden">
                                    <div key={index} className="w-[80%] h-full flex gap-1 items-center "> 
                                            <div className="relative">
                                                {profiles[index] ? (
                                                    <img className="w-10 h-10 rounded-full object-cover border shadow-md overflow-hidden" src={profiles[index]} alt="profile" />
                                                ) : (
                                                    <img className="w-10 h-10 rounded-full object-cover border shadow-md overflow-hidden" src="../../../../public/img/profile/profile-icon.png" alt="profile" />
                                                )}
                                                <p className="absolute top-0 left-0 w-3 h-3 shadow-2xl bg-green-500 rounded-full"></p>
                                            </div>
                                            <h1 className="text-sm font-semibold">{i.fullName}</h1>
                                    </div>
                                    <button onClick={() => subscribe()} className='text-xs border w-[20%] text-center bg-black text-white font-sans hover:bg-gray-800 cursor-pointer'>{false ? 'unFollow -' : 'Follow'}</button>
                                </div>
                            ))}
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default RightBar;