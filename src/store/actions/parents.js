import axios from "axios";
import Swal from "sweetalert2";

export const GET_USERINFO = "GET_USERINFO";
export const getUser = () => {
let List = [];
const storedList = localStorage.getItem("user_data")
  ? localStorage.getItem("user_data")
  : sessionStorage.getItem("user_data") ? sessionStorage.getItem("user_data")  : '';
if (storedList) {
  List = JSON.parse(storedList);
}
return { type: GET_USERINFO, payload: List };
};
//Logout
export const Logout = () => {
  console.log("Logout");
localStorage.removeItem('token');
sessionStorage.removeItem("token");
localStorage.removeItem("user_data");
sessionStorage.removeItem("user_data");

  return { type: GET_USERINFO, payload: [] };
};
export const LoginFun =  (data, checker) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `https://dashboard.mdif.sa/api/client/auth/login`,
        data,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (res.status === 200) {
     
        if (checker) {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem(
            "user_data",
            JSON.stringify(res.data.data.user_data)
          );
        } else {
          sessionStorage.setItem("token", res.data.data.token);
          sessionStorage.setItem(
            "user_data",
            JSON.stringify(res.data.data.user_data)
          );
        }

        dispatch(getUser());
        // SUCCESS ALERT
        Swal.fire({
          text: "مرحبًا بك في منتدى المدينة للاستثمار",
          icon: "success",
          confirmButtonText: "حسنا",
          customClass: {
            confirmButton: "my-confirm-button-class",
          },
        });
      } else {
        Swal.fire({
          text: res.data.message,
          icon: "error",
          errorButtonText: "حسنا",
          customClass: {
            errorButtonText: "my-confirm-button-class",
          },
        });
      }
    } catch (error) {
      // Handle errors gracefully
      Swal.fire({
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "حسنا",
        customClass: {
          confirmButton: "my-confirm-button-class",
        },
      });
    }
  }
};
