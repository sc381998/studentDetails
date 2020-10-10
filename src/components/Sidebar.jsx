import React from "react";

export default function Sidebar(props) {
  const { updateDetails, updateName, studentDetails } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="sidePanel">
          <div className="li-label">Student</div>
          <form className="form-inline search">
            <input
              className="form-control"
              type="search"
              placeholder="Search..."
              onChange={updateName}
            />
          </form>

          <nav className="list">
            <ul className="list-unstyled">
              {studentDetails.map((students) => {
                return (
                  <li
                    className="li-list"
                    key={students.id}
                    onClick={() => updateDetails(students.content)}
                  >
                    <span> 🤵</span> {students.name}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
