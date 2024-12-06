import { useState, useEffect } from "react";
import "./App.css";
import BackgroundThree from "./assets/background-3.png";
import ThemeControl from "./components/themeControl/themeControl";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Navbar from "./components/nav/navbar";
import Header from "./components/header/header";
import Reviews from "./components/reviews/reviews";
import Services from "./components/services/services";
import Featured from "./components/featured/featured";
import BeforeAfter from "./components/beforeafter/beforeafter";
import How from "./components/how/how";
import Plans from "./components/plans/plans";
import Why from "./components/why/why";
import CopyRight from "./components/copyright/copyright";
import Footer from "./components/footer/footer";

function App() {
  const [theme, setTheme] = useState(() => "light");

  const [screenWidth, setScreenWidth] = useState(0);
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [scrollTopButton, setScrollTopButton] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeStyles =
    theme === "light"
      ? {
          primaryColor: "rgb(255, 253, 242)",
          secondaryColor: "rgb(255, 249, 175)",
          tertiaryColor: "rgb(10, 35, 35)",
          mainColor: "rgb(255, 249, 175)",
          sectionColor: "rgb(76, 91, 92)",
          sectionTextColor: "rgb(255, 253, 242)",
          otherColor: "rgb(10, 35, 35)",
          otherOtherColor: "rgb(255, 253, 242)",
          colorOne: "rgb(255, 253, 242)",
          colorTwo: "rgb(255, 253, 242)",
          colorThree: "rgb(10, 35, 35)",
          textPrimaryColor: "rgb(10, 35, 35)",
          textSecondaryColor: "rgb(255, 253, 242)",
          textTertiaryColor: "rgb(10, 35, 35)",
          textMainColor: "rgb(255, 253, 242)",
        }
      : {
          primaryColor: "rgb(27, 26, 85)",
          secondaryColor: "rgb(83, 92, 145)",
          tertiaryColor: "rgb(146, 144, 195)",
          mainColor: "rgb(146, 144, 195)",
          sectionColor: "rgb(83, 92, 145)",
          sectionTextColor: "rgb(7, 15, 43)",
          otherColor: "rgb(27, 26, 85)",
          otherOtherColor: "rgb(146, 144, 195)",
          colorOne: "rgb(7, 15, 43)",
          colorTwo: "whitesmoke",
          colorThree: "rgb(7, 15, 43)",
          textPrimaryColor: "rgb(255, 253, 242)",
          textSecondaryColor: "rgb(255, 253, 242)",
          textTertiaryColor: "rgb(7, 15, 43)",
          textMainColor: "rgb(7, 15, 43)",
        };

  useEffect(() => {
    const resizeWindow = () => {
      setScreenWidth(window?.outerWidth);
    };
    const scrollWindow = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setScrollTopButton(true);
      } else {
        setScrollTopButton(false);
      }
    };

    resizeWindow();
    scrollWindow();

    window.addEventListener("resize", resizeWindow);
    window.addEventListener("scroll", scrollWindow);

    return () => {
      window.removeEventListener("resize", resizeWindow);
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  useEffect(() => {
    if (navbarToggle) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navbarToggle]);

  return (
    <>
      <ThemeControl
        theme={theme}
        setTheme={setTheme}
        themeStyles={themeStyles}
        toggleTheme={toggleTheme}
        screenWidth={screenWidth}
        scrollTopButton={scrollTopButton}
      />

      {screenWidth <= 575 && scrollTopButton && (
        <ScrollToTop themeStyles={themeStyles} />
      )}

      <div
        className=""
        style={{
          position: "relative",
        }}
      >
        <Navbar
          theme={theme}
          themeStyles={themeStyles}
          screenWidth={screenWidth}
          navbarToggle={navbarToggle}
          setNavbarToggle={setNavbarToggle}
        />

        <Header themeStyles={themeStyles} screenWidth={screenWidth} />
      </div>

      <Reviews themeStyles={themeStyles} screenWidth={screenWidth} />

      <Services
        theme={theme}
        themeStyles={themeStyles}
        screenWidth={screenWidth}
      />

      <Featured themeStyles={themeStyles} screenWidth={screenWidth} />

      <BeforeAfter themeStyles={themeStyles} screenWidth={screenWidth} />

      <How theme={theme} themeStyles={themeStyles} screenWidth={screenWidth} />

      <Plans themeStyles={themeStyles} screenWidth={screenWidth} />

      <Why themeStyles={themeStyles} screenWidth={screenWidth} />

      {/* BOTTOM FULL WIDTH IMAGE */}

      <img
        className="w-100"
        src={BackgroundThree}
        alt="background three"
        style={{
          height: screenWidth >= 576 ? "728px" : "230px",
          maxWidth: "100%",
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
      />

      {/* FOOTER */}

      <Footer
        theme={theme}
        themeStyles={themeStyles}
        screenWidth={screenWidth}
      />
      <CopyRight themeStyles={themeStyles} screenWidth={screenWidth} />
    </>
  );
}

export default App;
