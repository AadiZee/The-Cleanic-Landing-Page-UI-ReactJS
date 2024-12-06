import { useState } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import BeforeOne from "../../assets/before-1.png";
import BeforeTwo from "../../assets/before-2.png";
import BeforeThree from "../../assets/before-3.png";
import AfterOne from "../../assets/after-1.png";
import AfterTwo from "../../assets/after-2.png";
import AfterThree from "../../assets/after-3.png";

const BeforeAfter = ({ themeStyles, screenWidth }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const beforeImages = [BeforeOne, BeforeTwo, BeforeThree];
  const afterImages = [AfterOne, AfterTwo, AfterThree];
  const imageTypeText = [
    "Window cleaning",
    "Carpet cleaning",
    "Couch cleaning",
  ];

  const handleImageSwipeLeft = () => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(2);
    } else {
      setActiveImageIndex((prev) => prev - 1);
    }
  };

  const handleImageSwipeRight = () => {
    if (activeImageIndex === 2) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex((prev) => prev + 1);
    }
  };

  return (
    <div
      className="row w-100 mx-auto flex-column align-items-center"
      style={{
        margin: "100px 0 80px 0",
      }}
    >
      <div className="col-auto p-0">
        <div
          className="text-center w-100"
          style={{
            fontSize: screenWidth >= 576 ? "44px" : "26px",
            lineHeight: "1",
            color: themeStyles.tertiaryColor,
            fontWeight: "normal",
            marginBottom: screenWidth >= 576 ? "24px" : "44px",
          }}
        >
          Before & After
        </div>

        <div
          className="text-center w-100"
          style={{
            fontSize: screenWidth >= 576 ? "22px" : "17px",
            lineHeight: "1",
            color: themeStyles.tertiaryColor,
            fontWeight: "normal",
            marginBottom: screenWidth >= 576 ? "30px" : "16px",
          }}
        >
          {imageTypeText[activeImageIndex]}
        </div>

        <div
          className="row w-100 mx-auto"
          style={{
            paddingInline: screenWidth >= 576 ? "100px" : "50px",
            gap: screenWidth >= 576 ? "25px" : "10px",
            position: "relative",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-between p-0"
            style={{
              position: "absolute",
              top: "calc(50% - 20px)",
              left: screenWidth >= 576 ? "0" : "5px",
              width: screenWidth >= 576 ? "100%" : "calc(100% - 10px)",
            }}
          >
            <HiChevronLeft
              className=""
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                color: themeStyles.tertiaryColor,
              }}
              onClick={() => handleImageSwipeLeft()}
            />
            <HiChevronRight
              className=""
              style={{
                height: "30px",
                width: "30px",
                cursor: "pointer",
                color: themeStyles.tertiaryColor,
              }}
              onClick={() => handleImageSwipeRight()}
            />
          </div>
          <div className="col-12 col-lg p-0">
            <img
              className=""
              src={beforeImages[activeImageIndex]}
              alt="section img one"
              style={{
                width: "100%",
                aspectRatio: "1/1",
                // minHeight: '530px',
                objectFit: "cover",
                borderRadius: "10px",
                animation: "fadeIn 1s",
              }}
            />
            <div
              className="w-100 text-center"
              style={{
                fontSize: screenWidth >= 576 ? "22px" : "17px",
                color: themeStyles.tertiaryColor,
                fontWeight: "normal",
                letterSpacing: "0.1px",
                marginTop: screenWidth >= 576 ? "5px" : "10px",
              }}
            >
              Before
            </div>
          </div>
          <div className="col-12 col-lg p-0">
            <img
              className=""
              src={afterImages[activeImageIndex]}
              alt="section img one"
              style={{
                width: "100%",
                aspectRatio: "1/1",
                // minHeight: '530px',
                objectFit: "cover",
                borderRadius: "10px",
                animation: "fadeIn 1s",
              }}
            />
            <div
              className="w-100 text-center"
              style={{
                fontSize: screenWidth >= 576 ? "22px" : "17px",
                color: themeStyles.tertiaryColor,
                fontWeight: "normal",
                letterSpacing: "0.1px",
                marginTop: screenWidth >= 576 ? "5px" : "10px",
              }}
            >
              After
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
