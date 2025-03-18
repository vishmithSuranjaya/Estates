import "./EditProfileModal.css";
import PropTypes from 'prop-types';



const EditProfileModal = ({ profile, setProfile, closeModal, onUpdate }) => {
  // Handle input text changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle image uploads
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile({ ...profile, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle save button click
  const handleSave = () => {
    if (onUpdate) {
      onUpdate(profile); // Pass the updated profile to the parent for saving
    }
    closeModal(); // Close the modal after saving
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Edit Profile</h1>
        <div className="profile-layout">
          {/* User Image Section */}
          

          {/* Profile Fields Section */}
          <div className="form-grid">
            
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                value=""
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                value=""
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value=""
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="buttoncancel" onClick={closeModal}>
            Cancel
          </button>
          <button className="buttonsave" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
