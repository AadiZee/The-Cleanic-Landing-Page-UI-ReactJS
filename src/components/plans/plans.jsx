import { BsArrowRight } from "react-icons/bs";

const Plans = ({ themeStyles, screenWidth }) => {
  return (
    <div
      style={{
        backgroundColor: themeStyles.sectionColor,
      }}
    >
      <div
        className="container"
        style={{
          padding: "100px 0",
        }}
      >
        <div
          className="row flex-column flex-lg-row w-100 mx-auto align-items-center"
          style={{
            gap:
              screenWidth >= 992 ? "0" : screenWidth >= 576 ? "60px" : "80px",
          }}
        >
          <div className="col-auto col-lg-7 p-0">
            <div
              className="d-flex flex-column justify-content-center align-items-center align-items-lg-start h-100"
              style={{
                maxWidth: "405px",
                color: themeStyles.textMainColor,
                fontWeight: "normal",
                letterSpacing: "0.1px",
                paddingInline: screenWidth >= 576 ? "0" : "25px",
                // gap: '15px'
              }}
            >
              <div
                className="text-center text-lg-start"
                style={{
                  fontSize: screenWidth >= 576 ? "44px" : "26px",
                  lineHeight: "1.15",
                  marginBottom: "15px",
                }}
              >
                Our Plans &<br /> Special Discounts
              </div>
              <div
                className="text-center text-lg-start"
                style={{
                  fontSize: screenWidth >= 576 ? "18px" : "16px",
                  lineHeight: "1.5",
                  marginBottom: "22px",
                }}
              >
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy. I'm a paragraph. Click here to add your own text and
                edit me. It's easy.
              </div>
              <button
                className="btn"
                style={{
                  backgroundColor: themeStyles.sectionTextColor,
                  color: themeStyles.tertiaryColor,
                  // border: theme === 'dark' ? `1px solid ${themeStyles.tertiaryColor}` : '',
                  width: screenWidth >= 576 ? "217px" : "210px",
                  height: screenWidth >= 576 ? "57px" : "42px",
                  fontSize: screenWidth >= 576 ? "18px" : "17px",
                  borderRadius: "100px",
                }}
              >
                Choose Your Plan
              </button>
            </div>
          </div>
          <div
            className="col-auto col-lg-5"
            style={{
              paddingInline: screenWidth >= 576 ? "0" : "10px",
            }}
          >
            <div
              className=""
              style={{
                height: "512px",
                width: "411px",
                maxWidth: "100%",
                borderRadius: "22px",
                backgroundColor: themeStyles.mainColor,
                marginBottom: "50px",
                position: "relative",
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  position: "absolute",
                  top: "-9.5px",
                  left: "0",
                  width: "100%",
                }}
              >
                <div
                  className=""
                  style={{
                    padding: "2px 7px",
                    backgroundColor: themeStyles.textTertiaryColor,
                  }}
                >
                  <div
                    classNam=""
                    style={{
                      fontSize: "14.5px",
                      letterSpacing: "0",
                      color: themeStyles.otherOtherColor,
                      lineHeight: "1",
                    }}
                  >
                    Best Value
                  </div>
                </div>
              </div>
              <div
                className="d-flex flex-column justify-content-between align-items-center"
                style={{
                  height: "50%",
                  backgroundColor: themeStyles.mainColor,
                  borderTopLeftRadius: "22px",
                  borderTopRightRadius: "22px",
                  padding: "28px 40px",
                  color: themeStyles.textTertiaryColor,
                  fontWeight: "normal",
                }}
              >
                <div
                  className=""
                  style={{
                    fontSize: "20px",
                    letterSpacing: "0.15px",
                  }}
                >
                  The Bi-Monthly Plan
                </div>

                <div style={{}}>
                  <div
                    className=""
                    style={{
                      fontSize: "70px",
                      letterSpacing: "0.15px",
                      marginBottom: "2px",
                      lineHeight: "1",
                    }}
                  >
                    <sup
                      style={{
                        fontSize: "27px",
                        top: "-30px",
                        right: "5px",
                      }}
                    >
                      $
                    </sup>
                    280
                  </div>

                  <div
                    className="text-center"
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    Every month
                  </div>
                </div>

                <button
                  className="btn w-100"
                  style={{
                    backgroundColor: themeStyles.textTertiaryColor,
                    color: themeStyles.otherOtherColor,
                    height: "48px",
                    borderRadius: "80px",
                  }}
                >
                  Select
                </button>
              </div>

              <div
                className="d-flex flex-column align-items-center justify-content-between"
                style={{
                  height: "50%",
                  backgroundColor: themeStyles.textMainColor,
                  borderRadius: "22px",
                  color: themeStyles.tertiaryColor,
                  padding: "20px 20px 24px 20px",
                }}
              >
                <div className="d-inline-flex align-items-center justify-content-center">
                  <BsArrowRight
                    className=""
                    style={{
                      width: "17px",
                      height: "17px",
                      marginRight: "6px",
                    }}
                  />
                  <div
                    className=""
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    I'm a benefit
                  </div>
                </div>
                <div className="d-inline-flex align-items-center justify-content-center">
                  <BsArrowRight
                    className=""
                    style={{
                      width: "17px",
                      height: "17px",
                      marginRight: "6px",
                    }}
                  />
                  <div
                    className=""
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    I'm a benefit
                  </div>
                </div>
                <div className="d-inline-flex align-items-center justify-content-center">
                  <BsArrowRight
                    className=""
                    style={{
                      width: "17px",
                      height: "17px",
                      marginRight: "6px",
                    }}
                  />
                  <div
                    className=""
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    I'm a benefit
                  </div>
                </div>
                <div className="d-inline-flex align-items-center justify-content-center">
                  <BsArrowRight
                    className=""
                    style={{
                      width: "17px",
                      height: "17px",
                      marginRight: "6px",
                    }}
                  />
                  <div
                    className=""
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    I'm a benefit
                  </div>
                </div>
                <div className="d-inline-flex align-items-center justify-content-center">
                  <BsArrowRight
                    className=""
                    style={{
                      width: "17px",
                      height: "17px",
                      marginRight: "6px",
                    }}
                  />
                  <div
                    className=""
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    I'm a benefit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
