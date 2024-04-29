import FetchPostImg from "./FetchPostImg";

const FetchPostPopular = async () => {
  try {
    const res = await fetch(
      `http://localhost:8080/posts/popular`,
      {
        method: "GET"
      }
    ); 
    if (res.status == 200) {
      const data = await res.json();
      const imgPromises = data.map(post => FetchPostImg(post.id)); 
      const imgUrls = await Promise.all(imgPromises);
       
      const postsWithImg = data.map((post, index) => {
        return {
          ...post,
          imageUrl: imgUrls[index]
        };
      }); 

      return postsWithImg;
    }
  } catch (error) {
    console.error("Error fetching user cart data:", error);
  }
};

export default FetchPostPopular;
