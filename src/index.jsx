import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import {Provider as TodoProvider} from "./context/todoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <TodoProvider>
        <App />
    </TodoProvider>
);
