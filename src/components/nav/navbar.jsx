import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiUserCircle } from "react-icons/hi2";

const Navbar = ({
  theme,
  themeStyles,
  screenWidth,
  navbarToggle,
  setNavbarToggle,
}) => {
  return (
    <div
      className=""
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "100",
      }}
    >
      <div className="container p-0 mx-auto">
        <div
          className="row w-100 mx-auto"
          style={{
            height: "92px",
            backgroundColor: themeStyles.colorOne,
            marginTop: screenWidth >= 576 ? "38px" : "0",
            position: "relative",
          }}
        >
          <nav className="navbar navbar-expand-lg h-100 py-0 py-sm-1">
            <div className="container-fluid h-100 p-0">
              {screenWidth >= 576 ? (
                <a
                  className="navbar-brand flex-grow-1 flex-shrink-1 h-100"
                  href="/"
                  style={{
                    paddingLeft: "30px",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-start h-100">
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
                          fill="#9290C3"
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
                        color: themeStyles.tertiaryColor,
                        letterSpacing: "-1px",
                      }}
                    >
                      The cleanic
                    </div>
                  </div>
                </a>
              ) : (
                <a
                  className="navbar-brand flex-grow-1 flex-shrink-1 h-100"
                  href="/"
                  style={{
                    paddingLeft: "20px",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-start h-100">
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
                          fill="#9290C3"
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
                        color: themeStyles.tertiaryColor,
                        letterSpacing: "-1px",
                      }}
                    >
                      The cleanic
                    </div>
                  </div>
                </a>
              )}
              {screenWidth >= 576 ? (
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{
                    marginRight: "30px",
                    boxShadow: "none",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <HiOutlineMenuAlt4
                    className=""
                    style={{
                      height: "30px",
                      width: "30px",
                      color: themeStyles.tertiaryColor,
                    }}
                  />
                </button>
              ) : (
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{
                    marginRight: "10px",
                    border: "none",
                    boxShadow: "none",
                    outline: "none",
                  }}
                  onClick={() => setNavbarToggle(true)}
                >
                  <HiOutlineMenuAlt4
                    className=""
                    style={{
                      height: "30px",
                      width: "30px",
                      color: themeStyles.tertiaryColor,
                    }}
                  />
                </button>
              )}
              {screenWidth >= 576 && (
                <div
                  className="collapse navbar-collapse flex-grow-0"
                  id="navbarNav"
                  style={{
                    padding:
                      screenWidth <= 991 ? "0 30px 20px 0" : "0 30px 0 0 ",
                    backgroundColor: themeStyles.colorOne,
                  }}
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        aria-current="page"
                        href="/"
                        style={{
                          color: themeStyles.tertiaryColor,
                        }}
                      >
                        Plans
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/"
                        style={{
                          color: themeStyles.tertiaryColor,
                        }}
                      >
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/"
                        style={{
                          color: themeStyles.tertiaryColor,
                        }}
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/"
                        style={{
                          color: themeStyles.tertiaryColor,
                        }}
                      >
                        <div className="d-flex align-items-center justify-content-start">
                          <div className="" style={{}}>
                            Log In
                          </div>

                          <HiUserCircle
                            style={{
                              color: themeStyles.tertiaryColor,
                              height: "28px",
                              width: "28px",
                              overflow: "visible",
                              marginLeft: "8px",
                            }}
                          />
                        </div>
                      </a>
                    </li>
                    <li
                      className="nav-item d-flex align-items-center justify-content-start"
                      style={{
                        paddingLeft: screenWidth <= 991 ? "30px" : "0",
                        paddingTop: screenWidth <= 991 ? "10px" : "0",
                        paddingBottom: screenWidth <= 991 ? "10px" : "0",
                      }}
                    >
                      <button
                        className="btn nav-link"
                        href="/"
                        style={{
                          height: "40px",
                          width: "157px",
                          backgroundColor: themeStyles.tertiaryColor,
                          color: themeStyles.textMainColor,
                          borderRadius: "80px",
                        }}
                      >
                        Book now
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {navbarToggle && screenWidth <= 575 && (
            <div
              className="position-absolute"
              style={{
                top: "0",
                left: "0",
                width: "100%",
                height: "100vh",
                backgroundColor: themeStyles.primaryColor,
                animation: "fadeFromTop 0.75s ease-in-out 0s",
              }}
            >
              <div
                className="row w-100 mx-auto"
                style={{
                  padding: "28px 10px",
                  gap: "27px",
                }}
              >
                <div className="col-12 p-0">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center justify-content-start">
                      <HiUserCircle
                        style={{
                          color: themeStyles.tertiaryColor,
                          height: "30px",
                          width: "30px",
                        }}
                      />
                      <div
                        className=""
                        style={{
                          marginLeft: "10px",
                          fontSize: "20px",
                          color: themeStyles.tertiaryColor,
                        }}
                      >
                        Log In
                      </div>
                    </div>

                    <HiOutlineXMark
                      className=""
                      style={{
                        height: "30px",
                        width: "30px",
                        color: themeStyles.tertiaryColor,
                      }}
                      onClick={() => setNavbarToggle(false)}
                    />
                  </div>
                </div>

                <div className="col-12 p-0">
                  <div
                    className="row flex-column w-100 mx-auto align-items-center"
                    style={{
                      gap: "25px",
                    }}
                  >
                    <div className="col-auto p-0">
                      <div
                        className=""
                        style={{
                          fontSize: "19px",
                          color: themeStyles.tertiaryColor,
                        }}
                      >
                        Plans
                      </div>
                    </div>
                    <div className="col-auto p-0">
                      <div
                        className=""
                        style={{
                          fontSize: "19px",
                          color: themeStyles.tertiaryColor,
                        }}
                      >
                        Services
                      </div>
                    </div>
                    <div className="col-auto p-0">
                      <div
                        className=""
                        style={{
                          fontSize: "19px",
                          color: themeStyles.tertiaryColor,
                        }}
                      >
                        About
                      </div>
                    </div>
                    <div className="col-auto p-0">
                      <button
                        className="btn"
                        style={{
                          width: "160px",
                          height: "42px",
                          backgroundColor: themeStyles.tertiaryColor,
                          fontSize: "15px",
                          color: themeStyles.primaryColor,
                          borderRadius: "80px",
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
