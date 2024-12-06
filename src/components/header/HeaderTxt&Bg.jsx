const HeaderTxtBg = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="z-1"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backdropFilter:
          screenWidth >= 576 ? "brightness(70%)" : "brightness(60%)",
      }}
    >
      <div className="container h-100 p-0">
        <div className="row w-100 h-100 mx-auto">
          <div className="col-12 p-0">
            <div
              className="w-100 d-flex flex-column align-items-center align-items-sm-start"
              style={{
                marginTop: screenWidth >= 576 ? "234px" : "180px",
                paddingInline: screenWidth >= 576 ? "0" : "10px",
              }}
            >
              <div
                className="text-center text-sm-start"
                style={{
                  fontSize: screenWidth >= 576 ? "56px" : "30px",
                  color: themeStyles.colorTwo,
                  lineHeight: "1",
                  marginBottom: "14px",
                }}
              >
                Remarkably Cleaner.
                <br /> Amazingly Simpler.
              </div>

              <div
                className="text-center text-sm-start"
                style={{
                  fontSize: screenWidth >= 576 ? "22px" : "16px",
                  color: themeStyles.colorTwo,
                  marginBottom: "18px",
                  maxWidth: screenWidth >= 576 ? "514px" : "255px",
                }}
              >
                Providing spotless cleaning services for busy people since 2035.
                Always on time, always smiling.
              </div>

              <button
                className="btn"
                style={{
                  width: screenWidth >= 576 ? "197px" : "160px",
                  height: screenWidth >= 576 ? "56px" : "40px",
                  border:
                    screenWidth >= 576
                      ? "unset"
                      : `0.76px solid ${themeStyles.textTertiaryColor}`,
                  fontSize: screenWidth >= 576 ? "18px" : "16px",
                  fontWeight: "normal",
                  backgroundColor: themeStyles.otherOtherColor,
                  color: themeStyles.textTertiaryColor,
                  borderRadius: "80px",
                }}
              >
                Book now
              </button>
              <div className="" style={{}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTxtBg;
