import axios from "axios";

import { loadMessData } from "../src/store/userMessgesSlice";

export const loaduserMessData = async (dispatch) => {

  try {
    const {data} = await axios.get("http://localhost:5000/api/getmess", {
      withCredentials: true,
    });
    
    // set full objet in response
    await dispatch(loadMessData(data.message));
    return data;
    //  = data.data.user;
  } catch (error) {
    console.error(error);
  }
};
