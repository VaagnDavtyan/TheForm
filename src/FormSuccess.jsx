import React from "react";
import "./Form.css";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your request!</h1>
      <img
        className="form-img-2"
        src="https://images.pexels.com/photos/355906/pexels-photo-355906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="success-image"
      />
    </div>
  );
};

export default FormSuccess;
