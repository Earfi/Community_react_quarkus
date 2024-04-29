import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2';

const FetchAddPosts = async (formData) => {
  const token = localStorage.getItem("token"); 

  if (token) {
      const decodedToken = jwtDecode(token);
      const id = decodedToken.userId;
      try {
        const res = await fetch(
          `http://localhost:8080/posts/${id}/create`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ` + localStorage.getItem("token"),
            },
            body: formData
          }
        ); 
        console.log(res);
        if (res.status == 201) {
          Swal.fire({
              title: "Post successfully",
              text: "Hello Please Check your post!!!",
              icon: "success",
              showConfirmButton: false, 
              timer: 1000
          });
   
          setTimeout(() => {
              window.location.reload()
          }, 1100); 
        } else {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Error Login !!!", 
          }); 
        }  
      } catch (error) {
        console.error("Error add post data:", error);
      }
    }
  };
  
  export default FetchAddPosts;