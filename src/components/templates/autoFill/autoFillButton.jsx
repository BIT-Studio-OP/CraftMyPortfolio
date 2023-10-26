import React, { useState } from "react";
import { useUserDetails } from "../../getDetails/getDetails";

function AutoFillButton({ onAutoFill }) {
  const userDetails = useUserDetails();

  const handleAutoFill = () => {
    if (userDetails) {
      onAutoFill(userDetails);
    }
  };

  return (
    <>
      <button
        className="btn btn-primary btn-sm"
        onClick={handleAutoFill}
        style={{ margin: "1rem" }}
      >
        Auto Fill
      </button>
    </>
  );
}

export default AutoFillButton;
