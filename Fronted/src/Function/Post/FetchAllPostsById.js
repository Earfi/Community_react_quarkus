const FetchAllPostsById = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8080/posts/all/${id}`,
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

export default FetchAllPostsById;