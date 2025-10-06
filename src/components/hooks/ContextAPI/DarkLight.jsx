import "../../../index.css";


import { createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const[ theme , setTheme ] = useState("dark");

    const handleToggleTheme = () =>{
        return setTheme((prevTheme)=>(prevTheme==="dark"? "light":"dark"));
    };

    return (
    <ThemeContext.Provider value={{theme,handleToggleTheme}}>{children}</ThemeContext.Provider>
    );
};

// creating a component 
export const DarkLight = () => {
    const { theme, handleToggleTheme} = use(ThemeContext);
    return(
    <div className={`p-4 flex flex-col justify-center items-center min-h-screen transition-all duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
        <h1>Dark Light Mode Website</h1>
        <p> Hello!! My React v19 Fans</p>
        <button onClick={handleToggleTheme}>
            {theme === "dark" ? "Switch to Light Mode": "Switch to Dark Mode"}
            </button>
    </div>
    );
}
