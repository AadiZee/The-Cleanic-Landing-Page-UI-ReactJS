import WaterDrop from "../../assets/waterdrop.svg";
import WaterDropDark from "../../assets/waterdropdark.svg";
import Shirt from "../../assets/shirt.svg";
import ShirtDark from "../../assets/shirtdark.svg";
import Key from "../../assets/key.svg";
import KeyDark from "../../assets/keydark.svg";
import House from "../../assets/house.svg";
import HouseDark from "../../assets/housedark.svg";
import RightArrow from "../../assets/up_arrow.svg";
import RightArrowDark from "../../assets/uparrowdark.svg";
import BackgroundOne from "../../assets/background-1.png";

const How = ({ theme, themeStyles, screenWidth }) => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${BackgroundOne})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 50%",
      }}
    >
      <div
        className="row w-100 flex-column mx-auto align-items-center justify-content-center"
        style={{
          padding: screenWidth >= 992 ? "0" : "60px",
          minHeight: "475px",
          backgroundColor: "rgba(76, 91, 92, 0.55)",
          gap: screenWidth >= 576 ? "40px" : "20px",
        }}
      >
        <div
          className="col-12 p-0 text-center"
          style={{
            fontSize: screenWidth >= 576 ? "44px" : "25px",
            color: themeStyles.colorTwo,
            fontWeight: "normal",
            letterSpacing: "0.1px",
          }}
        >
          How It Works
        </div>

        <div className="col-12 p-0">
          <div
            className="row w-100 flex-column flex-lg-row mx-auto align-items-center justify-content-center"
            style={{}}
          >
            <div className="col-auto p-0">
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  maxWidth: "213px",
                }}
              >
                <img
                  className=""
                  src={theme === "light" ? WaterDrop : WaterDropDark}
                  alt=""
                  style={{
                    width: screenWidth >= 576 ? "74px" : "62px",
                    height: screenWidth >= 576 ? "74px" : "62px",
                    marginBottom: "13px",
                  }}
                />

                <div
                  className="text-center"
                  style={{
                    fontSize: "18px",
                    color: themeStyles.colorTwo,
                    fontWeight: "normal",
                    letterSpacing: "0.1px",
                  }}
                >
                  Choose your desired cleaning service
                </div>
              </div>
            </div>
            <div className="col-auto p-0">
              <img
                className=""
                src={theme === "light" ? RightArrow : RightArrowDark}
                alt=""
                style={{
                  width: screenWidth >= 576 ? "42px" : "31px",
                  transform:
                    screenWidth >= 992 ? "rotate(90deg)" : "rotate(180deg)",
                  marginBottom: screenWidth >= 992 ? "62px" : "20px",
                  marginTop: screenWidth >= 992 ? "0" : "20px",
                }}
              />
            </div>
            <div className="col-auto p-0">
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  maxWidth: "213px",
                }}
              >
                <img
                  className=""
                  src={theme === "light" ? Shirt : ShirtDark}
                  alt=""
                  style={{
                    width: screenWidth >= 576 ? "74px" : "62px",
                    height: screenWidth >= 576 ? "74px" : "62px",
                    marginBottom: "13px",
                  }}
                />

                <div
                  className="text-center"
                  style={{
                    fontSize: "18px",
                    color: themeStyles.colorTwo,
                    fontWeight: "normal",
                    letterSpacing: "0.1px",
                  }}
                >
                  Use the Cleanic App for laundry pickup
                </div>
              </div>
            </div>
            <div className="col-auto p-0">
              <img
                className=""
                src={theme === "light" ? RightArrow : RightArrowDark}
                alt=""
                style={{
                  width: screenWidth >= 576 ? "42px" : "31px",
                  transform:
                    screenWidth >= 992 ? "rotate(90deg)" : "rotate(180deg)",
                  marginBottom: screenWidth >= 992 ? "62px" : "20px",
                  marginTop: screenWidth >= 992 ? "0" : "20px",
                }}
              />
            </div>
            <div className="col-auto p-0">
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  maxWidth: "213px",
                }}
              >
                <img
                  className=""
                  src={theme === "light" ? Key : KeyDark}
                  alt=""
                  style={{
                    width: screenWidth >= 576 ? "74px" : "62px",
                    height: screenWidth >= 576 ? "74px" : "62px",
                    marginBottom: "13px",
                  }}
                />

                <div
                  className="text-center"
                  style={{
                    fontSize: "18px",
                    color: themeStyles.colorTwo,
                    fontWeight: "normal",
                    letterSpacing: "0.1px",
                  }}
                >
                  Leave us the keys and we'll take care of the rest
                </div>
              </div>
            </div>
            <div className="col-auto p-0">
              <img
                className=""
                src={theme === "light" ? RightArrow : RightArrowDark}
                alt=""
                style={{
                  width: screenWidth >= 576 ? "42px" : "31px",
                  transform:
                    screenWidth >= 992 ? "rotate(90deg)" : "rotate(180deg)",
                  marginBottom: screenWidth >= 992 ? "62px" : "20px",
                  marginTop: screenWidth >= 992 ? "0" : "20px",
                }}
              />
            </div>
            <div className="col-auto p-0">
              <div
                className="d-flex flex-column align-items-center"
                style={{
                  maxWidth: "213px",
                }}
              >
                <img
                  className=""
                  src={theme === "light" ? House : HouseDark}
                  alt=""
                  style={{
                    width: screenWidth >= 576 ? "74px" : "62px",
                    height: screenWidth >= 576 ? "74px" : "62px",
                    marginBottom: "13px",
                  }}
                />

                <div
                  className="text-center"
                  style={{
                    fontSize: "18px",
                    color: themeStyles.colorTwo,
                    fontWeight: "normal",
                    letterSpacing: "0.1px",
                  }}
                >
                  Welcome back to your home clean home!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
