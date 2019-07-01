import React, { useState } from "react";
import Navbar from "./Navbar";

const darkTheme = {
  backgroundColor: "#444",
  color: "white"
};
const Layout = props => {
  const [theme, setTheme] = useState();

  const changeDarkMode = () => {
    setTheme(darkTheme);
  };
  return (
    <React.Fragment>
      <Navbar changeDarkMode={changeDarkMode} />
      <div style={theme}>{props.children}</div>
    </React.Fragment>
  );
};
export default Layout;
