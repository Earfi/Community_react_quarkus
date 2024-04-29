import FetchUserProfileNoLogin from "../FetchUserProfileNoLogin";
import FetchPostImg from "./FetchPostImg";

const FetchAllPosts = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/posts`,
        {
          method: "GET"
        }
      ); 
      if (res.status == 200) {
        const data = await res.json();
 
        const imgPromises = data.map(post => FetchPostImg(post.id)); 
        const imgUrls = await Promise.all(imgPromises);
 
        const profilePromises = data.map(post => FetchUserProfileNoLogin(post.userId));
        const profiles = await Promise.all(profilePromises);
         
        const postsWithData = data.map((post, index) => {
          return {
            ...post,
            imageUrl: imgUrls[index], 
            profile: profiles[index] 
          };
        });
  
        return postsWithData;
      }
    } catch (error) {
      console.error("Error fetching user cart data:", error);
    }
  };

export default FetchAllPosts;
