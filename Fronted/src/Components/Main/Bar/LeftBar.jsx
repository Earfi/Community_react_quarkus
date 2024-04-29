import { useEffect, useState } from "react"; 
import FetchPostPopular from "../../../Function/Post/FetchPostPopular";

function LeftBar() { 
    const [data,setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const posts = await FetchPostPopular();
            
            setData(posts); 
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }; 
            fetchData(); 
  
      }, []);

    const shortenText = (text) => {
        if (text.length <= 15) {
            return text;
        } else {
            return text.substring(0, 15) + '...';
        }
    }

    
    return (
        <div className="w-full h-screen overflow-y-auto shadow-2xl border relative bg-white"> 
            <div className="h-fit w-full overflow-y-auto flex flex-col justify-start gap-5 pb-20">
                
                <div className="w-full xl:w-[80%] p-2 mx-auto">    
                    <h1 className="text-md font-medium pb-2">Popular Post</h1>
                    <div className="flex flex-col justify-start items-center gap-3 bg-gray-100 w-full h-full p-2">
                        {data.map((i,index) => (
                            <div key={i.id} className="w-full h-20 p-3 bg-gray-200 flex justify-between items-center overflow-hidden">
                                <div>
                                    <h1 className="text-xs font-semibold">{i.fullName}</h1>
                                    <p className="text-sm font-bold text-red-500">{shortenText(i.title)}</p>
                                </div>
                                {i.imageUrl ? (
                                            <img className="w-16 h-16 object-cover" src={i.imageUrl} alt="imgPost" />
                                        ) : (
                                            <></>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="w-full xl:w-[80%] p-2 mx-auto">
                    <div className="w-full h-40 bg-red-500 rounded-xl overflow-hidden">
                        <img className="w-full h-full object-cover" src="../../../../public/img//Product_advertising.jpg" alt="Product advertising" />
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default LeftBar;