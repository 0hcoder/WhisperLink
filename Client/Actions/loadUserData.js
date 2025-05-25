import axios from "axios";
import { useDispatch } from "react-redux";
import { loadData } from "../src/store/userNameSlice";
export const loadUserData = async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/getuser", {
      withCredentials: true,
    });
    // set full objet in response

    dispatch(loadData(data));
    return data;
    //  = data.data.user;
  } catch (error) {
    console.error(error);
  }
};
