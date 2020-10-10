import React from "react";

export default function Main({ content }) {
  const {
    username,
    fullName,
    classwa,
    rollNo,
    gender,
    school,
    phoneNo,
    email
  } = content;
  return (
    <>
      <div className="col-md-9">
        <div className="note">
          <h1>{fullName} Account</h1>
          <form className="col-md-10">
            <div className="form-group row">
              <div className="col-sm-2">UserName:</div>
              <div className="col-sm-10">
                <div className="">{username}</div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">FullName:</div>
              <div className="col-sm-10">
                <div className="">{fullName}</div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">Class:</div>
              <div className="col-sm-10">
                <div className="">{classwa}</div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">RollNo:</div>
              <div className="col-sm-10">
                <div className="">{rollNo}</div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">Gender:</div>
              <div className="col-sm-10">
                <div className="">{gender}</div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">College:</div>
              <div className="col-sm-10">
                <div className="">{school}</div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">PhoneNo:</div>
              <div className="col-sm-10">
                <div className="">{phoneNo}</div>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-2">Email:</div>
              <div className="col-sm-10">
                <div className="">{email}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
