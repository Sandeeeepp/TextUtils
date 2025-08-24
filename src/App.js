import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import About from './About';
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import { useState } from "react";
import Alert from "./Alert";
// import About from "./About";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#032f2f";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  // const textFormElement = (
  //   <TextForm
  //     heading="Enter the text to analyze below"
  //     alert={showAlert}
  //     mode={mode}
  //   />
  // );
  return (
    // <Router>
    <>
      <Navbar title="TextUtils" mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes><Route
            path="/"
            element={textFormElement}
          />
          <Route
            path="/home"
            element={textFormElement}
          />
          <Route exact path="/about" element={<About mode={mode} />}></Route>  
        </Routes> */}
        <TextForm
      heading="Enter the text to analyze below"
      alert={showAlert}
      mode={mode}
    />
      </div>
      </>
    // </Router>
  );
}

export default App;
