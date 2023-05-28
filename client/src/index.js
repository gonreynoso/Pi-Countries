import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";


//* Con esto solo es necesario proporcionar la ruta relativa a partir de la URL base.
axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "https://rest-countries.up.railway.app/v3/all";
//?El provider le decimos que store va a usar
    //?BrowserRouter para poder hacer rutas
ReactDOM.render(

  <Provider store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
