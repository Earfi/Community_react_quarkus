import FetchUserProfileNoLogin from "./FetchUserProfileNoLogin";

const FindInfoCard10User = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/user/card/info`,
        {
          method: "GET"
        }
      ); 
      if (res.status == 200) {
        const data = await res.json(); 

        const promises = data.map(user => FetchUserProfileNoLogin(user.id));
        const profiles = await Promise.all(promises);

        const postsWithData = data.map((post, index) => {
          return {
            ...post,
            profile: profiles[index] 
          };
        });

        return postsWithData;
      }
    } catch (error) {
      console.error("Error fetching user cart data:", error);
    }
  };

export default FindInfoCard10User;