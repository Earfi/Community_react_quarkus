const FetchPostImg = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8080/posts/${id}/img`,
        {
          method: "GET"
        }
      );
      if (res.status == 200) { 
        const blob = await res.blob();
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl;
      } 
    } catch (error) {
      console.error("Error fetching post img data:", error);
    }
  };

export default FetchPostImg;