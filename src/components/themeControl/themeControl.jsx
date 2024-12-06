import { IoSunny, IoMoon } from "react-icons/io5";

const ThemeControl = ({
  theme,
  setTheme,
  themeStyles,
  toggleTheme,
  screenWidth,
  scrollTopButton,
}) => {
  return (
    <div
      className="p-0"
      style={{
        position: "fixed",
        bottom: screenWidth >= 576 ? "32px" : scrollTopButton ? "86px" : "32px",
        right: "10px",
        zIndex: "50",
        width: "auto",
        animation: "fadeIn 1s",
        transition: "bottom	0.25s ease-in-out",
        cursor: "pointer",
      }}
      onClick={() => toggleTheme()}
    >
      <div
        className="d-inline-flex align-items-center justify-content-center"
        style={{
          backgroundColor: themeStyles.primaryColor,
          border: `1px solid ${themeStyles.tertiaryColor}`,
          padding: "9px",
          borderRadius: "100%",
        }}
      >
        {theme === "light" ? (
          <IoSunny
            className=""
            style={{
              height: "29px",
              width: "30px",
              color: themeStyles.tertiaryColor,
            }}
          />
        ) : (
          <IoMoon
            className=""
            style={{
              height: "29px",
              width: "30px",
              color: themeStyles.tertiaryColor,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeControl;
