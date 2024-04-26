const FetchUserProfileNoLogin = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8080/user/${id}/profile`,
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
      console.error("Error fetching user data:", error);
    }
  };

export default FetchUserProfileNoLogin;