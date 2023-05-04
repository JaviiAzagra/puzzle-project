import { API } from "../shared/services/api";

export const loginUser = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: "login_user_start" });
  try {
    const result = await API.post("/parents/login", formdata);
    dispatch({ type: "login_user_ok", payload: result.data });
    localStorage.setItem("token", result.data.token);
    dispatch(checkSession(result.data.token, navigate));
  } catch (error) {
    dispatch({ type: "login_user_error", payload: error.message });
  }
};

export const logoutUser = (navigate) => async (dispatch) => {
  await dispatch({ type: "logout_user_start" });
  try {
    dispatch({ type: "logout_user_ok" });
    localStorage.removeItem("token"); //esto remueve la propiedad token de localStorage
    localStorage.clear(); /// Esto remueve todo el localstorage
    navigate("/login");
  } catch (error) {
    dispatch({ type: "logout_user_error", payload: error.message });
  }
};

export const newUser = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: "register_user_start" });
  try {
    const result = await API.post("parents/register", formdata);
    console.log(result);
    dispatch({ type: "register_user_ok" });
    navigate("/login");
  } catch (error) {
    dispatch({ type: "register_user_error" });
  }
};

export const checkSession = (token, navigate) => async (dispatch) => {
  dispatch({ type: "checkSession_start" });
  try {
    const result = await API.post("parents/checksession");
    dispatch({
      type: "checkSession_ok",
      payload: { user: result.data, token: token },
    });
    localStorage.setItem("token", token);
    navigate("/");
  } catch (error) {
    dispatch({ type: "checkSession_error" });
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/login");
  }
};

export const modifyUser = (user, data) => async (dispatch) => {
  dispatch({ type: "modifyUser_start" });
  try {
    await API.put(`/parents/edit/${user._id}`, data);
    const result = await API.get(`/parents/${user._id}`);
    dispatch({
      type: "modifyUser_ok",
      payload: result.data,
    });
  } catch (error) {
    console.error(error);
  }
};