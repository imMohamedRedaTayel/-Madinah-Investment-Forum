import axios from "axios";
import Swal from "sweetalert2";

export const GET_SESSIONS = "GET_SESSIONS";
export const getSession = (session) => {
  return { type: GET_SESSIONS, payload: session };
};
//fetchSession
export const fetchSession =  () => {
  return async (dispatch) => {
    
      let langu = localStorage.getItem("i18n")
        ? localStorage.getItem("i18n")
        : "ar";
    try {
      const res = await axios.get(
        `https://dashboard.mdif.sa/api/client/events/1`,
        {
          headers: {
            Accept: "application/json",
            lang: langu,
          },
        }
      );
         dispatch(getSession(res.data.data.data));
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


//subscribe
export const subscribe = (id) => {
  return async () => {
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : "";
      let langu = localStorage.getItem("i18n")
        ? localStorage.getItem("i18n")
        : "ar";
      const data = { event_id: id };
    try {
      const res = await axios.post(
        `https://dashboard.mdif.sa/api/client/auth/subscribe/event`,
        data,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            lang: langu,
          },
        }        
      );
      if(res.status == 200){
          Swal.fire({
            text: res.data.message,
            icon: "success",
            confirmButtonText: "حسنا",
            customClass: {
              confirmButton: "my-confirm-button-class",
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
  };
};
