import HeaderForm from "./HeaderForm";
import HeaderImage from "./HeaderImage";
import HeaderTxtBg from "./HeaderTxt&Bg";

const Header = ({ themeStyles, screenWidth }) => {
  return (
    <>
      <HeaderImage screenWidth={screenWidth} />
      <HeaderTxtBg screenWidth={screenWidth} themeStyles={themeStyles} />
      <HeaderForm screenWidth={screenWidth} themeStyles={themeStyles} />
    </>
  );
};

export default Header;
