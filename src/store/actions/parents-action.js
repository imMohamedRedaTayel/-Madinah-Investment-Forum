import axios from "axios";
import Swal from "sweetalert2";

export const GET_PATENTS = "GET_PATENTS";
export const getPartners = (Partners) => {
  return { type: GET_PATENTS, payload: Partners };
};
//fetchPartners
export const fetchPartners = () => {
  return async (dispatch) => {
    let langu = localStorage.getItem("i18n")
      ? localStorage.getItem("i18n")
      : "ar";
    try {
      const res = await axios.get(
        `https://dashboard.mdif.sa/api/client/all-partners`,
        {
          headers: {
            Accept: "application/json",
            lang: langu,
          },
        }
      );
      dispatch(getPartners(res.data.data));
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
