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
        return data;
      }
    } catch (error) {
      console.error("Error fetching user cart data:", error);
    }
  };

export default FetchAllPosts;