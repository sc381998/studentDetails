import React, { useState } from "react";
import "./styles.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import students from "./students";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [names, setNames] = useState(students);
  const [details, setDetails] = useState(students[0].content);

  function handleDetails(content) {
    const temp = content;
    setDetails(temp);
  }

  function handleName(event) {
    setDetails({});
    const name = event.target.value;
    const filteredName = students.filter((student) =>
      student.name.toLowerCase().includes(name.toLowerCase())
    );
    if (filteredName) setNames(filteredName);
    else setNames({});
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <Sidebar
            updateDetails={handleDetails}
            updateName={handleName}
            studentDetails={names}
          />
          <Main content={details} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
