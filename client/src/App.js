import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// import components
import MyApp from "./MyAPP";

export const URL = process.env.REACT_APP_API_URL;

function App() {
  
  return (
    <Provider store={store}>
      <MyApp/>
     </Provider>
  );
}

export default App;
