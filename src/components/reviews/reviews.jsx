import FiveStars from "../../assets/five-stars.svg";

const Reviews = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="col-12 p-0"
      style={{
        backgroundColor: themeStyles.primaryColor,
      }}
    >
      <div
        className="container p-0"
        style={{
          backgroundColor: themeStyles.primaryColor,
        }}
      >
        <div
          className="row w-100 mx-auto flex-column"
          style={{
            margin: screenWidth >= 576 ? "300px 0 65px 0" : "1100px 0 0 0",
            gap: screenWidth >= 576 ? "30px" : "18px",
          }}
        >
          <div className="col-12 p-0">
            <div
              className="text-center text-sm-start"
              style={{
                fontSize: screenWidth >= 576 ? "44px" : "26px",
                color: themeStyles.tertiaryColor,
                letterSpacing: "normal",
                lineHeight: "52.8px",
              }}
            >
              Shiny Happy Clients
            </div>
          </div>

          <div className="col-12 p-0">
            <div
              className="row w-100 mx-auto gy-3 gy-lg-0"
              style={{
                gap: screenWidth >= 992 ? "16px" : "",
              }}
            >
              <div className="col-12 col-sm-6 col-lg p-0 pe-sm-2 p-lg-0">
                <div
                  className="w-100"
                  style={{
                    backgroundColor: themeStyles.mainColor,
                    padding:
                      screenWidth >= 576 ? "55px 25px 55px 25px" : "40px 25px",
                    minHeight:
                      screenWidth >= 1400
                        ? "310px"
                        : screenWidth >= 992
                        ? "389px"
                        : screenWidth >= 576
                        ? "320px"
                        : "275px",
                  }}
                >
                  <div
                    className="d-flex flex-column align-items-start justify-content-start w-100"
                    style={{
                      gap: "12px",
                      color: themeStyles.colorThree,
                    }}
                  >
                    <img
                      className=""
                      src={FiveStars}
                      alt="five star ratings"
                      style={{
                        width: "100px",
                        height: "16px",
                      }}
                    />

                    <div
                      className=""
                      style={{
                        fontSize: screenWidth >= 576 ? "26px" : "22px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      “I’m addicted to the Cleanic!”
                    </div>

                    <div
                      className=""
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      “I'm a testimonial. Click to edit me and add text that
                      says something nice about you and your services.”
                    </div>

                    <div
                      className=""
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      Jane Diers, AR
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg p-0 ps-sm-2 p-lg-0">
                <div
                  className="w-100"
                  style={{
                    backgroundColor: themeStyles.mainColor,
                    padding:
                      screenWidth >= 576 ? "55px 25px 55px 25px" : "40px 25px",
                    minHeight:
                      screenWidth >= 1400
                        ? "310px"
                        : screenWidth >= 992
                        ? "389px"
                        : screenWidth >= 576
                        ? "320px"
                        : "275px",
                  }}
                >
                  <div
                    className="d-flex flex-column align-items-start justify-content-start w-100"
                    style={{
                      color: themeStyles.colorThree,
                      gap: "12px",
                    }}
                  >
                    <img
                      className=""
                      src={FiveStars}
                      alt="five star ratings"
                      style={{
                        width: "100px",
                        height: "16px",
                      }}
                    />

                    <div
                      className=""
                      style={{
                        fontSize: screenWidth >= 576 ? "26px" : "22px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      “My flat looks like a boutique hotel”
                    </div>

                    <div
                      className=""
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      “I'm a testimonial. Click to edit me and add text that
                      says something nice about you and your services.”
                    </div>

                    <div
                      className=""
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      Eric Laguardia, CA
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg p-0 pe-sm-2 p-lg-0">
                <div
                  className="w-100"
                  style={{
                    backgroundColor: themeStyles.mainColor,
                    padding:
                      screenWidth >= 576 ? "55px 25px 55px 25px" : "40px 25px",
                    minHeight:
                      screenWidth >= 1400
                        ? "310px"
                        : screenWidth >= 992
                        ? "389px"
                        : screenWidth >= 576
                        ? "320px"
                        : "275px",
                  }}
                >
                  <div
                    className="d-flex flex-column align-items-start justify-content-start w-100"
                    style={{
                      color: themeStyles.colorThree,
                      gap: "12px",
                    }}
                  >
                    <img
                      className=""
                      src={FiveStars}
                      alt="five star ratings"
                      style={{
                        width: "100px",
                        height: "16px",
                      }}
                    />

                    <div
                      className=""
                      style={{
                        fontSize: screenWidth >= 576 ? "26px" : "22px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      “Soft perfection”
                    </div>

                    <div
                      className=""
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      “I'm a testimonial. Click to edit me and add text that
                      says something nice about you and your services.”
                    </div>

                    <div
                      className=""
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      Lena Rogel, RI
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg p-0 ps-sm-2 p-lg-0">
                <div
                  className="w-100"
                  style={{
                    backgroundColor: themeStyles.mainColor,
                    padding:
                      screenWidth >= 576 ? "55px 25px 55px 25px" : "40px 25px",
                    minHeight:
                      screenWidth >= 1400
                        ? "310px"
                        : screenWidth >= 992
                        ? "389px"
                        : screenWidth >= 576
                        ? "320px"
                        : "275px",
                  }}
                >
                  <div
                    className="d-flex flex-column align-items-start justify-content-start w-100"
                    style={{
                      color: themeStyles.colorThree,
                      gap: "12px",
                    }}
                  >
                    <img
                      className=""
                      src={FiveStars}
                      alt="five star ratings"
                      style={{
                        width: "100px",
                        height: "16px",
                      }}
                    />

                    <div
                      className=""
                      style={{
                        fontSize: screenWidth >= 576 ? "26px" : "22px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      “I’m obsessed”
                    </div>

                    <div
                      className=""
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      “I'm a testimonial. Click to edit me and add text that
                      says something nice about you and your services.”
                    </div>

                    <div
                      className=""
                      style={{
                        fontSize: "16px",
                        lineHeight: "1.3",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      Jean McDermott, CT
                    </div>
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

export default Reviews;
