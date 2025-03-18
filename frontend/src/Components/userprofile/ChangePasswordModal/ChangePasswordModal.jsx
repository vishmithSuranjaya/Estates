import { useState } from "react";
import "./ChangePasswordModal.css";



const ChangePasswordModal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    alert(`Password successfully changed for ${email}`);
    closeModal();
  };

  return (
    <div className="modal1">
      <div className="modal-content1">
        <h1>Change Password</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Enter new password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          required
        />
        {error && <p className="error">{error}</p>}
        <button className="Button" onClick={handleResetPassword}>
          Reset Password
        </button>
        <button className="Button" onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
