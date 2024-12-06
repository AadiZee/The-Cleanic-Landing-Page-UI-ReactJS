const CopyRight = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="col-12"
      style={{
        backgroundColor: themeStyles.textMainColor,
        padding: screenWidth >= 576 ? "17px" : "20px 30px",
      }}
    >
      <div
        className="text-center w-100"
        style={{
          fontSize: screenWidth >= 576 ? "16px" : "14px",
          color: themeStyles.tertiaryColor,
          lineHeight: screenWidth >= 576 ? "1" : "1.3",
        }}
      >
        © 2035 by The Cleanic. Powered and secured by{" "}
        <span style={{ textDecoration: "underline" }}>Wix</span>
      </div>
    </div>
  );
};

export default CopyRight;
