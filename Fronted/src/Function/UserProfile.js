import Swal from "sweetalert2"; 

const getUserProfile = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8080/user/${id}/profile`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ` + localStorage.getItem("token"),
          },
        }
      ); 
      if (res.ok) { 
        const blob = await res.blob();
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl;
      } else if(res.status == 401) {
        Swal.fire({
            icon: "error",
            title: "Oops... Session does Exits!!",
            text: "Please Login!!!",  
        }).then(async (result) => {
            if (result.isConfirmed) {  
                localStorage.removeItem("token")
                localStorage.removeItem("role")
                window.location.reload();
                // navigate('/login');
            }
        });
      } 
    } catch (error) {
      console.error("Error fetching user data:", error);
      Swal.fire({
        icon: "error",
        title: "Oops... Session does Exits!!",
        text: "Please Login!!!",  
    }).then(async (result) => {
        if (result.isConfirmed) {  
            localStorage.removeItem("token")
            localStorage.removeItem("role")
            localStorage.removeItem("username");
            window.location.reload();
            // navigate('/login');
        }
    });
    }
  };

export default getUserProfile;