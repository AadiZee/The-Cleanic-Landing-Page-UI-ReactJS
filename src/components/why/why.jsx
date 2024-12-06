import BackgroundTwo from "../../assets/background-2.png";

const Why = ({ themeStyles, screenWidth }) => {
  return (
    <div
      style={{
        backgroundColor: themeStyles.primaryColor,
      }}
    >
      <div className="container p-0">
        <div
          className="row w-100 mx-auto"
          style={{
            gap: screenWidth >= 576 ? "0" : "75px",
          }}
        >
          <div className="col-12 col-lg-4 p-0">
            <div
              className=""
              style={{
                position: "relative",
              }}
            >
              <div
                className="w-100"
                style={{
                  height: screenWidth >= 576 ? "700px" : "300px",
                  backgroundImage: `url(${BackgroundTwo})`,
                  backgroundSize:
                    screenWidth >= 1800
                      ? "cover"
                      : screenWidth >= 992
                      ? "contain"
                      : "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: screenWidth >= 992 ? "" : "center",
                  backgroundAttachment:
                    screenWidth >= 1800
                      ? "scroll"
                      : screenWidth >= 992
                      ? "fixed"
                      : "scroll",
                  // position: 'relative'
                }}
              ></div>
              {screenWidth >= 576 && (
                <>
                  <div
                    className=""
                    style={{
                      position: "absolute",
                      top: "0",
                      left: screenWidth >= 992 ? "-1px" : "0",
                      right: screenWidth >= 992 ? "-1px" : "0",
                      height: "100px",
                      zIndex: "1",
                      backgroundColor: themeStyles.primaryColor,
                    }}
                  ></div>
                  <div
                    className=""
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: screenWidth >= 992 ? "-1px" : "0",
                      right: screenWidth >= 992 ? "-1px" : "0",
                      height: "100px",
                      zIndex: "1",
                      backgroundColor: themeStyles.primaryColor,
                    }}
                  ></div>
                </>
              )}
            </div>
          </div>
          <div
            className="col-12 col-lg-8"
            style={{
              padding: screenWidth >= 576 ? "0" : "20px",
            }}
          >
            <div
              className="h-100 w-100 d-flex flex-column align-items-start justify-content-center"
              style={{
                paddingInlineStart: screenWidth >= 992 ? "50px" : "0",
                paddingBottom:
                  screenWidth >= 992
                    ? "0"
                    : screenWidth >= 576
                    ? "100px"
                    : "25px",
                color: themeStyles.tertiaryColor,
                gap: "35px",
              }}
            >
              <div
                className=""
                style={{
                  fontSize: screenWidth >= 576 ? "44px" : "25px",
                  maxWidth: screenWidth >= 576 ? "unset" : "170px",
                  lineHeight: "1",
                }}
              >
                Why Choose The Cleanic
              </div>

              <div
                className=""
                style={{
                  display: "grid",
                  gridTemplateColumns: screenWidth >= 576 ? "1fr 1fr" : "1fr",
                  gridTemplateRows: "1fr 1fr",
                  rowGap: screenWidth >= 576 ? "35px" : "22px",
                  columnGap: screenWidth >= 576 ? "30px" : "0",
                  maxWidth: "640px",
                }}
              >
                <div className="">
                  <div
                    className="row w-100 mx-auto"
                    style={{
                      gap: screenWidth >= 576 ? "12px" : "8px",
                    }}
                  >
                    <div className="col-auto p-0">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          backgroundColor: themeStyles.mainColor,
                          borderRadius: "100%",
                          padding: "3.5px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          ariaLabel="homepage"
                          data-bbox="27.505 20 144.99 160.001"
                          data-type="color"
                          viewBox="27.505 20 144.99 160.001"
                          // style={{ marginRight: '5px' }}
                        >
                          <path
                            // fill={themeStyles.tertiaryColor}
                            d="m108.65 27.127 4.567 17.328c2.543 9.619 6.958 17.998 12.985 24.805s13.558 11.927 22.334 15.079l17.767 6.352c8.256 2.977 8.256 15.641 0 18.618l-17.767 6.352c-8.776 3.152-16.307 8.272-22.334 15.079s-10.441 15.185-12.985 24.805l-4.567 17.328c-2.489 9.503-14.91 9.503-17.399 0l-4.522-17.27c-2.543-9.619-6.958-18.056-12.985-24.863s-13.558-11.927-22.28-15.079l-17.767-6.352c-8.256-2.977-8.256-15.641 0-18.618l17.767-6.352c8.776-3.152 16.307-8.272 22.28-15.079 6.027-6.807 10.441-15.185 12.985-24.805l4.567-17.328c2.444-9.503 14.856-9.503 17.354 0"
                            data-color="1"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col p-0">
                      <div
                        className=""
                        style={
                          {
                            // paddingTop: screenWidth >= 576 ? '0' : '2.5px'
                          }
                        }
                      >
                        <div
                          className=""
                          style={{
                            fontSize: screenWidth >= 576 ? "22px" : "19px",
                            lineHeight: "1.1",
                            marginBottom: screenWidth >= 576 ? "15px" : "6px",
                          }}
                        >
                          Qualified Team
                        </div>

                        <div
                          className=""
                          style={{
                            fontSize: screenWidth >= 576 ? "16px" : "15px",
                            maxWidth: screenWidth >= 576 ? "unset" : "220px",
                            // color: 'var(--cstm-color-3)'
                          }}
                        >
                          I'm a paragraph. Click here to add your own text and
                          edit me. It's easy.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div
                    className="row w-100 mx-auto"
                    style={{
                      gap: screenWidth >= 576 ? "12px" : "8px",
                    }}
                  >
                    <div className="col-auto p-0">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          backgroundColor: themeStyles.mainColor,
                          borderRadius: "100%",
                          padding: "3.5px",
                        }}
                      >
                        {/* <img className='' src={StarIcon} alt='star icon' style={{
                                                    height: '11px',
                                                    width: '11px'
                                                }} /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          ariaLabel="homepage"
                          data-bbox="27.505 20 144.99 160.001"
                          data-type="color"
                          viewBox="27.505 20 144.99 160.001"
                          // style={{ marginRight: '5px' }}
                        >
                          <path
                            // fill={themeStyles.tertiaryColor}
                            d="m108.65 27.127 4.567 17.328c2.543 9.619 6.958 17.998 12.985 24.805s13.558 11.927 22.334 15.079l17.767 6.352c8.256 2.977 8.256 15.641 0 18.618l-17.767 6.352c-8.776 3.152-16.307 8.272-22.334 15.079s-10.441 15.185-12.985 24.805l-4.567 17.328c-2.489 9.503-14.91 9.503-17.399 0l-4.522-17.27c-2.543-9.619-6.958-18.056-12.985-24.863s-13.558-11.927-22.28-15.079l-17.767-6.352c-8.256-2.977-8.256-15.641 0-18.618l17.767-6.352c8.776-3.152 16.307-8.272 22.28-15.079 6.027-6.807 10.441-15.185 12.985-24.805l4.567-17.328c2.444-9.503 14.856-9.503 17.354 0"
                            data-color="1"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col p-0">
                      <div
                        className=""
                        style={
                          {
                            // paddingTop: screenWidth >= 576 ? '0' : '2.5px'
                          }
                        }
                      >
                        <div
                          className=""
                          style={{
                            fontSize: screenWidth >= 576 ? "22px" : "19px",
                            lineHeight: "1.1",
                            marginBottom: screenWidth >= 576 ? "15px" : "6px",
                          }}
                        >
                          Same Day Availability
                        </div>

                        <div
                          className=""
                          style={{
                            fontSize: screenWidth >= 576 ? "16px" : "15px",
                            maxWidth: screenWidth >= 576 ? "unset" : "220px",
                            // color: 'var(--cstm-color-3)'
                          }}
                        >
                          I'm a paragraph. Click here to add your own text and
                          edit me. It's easy.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div
                    className="row w-100 mx-auto"
                    style={{
                      gap: screenWidth >= 576 ? "12px" : "8px",
                    }}
                  >
                    <div className="col-auto p-0">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          backgroundColor: themeStyles.mainColor,
                          borderRadius: "100%",
                          padding: "3.5px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          ariaLabel="homepage"
                          data-bbox="27.505 20 144.99 160.001"
                          data-type="color"
                          viewBox="27.505 20 144.99 160.001"
                          // style={{ marginRight: '5px' }}
                        >
                          <path
                            // fill={themeStyles.tertiaryColor}
                            d="m108.65 27.127 4.567 17.328c2.543 9.619 6.958 17.998 12.985 24.805s13.558 11.927 22.334 15.079l17.767 6.352c8.256 2.977 8.256 15.641 0 18.618l-17.767 6.352c-8.776 3.152-16.307 8.272-22.334 15.079s-10.441 15.185-12.985 24.805l-4.567 17.328c-2.489 9.503-14.91 9.503-17.399 0l-4.522-17.27c-2.543-9.619-6.958-18.056-12.985-24.863s-13.558-11.927-22.28-15.079l-17.767-6.352c-8.256-2.977-8.256-15.641 0-18.618l17.767-6.352c8.776-3.152 16.307-8.272 22.28-15.079 6.027-6.807 10.441-15.185 12.985-24.805l4.567-17.328c2.444-9.503 14.856-9.503 17.354 0"
                            data-color="1"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col p-0">
                      <div
                        className=""
                        style={
                          {
                            // paddingTop: screenWidth >= 576 ? '0' : '2.5px'
                          }
                        }
                      >
                        <div
                          className=""
                          style={{
                            fontSize: screenWidth >= 576 ? "22px" : "19px",
                            lineHeight: "1.1",
                            marginBottom: screenWidth >= 576 ? "15px" : "6px",
                          }}
                        >
                          Outstanding Support
                        </div>

                        <div
                          className=""
                          style={{
                            fontSize: screenWidth >= 576 ? "16px" : "15px",
                            maxWidth: screenWidth >= 576 ? "unset" : "220px",
                            // color: 'var(--cstm-color-3)'
                          }}
                        >
                          I'm a paragraph. Click here to add your own text and
                          edit me. It's easy.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div
                    className="row w-100 mx-auto"
                    style={{
                      gap: screenWidth >= 576 ? "12px" : "8px",
                    }}
                  >
                    <div className="col-auto p-0">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{
                          backgroundColor: themeStyles.mainColor,
                          borderRadius: "100%",
                          padding: "3.5px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          ariaLabel="homepage"
                          data-bbox="27.505 20 144.99 160.001"
                          data-type="color"
                          viewBox="27.505 20 144.99 160.001"
                          // style={{ marginRight: '5px' }}
                        >
                          <path
                            // fill={themeStyles.tertiaryColor}
                            d="m108.65 27.127 4.567 17.328c2.543 9.619 6.958 17.998 12.985 24.805s13.558 11.927 22.334 15.079l17.767 6.352c8.256 2.977 8.256 15.641 0 18.618l-17.767 6.352c-8.776 3.152-16.307 8.272-22.334 15.079s-10.441 15.185-12.985 24.805l-4.567 17.328c-2.489 9.503-14.91 9.503-17.399 0l-4.522-17.27c-2.543-9.619-6.958-18.056-12.985-24.863s-13.558-11.927-22.28-15.079l-17.767-6.352c-8.256-2.977-8.256-15.641 0-18.618l17.767-6.352c8.776-3.152 16.307-8.272 22.28-15.079 6.027-6.807 10.441-15.185 12.985-24.805l4.567-17.328c2.444-9.503 14.856-9.503 17.354 0"
                            data-color="1"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="col p-0">
                      <div
                        className=""
                        style={
                          {
                            // paddingTop: screenWidth >= 576 ? '0' : '2.5px'
                          }
                        }
                      >
                        <div
                          className=""
                          style={{
                            fontSize: screenWidth >= 576 ? "22px" : "19px",
                            lineHeight: "1.1",
                            marginBottom: screenWidth >= 576 ? "15px" : "6px",
                          }}
                        >
                          Eco-Friendly Materials
                        </div>

                        <div
                          className=""
                          style={{
                            fontSize: screenWidth >= 576 ? "16px" : "15px",
                            maxWidth: screenWidth >= 576 ? "unset" : "220px",
                            // color: 'var(--cstm-color-3)'
                          }}
                        >
                          I'm a paragraph. Click here to add your own text and
                          edit me. It's easy.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className=""
                style={{
                  width: screenWidth >= 576 ? "203px" : "192px",
                  height: screenWidth >= 576 ? "56px" : "42px",
                  backgroundColor: themeStyles.tertiaryColor,
                  color: themeStyles.primaryColor,
                  border: "none",
                  borderRadius: "100px",
                  marginLeft: screenWidth >= 576 ? "30px" : "2px",
                  marginTop: screenWidth >= 576 ? "0" : "-10px",
                }}
              >
                Get To Know Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
