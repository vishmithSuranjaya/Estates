import React, { useState } from "react";
import "./ChangePasswordModal.css";

const ChangePasswordModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    alert(`Reset instructions sent to ${email}`);
    closeModal();
  };

  return (
    <div className="modal1">
      <div className="modal-content1">
        <h2>Change Password</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button className="Button" onClick={handleResetPassword}>Reset Password</button>
        <button  className="Button" onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
