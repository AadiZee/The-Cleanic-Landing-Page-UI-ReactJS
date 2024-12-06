import SectionImageOne from "../../assets/section-image-1.png";
import SectionImageTwo from "../../assets/section-image-2.png";
import SectionImageThree from "../../assets/section-image-3.png";

const Services = ({ theme, themeStyles, screenWidth }) => {
  return (
    <div
      className="col-12 p-0"
      style={{
        backgroundColor: themeStyles.sectionColor,
      }}
    >
      <div className="container p-0">
        <div
          className="row w-100 mx-auto flex-column align-items-center justify-content-between"
          style={{
            padding: screenWidth >= 576 ? "100px 0 70px 0" : "90px 0 35px 0",
            gap: screenWidth >= 576 ? "70px" : "30px",
          }}
        >
          <div
            className="col-auto p-0"
            style={{
              textAlign: "center",
            }}
          >
            <div
              className=""
              style={{
                fontSize: screenWidth >= 576 ? "44px" : "26px",
                lineHeight: "1.3",
                fontWeight: "normal",
                color: themeStyles.sectionTextColor,
                marginBottom: "10px",
              }}
            >
              For Anything You Need
            </div>
            <div
              className=""
              style={{
                fontSize: screenWidth >= 576 ? "22px" : "19px",
                lineHeight: "1",
                fontWeight: "normal",
                letterSpacing: "0.1px",
                color: themeStyles.sectionTextColor,
              }}
            >
              Our stellar services
            </div>
          </div>

          <div className="col-12 p-0">
            <div
              className="row w-100 mx-auto"
              style={{
                gap: screenWidth >= 576 ? "25px" : "8px",
                paddingInline: screenWidth >= 576 ? "0" : "14px",
              }}
            >
              <div className="col-12 col-lg p-0">
                <div
                  className="hover-effect"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    className=""
                    src={SectionImageOne}
                    alt="section img one"
                    style={{
                      width: "100%",
                      minHeight: screenWidth >= 576 ? "530px" : "425px",
                      aspectRatio: screenWidth >= 576 ? "unset" : "1/1",
                      maxHeight: "600px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />

                  <div
                    className="d-flex align-items-end"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      padding: "30px",
                      backdropFilter:
                        screenWidth >= 576 ? "brightness(85%)" : "unset",
                      background:
                        screenWidth >= 576
                          ? "unset"
                          : theme === "light"
                          ? "linear-gradient(0deg, rgba(10,35,35,0.8) 0%, rgba(10,35,35,0.4) 50%, transparent 100%)"
                          : "linear-gradient(0deg, rgba(27, 26, 85,0.8) 0%, rgba(27, 26, 85,0.4) 50%, transparent 100%)",
                      borderRadius: "11px",
                    }}
                  >
                    <div
                      className="text-start w-100"
                      style={{
                        fontSize: screenWidth >= 576 ? "30px" : "20px",
                        color: themeStyles.textSecondaryColor,
                        fontWeight: "normal",
                        lineHeight: "1.3",
                      }}
                    >
                      Move In/Move Out
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg p-0">
                <div
                  className="hover-effect"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    className=""
                    src={SectionImageTwo}
                    alt="section img one"
                    style={{
                      width: "100%",
                      minHeight: screenWidth >= 576 ? "530px" : "425px",
                      aspectRatio: screenWidth >= 576 ? "unset" : "1/1",
                      maxHeight: "600px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />

                  <div
                    className="d-flex align-items-end"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      padding: "30px",
                      backdropFilter:
                        screenWidth >= 576 ? "brightness(85%)" : "unset",
                      background:
                        screenWidth >= 576
                          ? "unset"
                          : theme === "light"
                          ? "linear-gradient(0deg, rgba(10,35,35,0.8) 0%, rgba(10,35,35,0.4) 50%, transparent 100%)"
                          : "linear-gradient(0deg, rgba(27, 26, 85,0.8) 0%, rgba(27, 26, 85,0.4) 50%, transparent 100%)",
                      borderRadius: "11px",
                    }}
                  >
                    <div
                      className="text-start w-100"
                      style={{
                        fontSize: screenWidth >= 576 ? "30px" : "20px",
                        color: themeStyles.textSecondaryColor,
                        fontWeight: "normal",
                        lineHeight: "1.3",
                      }}
                    >
                      Deep Cleaning
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg p-0">
                <div
                  className="hover-effect"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    className=""
                    src={SectionImageThree}
                    alt="section img one"
                    style={{
                      width: "100%",
                      minHeight: screenWidth >= 576 ? "530px" : "425px",
                      aspectRatio: screenWidth >= 576 ? "unset" : "1/1",
                      maxHeight: "600px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />

                  <div
                    className="d-flex align-items-end"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      padding: "30px",
                      backdropFilter:
                        screenWidth >= 576 ? "brightness(85%)" : "unset",
                      background:
                        screenWidth >= 576
                          ? "unset"
                          : theme === "light"
                          ? "linear-gradient(0deg, rgba(10,35,35,0.8) 0%, rgba(10,35,35,0.4) 50%, transparent 100%)"
                          : "linear-gradient(0deg, rgba(27, 26, 85,0.8) 0%, rgba(27, 26, 85,0.4) 50%, transparent 100%)",
                      borderRadius: "11px",
                    }}
                  >
                    <div
                      className="text-start w-100"
                      style={{
                        fontSize: screenWidth >= 576 ? "30px" : "20px",
                        color: themeStyles.textSecondaryColor,
                        fontWeight: "normal",
                        lineHeight: "1.3",
                      }}
                    >
                      Laundry
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto p-0">
            <button
              className="btn"
              style={{
                backgroundColor: themeStyles.colorOne,
                color: themeStyles.tertiaryColor,
                // border: theme === 'dark' ? `1px solid ${themeStyles.tertiaryColor}` : '',
                width: screenWidth >= 576 ? "210px" : "200px",
                height: screenWidth >= 576 ? "56px" : "42px",
                fontSize: screenWidth >= 576 ? "19px" : "17px",
                fontWeight: "normal",
                borderRadius: "80px",
              }}
            >
              See All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
