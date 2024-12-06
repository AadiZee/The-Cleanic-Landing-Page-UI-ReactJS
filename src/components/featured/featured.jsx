import LogoOne from "../../assets/logo-1.png";
import LogoTwo from "../../assets/logo-2.png";
import LogoThree from "../../assets/logo-3.png";
import LogoFour from "../../assets/logo-4.png";
import LogoFive from "../../assets/logo-5.png";

const Featured = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="w-100"
      style={{
        padding: screenWidth >= 576 ? "55px" : "70px 20px 35px 20px",
        backgroundColor: themeStyles.mainColor,
        marginTop: screenWidth >= 576 ? "100px" : "0",
      }}
    >
      <div
        className="text-center"
        style={{
          fontSize: screenWidth >= 576 ? "44px" : "25px",
          lineHeight: "1.3",
          fontWeight: "normal",
          color: themeStyles.textTertiaryColor,
          marginBottom: screenWidth >= 576 ? "25px" : "20px",
          letterSpacing: "0.1px",
        }}
      >
        Featured In
      </div>
      <div className="row w-100 mx-auto align-items-center justify-content-center">
        <div className="col-4 col-lg p-0">
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="w-100"
              src={LogoOne}
              alt="section img"
              style={{
                height: "53px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="col-4 col-lg p-0">
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="w-100"
              src={LogoTwo}
              alt="section img"
              style={{
                height: "53px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="col-4 col-lg p-0">
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="w-100"
              src={LogoThree}
              alt="section img"
              style={{
                height: "53px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="col-4 col-lg p-0">
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="w-100"
              src={LogoFour}
              alt="section img"
              style={{
                height: "53px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <div className="col-4 col-lg p-0">
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="w-100"
              src={LogoFive}
              alt="section img"
              style={{
                height: "53px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
