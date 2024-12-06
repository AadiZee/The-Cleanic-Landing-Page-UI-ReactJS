import Background from "../../assets/background.png";

const HeaderImage = ({ screenWidth }) => {
  return (
    <>
      <img
        className=""
        src={Background}
        alt="masthead"
        style={{
          width: "100%",
          height: screenWidth >= 576 ? "942px" : "calc(100vh - 92px)",
          objectFit: "cover",
          objectPosition: "50% 50%",
          marginTop: screenWidth >= 576 ? "0" : "92px",
        }}
      />
    </>
  );
};

export default HeaderImage;
