
import "./EditProfileModal.css";

const EditProfileModal = ({ profile, setProfile, closeModal }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

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

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Profile</h2>
        <div className="profile-layout">
          {/* User Image Section */}
          <div className="image-section">
             {profile.image && (
              <img src={profile.image} alt="Profile" className="profile-image" />
            )}
              <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          {/* Profile Fields Section */}
          <div className="form-grid">
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>NIC Number</label>
              <input
                type="text"
                name="nicnumber"
                value={profile.nicnumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Contact No</label>
              <input
                type="text"
                name="contact_no"
                value={profile.contact_no}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>District</label>
              <input
                type="text"
                name="district"
                value={profile.district}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="buttoncancel" onClick={closeModal}>Cancel</button>
          <button className="buttonsave" onClick={closeModal}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
