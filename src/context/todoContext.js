import { createContext, useState, useRef } from "react";

const Context = createContext();

const Provider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef(null)
    return (
        <Context.Provider
            value={{
                todos,
                setTodos,
                todoNameRef,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
