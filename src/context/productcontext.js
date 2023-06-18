import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducer/productReducer";

// API endpoints
let API = "https://mocki.io/v1/e9caa92e-3c59-4a8b-adb0-7dc591b4c471";

export const AppContext = createContext();

// initial state 
const initialState = {
  hits: [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // to get the actual api data
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_REPOS",
        payload: {
          hits: data.hits,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  // to call the api data for the first time on page load
  useEffect(() => {
    fetchApiData(`${API}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// useContext hook for consumer
export const useGlobalContext = () => {
  let contextData = useContext(AppContext);
  if (!contextData) {
    throw new Error("out of scope provider");
  }
  return contextData;
};
