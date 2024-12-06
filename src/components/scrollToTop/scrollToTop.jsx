import { BsChevronUp } from "react-icons/bs";

const ScrollToTop = ({ themeStyles }) => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <div
      className="p-0"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "10px",
        zIndex: "50",
        width: "auto",
        animation: "fadeIn 1s",
      }}
      onClick={() => scrollToTop()}
    >
      <div
        className="d-inline-flex align-items-center justify-content-center"
        style={{
          backgroundColor: themeStyles.primaryColor,
          border: `1px solid ${themeStyles.tertiaryColor}`,
          padding: "8px",
          borderRadius: "100%",
        }}
      >
        <BsChevronUp
          className=""
          style={{
            height: "29px",
            width: "30px",
            color: themeStyles.tertiaryColor,
          }}
        />
      </div>
    </div>
  );
};

export default ScrollToTop;
