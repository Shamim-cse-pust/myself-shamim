import React from "react";

const personalDetails = [
  { label: "Name", value: "Md. Shamim Miah" },
  { label: "Father’s Name", value: "Md. Aminul Islam" },
  { label: "Mother’s Name", value: "Aklima Begum" },
  { label: "Birth Place and Date", value: "Manikganj, 20 Oct 1999" },
  { label: "Nationality", value: "Bangladeshi" },
  { label: "Religion", value: "Islam" },
  { label: "Blood Group", value: "A+ (A Positive)" },
  { label: "Marital Status", value: "Unmarried" },
  { label: "Present Address", value: "Mirpur-7, Dhaka, Bnagladesh" },
  {
    label: "Permanent Address",
    value:
      "Village: Mouhali, Post: Baratia, Sub District & Police Station: Ghior, District: Manikganj, Division: Dhaka, Country: Bangladesh.",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/Shamim-cse-pust",
    icon: "devicon-github-original",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/md-shamim-miah-b01833217/",
    icon: "devicon-linkedin-plain",
  },
  {
    label: "Facebook",
    url: "https://facebook.com/shamim1999mi",
    icon: "devicon-facebook-plain",
  },
];

const email = {
  label: "Email",
  value: "shamim.pust.cse@gmail.com",
  icon: "devicon-google-plain",
  url: "mailto:shamim.pust.cse@gmail.com",
};
const phone = {
  label: "Phone",
  value: "+8801784766676",
  icon: "devicon-android-plain",
  url: "tel:+8801784766676",
};

const PersonalDetails = () => {
  return (
    <section id="personal-details" className="personal-details common">
      <h2>Personal Details</h2>
      <div className="personal-details-2col">
        <div className="personal-details-grid">
          <div className="personal-social-title">Who AM I</div>
          {personalDetails.map((item, idx) => (
            <div className="personal-detail-row" key={idx}>
              <span className="personal-detail-label">{item.label}:</span>
              <span className="personal-detail-value">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="personal-social-grid">
          <div className="personal-social-title">Contact & Social Media</div>
          <div className="personal-social-list">
            <a
              href={email.url}
              className="personal-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`${email.icon} personal-social-icon`}></i>{" "}
              {email.value}
            </a>
            <a
              href={phone.url}
              className="personal-social-link"
              target="_blank"
              rel="naoopener noreferrer"
            >
              <i className={`${phone.icon} personal-social-icon`}></i>{" "}
              {phone.value}
            </a>
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                className="personal-social-link"
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
              >
                <i className={`${item.icon} personal-social-icon`}></i>{" "}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
