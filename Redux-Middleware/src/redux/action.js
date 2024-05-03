import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
} from "./actiontype";
import  axios  from "axios";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return function (dispatch) {
    dispatch(fetchDataRequest());
    axios
      .get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
      )
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
        console.log(response.data)
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
