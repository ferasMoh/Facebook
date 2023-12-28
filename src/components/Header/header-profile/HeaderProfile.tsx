import "./HeaderProfile.scss";
import { Plus } from "react-bootstrap-icons";
import profilePicture from "../../../assets/images/header/profile-picture.jpg";
import { MediaQuery } from "../../MediaQuery";
import ToolTip from "../../Tooltip/Tooltip";

const HeaderProfile = () => {
  const { isScreen800, isScreen555 } = MediaQuery();

  return (
    <div
      className={`${
        !isScreen800 ? "w-1/3" : isScreen555 ? "w-3/4" : "w-1/2"
      } flex justify-end profile-section-icons z-10`}
    >
      {!isScreen800 ? (
        <ToolTip text="Menu">
          <div className="profile-section-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
            </svg>
          </div>
        </ToolTip>
      ) : (
        <ToolTip text="Create">
          <div className="profile-section-icon">
            <Plus />
          </div>
        </ToolTip>
      )}
      <ToolTip text="Messenger">
        <div className="profile-section-icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5c-1.922 0-3.736-.472-5.33-1.308a.63.63 0 0 0-.447-.069l-3.4.882a1.5 1.5 0 0 1-1.828-1.829l.882-3.4a.63.63 0 0 0-.07-.445A11.454 11.454 0 0 1 .5 12zm17.56-1.43a.819.819 0 0 0-1.125-1.167L14 11.499l-3.077-2.171a1.5 1.5 0 0 0-2.052.308l-2.93 3.793a.819.819 0 0 0 1.123 1.167L10 12.5l3.076 2.172a1.5 1.5 0 0 0 2.052-.308l2.931-3.793z"></path>
          </svg>
        </div>
        <span className="badge">4+</span>
      </ToolTip>
      <ToolTip text="Notification">
        <div className="profile-section-icon">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path>
          </svg>
        </div>
        <span className="badge">17+</span>
      </ToolTip>
      <ToolTip text="Account">
        <div className="profile-section-icon profile-icon hover:opacity-90">
          <img src={profilePicture} alt="profile" />
        </div>
      </ToolTip>
    </div>
  );
};

export default HeaderProfile;
