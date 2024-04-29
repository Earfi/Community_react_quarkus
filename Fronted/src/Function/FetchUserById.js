import FetchUserProfile from "./FetchUserProfile";

const FetchUserById = async (id) => {
    try {
        const res = await fetch(`http://localhost:8080/user/${id}`, {
            method: "GET"
        }); 

        const data = await res.json();

        const profile = await FetchUserProfile(data.id);
         
        const userDataWithProfile = {
          ...data,
          profile: profile 
        };

        return userDataWithProfile;

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
};

export default FetchUserById;
