import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa6";

const Footer = ({ theme, themeStyles, screenWidth }) => {
  return (
    <div
      className="col-12 p-0"
      style={{
        backgroundColor: themeStyles.mainColor,
      }}
    >
      <div
        className="container"
        style={{
          padding: "40px 0",
        }}
      >
        <div
          className="row w-100 mx-auto"
          style={{
            paddingInlineStart: screenWidth >= 768 ? "0" : "20px",
            gap: screenWidth >= 768 ? "0" : "40px",
          }}
        >
          <div className="col-12 col-md-4 col-lg-3 p-0">
            <div
              className="d-flex align-items-center justify-content-start w-100"
              style={{
                marginBottom:
                  screenWidth >= 992
                    ? "80px"
                    : screenWidth >= 768
                    ? "100px"
                    : "20px",
              }}
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  data-bbox="27.505 20 144.99 160.001"
                  data-type="color"
                  viewBox="27.505 20 144.99 160.001"
                  style={{ marginRight: "5px" }}
                >
                  <path
                    fill={themeStyles.primarColor}
                    d="m108.65 27.127 4.567 17.328c2.543 9.619 6.958 17.998 12.985 24.805s13.558 11.927 22.334 15.079l17.767 6.352c8.256 2.977 8.256 15.641 0 18.618l-17.767 6.352c-8.776 3.152-16.307 8.272-22.334 15.079s-10.441 15.185-12.985 24.805l-4.567 17.328c-2.489 9.503-14.91 9.503-17.399 0l-4.522-17.27c-2.543-9.619-6.958-18.056-12.985-24.863s-13.558-11.927-22.28-15.079l-17.767-6.352c-8.256-2.977-8.256-15.641 0-18.618l17.767-6.352c8.776-3.152 16.307-8.272 22.28-15.079 6.027-6.807 10.441-15.185 12.985-24.805l4.567-17.328c2.444-9.503 14.856-9.503 17.354 0"
                    data-color="1"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  data-bbox="27.505 20 144.99 160.001"
                  data-type="color"
                  viewBox="27.505 20 144.99 160.001"
                  style={{ marginRight: "5px" }}
                >
                  <path
                    fill="#1b1a55"
                    d="m108.65 27.127 4.567 17.328c2.543 9.619 6.958 17.998 12.985 24.805s13.558 11.927 22.334 15.079l17.767 6.352c8.256 2.977 8.256 15.641 0 18.618l-17.767 6.352c-8.776 3.152-16.307 8.272-22.334 15.079s-10.441 15.185-12.985 24.805l-4.567 17.328c-2.489 9.503-14.91 9.503-17.399 0l-4.522-17.27c-2.543-9.619-6.958-18.056-12.985-24.863s-13.558-11.927-22.28-15.079l-17.767-6.352c-8.256-2.977-8.256-15.641 0-18.618l17.767-6.352c8.776-3.152 16.307-8.272 22.28-15.079 6.027-6.807 10.441-15.185 12.985-24.805l4.567-17.328c2.444-9.503 14.856-9.503 17.354 0"
                    data-color="1"
                  ></path>
                </svg>
              )}
              <div
                className=""
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: themeStyles.otherColor,
                  letterSpacing: "-1px",
                }}
              >
                The cleanic
              </div>
            </div>
            <button
              className="btn"
              style={{
                backgroundColor: themeStyles.textTertiaryColor,
                border: "none",
                color: themeStyles.otherOtherColor,
                width: screenWidth >= 768 ? "194px" : "160px",
                height: screenWidth >= 768 ? "56px" : "42px",
                borderRadius: "100px",
              }}
            >
              Book Now
            </button>
          </div>
          <div className="col-12 col-md-4 col-lg-3 order-3 order-md-1 p-0 pt-1">
            <div
              className="d-flex flex-column align-items-start"
              style={{
                fontSize: screenWidth >= 768 ? "16px" : "14.5px",
                fontWeight: "normal",
                color: themeStyles.otherColor,
                letterSpacing: "0.1px",
                gap: screenWidth >= 768 ? "18px" : "12px",
              }}
            >
              <div className="" style={{}}>
                Legal
              </div>

              <div
                className="d-flex flex-column align-items-start"
                style={{
                  gap: "5px",
                }}
              >
                <div>Privacy Policy</div>
                <div>Terms & Conditions</div>
                <div>Refund Policy</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 order-1 order-md-2 p-0 pt-1">
            <div
              className="d-flex flex-column align-items-start"
              style={{
                fontSize: screenWidth >= 768 ? "16px" : "14.5px",
                fontWeight: "normal",
                color: themeStyles.otherColor,
                letterSpacing: "0.1px",
                gap: screenWidth >= 768 ? "18px" : "12px",
              }}
            >
              <div className="" style={{}}>
                Operating Hours
              </div>

              <div
                className="d-flex flex-column align-items-start"
                style={{
                  gap: "1px",
                }}
              >
                <div>Mon - Fri: 8am - 8pm</div>
                <div>Saturday: 9am - 7pm</div>
                <div>Sunday: 9am - 8pm</div>
              </div>

              <div
                className="d-flex flex-column align-items-start"
                style={{
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    marginTop: screenWidth >= 768 ? "10px" : "4px",
                  }}
                >
                  Follow us for cleaning tips
                </div>

                <div
                  className="d-flex align-items-center justify-content-between w-100"
                  style={{
                    maxWidth: screenWidth >= 768 ? "150px" : "180px",
                    marginTop: screenWidth >= 768 ? "0" : "12px",
                  }}
                >
                  <FaInstagram
                    style={{
                      height: "20px",
                      width: "20px",
                      color: themeStyles.otherColor,
                    }}
                  />
                  <FaFacebookF
                    style={{
                      height: "20px",
                      width: "20px",
                      color: themeStyles.otherColor,
                    }}
                  />
                  <FaYoutube
                    style={{
                      height: "20px",
                      width: "20px",
                      color: themeStyles.otherColor,
                    }}
                  />
                  <FaTiktok
                    style={{
                      height: "20px",
                      width: "20px",
                      color: themeStyles.otherColor,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 order-2 order-md-3 offset-md-4 offset-lg-0 p-0 pt-1">
            <div
              className="d-flex flex-column align-items-start"
              style={{
                fontSize: screenWidth >= 768 ? "16px" : "14.5px",
                fontWeight: "normal",
                color: themeStyles.otherColor,
                letterSpacing: "0.1px",
                gap: screenWidth >= 768 ? "18px" : "12px",
              }}
            >
              <div className="" style={{}}>
                Contact
              </div>

              <div
                className="d-flex flex-column align-items-start"
                style={{
                  gap: "1px",
                }}
              >
                <div>The cleanic</div>
                <div>500 Terry Franchine Street</div>
                <div>San Francisco, CA 94158</div>
                <div>123-456-7890</div>
                <div>info@mysite.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
