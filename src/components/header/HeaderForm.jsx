const HeaderForm = ({ themeStyles, screenWidth }) => {
  return (
    <div
      className="z-2"
      style={{
        position: "absolute",
        bottom: "-180px	",
        right: "0",
        width: "100%",
        paddingInline: screenWidth >= 576 ? "" : "12px",
        top: screenWidth >= 576 ? "65%" : "102%",
      }}
    >
      <div className="container p-0">
        <div className="row w-100 mx-auto justify-content-end">
          <div className="col-auto p-0">
            <div
              className=""
              style={{
                minHeight: "506px",
                width: "745px",
                maxWidth: "100%",
                borderRadius: "10px",
                backgroundColor: themeStyles.mainColor,
                padding: "24px",
              }}
            >
              <div
                className="row w-100 mx-auto align-items-center flex-column justify-content-between"
                style={{
                  gap: "24px",
                }}
              >
                <div className="col-auto p-0">
                  <div
                    className="text-center"
                    style={{
                      fontSize: "30px",
                      color: "#000000",
                      fontWeight: "normal",
                      fontKerning: "auto",
                    }}
                  >
                    Get a Free Estimate
                  </div>
                </div>
                <div className="col-auto p-0">
                  <div
                    style={{
                      minHeight: "36px",
                    }}
                  >
                    <div
                      className="text-center"
                      style={{
                        fontSize: "18px",
                        color: "#000000",
                        fontWeight: "normal",
                        fontKerning: "auto",
                      }}
                    >
                      Contact us
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div
                    className="w-100"
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        screenWidth >= 768
                          ? "1fr 1fr 1fr"
                          : screenWidth >= 576
                          ? "1fr 1fr"
                          : "1fr",
                      rowGap: "24px",
                      columnGap: "24px",
                    }}
                  >
                    <div className="">
                      <div
                        className=""
                        style={{
                          fontSize: "16px",
                          color: "#000000",
                          marginBottom: "8px",
                          lineHeight: "22.4px",
                        }}
                      >
                        First name{" "}
                        <sup style={{ fontSize: "18px", top: "-1px" }}>*</sup>
                      </div>
                      <div
                        className="w-100"
                        style={{
                          paddingInlineEnd: "12px",
                          borderRadius: "8px",
                          border: "1px solid #000000",
                        }}
                      >
                        <input
                          className=""
                          type="text"
                          style={{
                            outline: "none",
                            border: "none",
                            backgroundColor: "transparent",
                            padding: "8px 12px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div
                        className=""
                        style={{
                          fontSize: "16px",
                          color: "#000000",
                          marginBottom: "8px",
                          lineHeight: "22.4px",
                        }}
                      >
                        Last name{" "}
                        <sup style={{ fontSize: "18px", top: "-1px" }}>*</sup>
                      </div>
                      <div
                        className="w-100"
                        style={{
                          paddingInlineEnd: "12px",
                          borderRadius: "8px",
                          border: "1px solid #000000",
                        }}
                      >
                        <input
                          className=""
                          type="text"
                          style={{
                            outline: "none",
                            border: "none",
                            backgroundColor: "transparent",
                            padding: "8px 12px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div
                        className=""
                        style={{
                          fontSize: "16px",
                          color: "#000000",
                          marginBottom: "8px",
                          lineHeight: "22.4px",
                        }}
                      >
                        Email{" "}
                        <sup style={{ fontSize: "18px", top: "-1px" }}>*</sup>
                      </div>
                      <div
                        className="w-100"
                        style={{
                          paddingInlineEnd: "12px",
                          borderRadius: "8px",
                          border: "1px solid #000000",
                        }}
                      >
                        <input
                          className=""
                          type="text"
                          style={{
                            outline: "none",
                            border: "none",
                            backgroundColor: "transparent",
                            padding: "8px 12px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div
                        className=""
                        style={{
                          fontSize: "16px",
                          color: "#000000",
                          marginBottom: "8px",
                          lineHeight: "22.4px",
                        }}
                      >
                        Phone number{" "}
                        <sup style={{ fontSize: "18px", top: "-1px" }}>*</sup>
                      </div>
                      <div
                        className="w-100"
                        style={{
                          paddingInlineEnd: "12px",
                          borderRadius: "8px",
                          border: "1px solid #000000",
                        }}
                      >
                        <input
                          className=""
                          type="text"
                          style={{
                            outline: "none",
                            border: "none",
                            backgroundColor: "transparent",
                            padding: "8px 12px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div
                        className=""
                        style={{
                          fontSize: "16px",
                          color: "#000000",
                          marginBottom: "8px",
                          lineHeight: "22.4px",
                        }}
                      >
                        Address{" "}
                        <sup style={{ fontSize: "18px", top: "-1px" }}>*</sup>
                      </div>
                      <div
                        className="w-100"
                        style={{
                          paddingInlineEnd: "12px",
                          borderRadius: "8px",
                          border: "1px solid #000000",
                        }}
                      >
                        <input
                          className=""
                          type="text"
                          style={{
                            outline: "none",
                            border: "none",
                            backgroundColor: "transparent",
                            padding: "8px 12px",
                          }}
                        />
                      </div>
                    </div>
                    <div className="">
                      <div
                        className=""
                        style={{
                          fontSize: "16px",
                          color: "#000000",
                          marginBottom: "8px",
                          lineHeight: "22.4px",
                        }}
                      >
                        City{" "}
                        <sup style={{ fontSize: "18px", top: "-1px" }}>*</sup>
                      </div>
                      <div
                        className="w-100"
                        style={{
                          paddingInlineEnd: "12px",
                          borderRadius: "8px",
                          border: "1px solid #000000",
                        }}
                      >
                        <input
                          className=""
                          type="text"
                          style={{
                            outline: "none",
                            border: "none",
                            backgroundColor: "transparent",
                            padding: "8px 12px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div
                    className=""
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(12, 1fr)",
                      columnGap: screenWidth >= 576 ? "24px" : "0",
                      rowGap: screenWidth >= 576 ? "0" : "24px",
                    }}
                  >
                    <div
                      className=""
                      style={{
                        gridColumn:
                          screenWidth >= 768
                            ? "1 / span 4"
                            : screenWidth >= 576
                            ? "1 / span 6"
                            : "1 / span 12",
                      }}
                    >
                      <div
                        className=""
                        style={{
                          fontSize: "16px",
                          color: "#000000",
                          marginBottom: "8px",
                          lineHeight: "22.4px",
                        }}
                      >
                        Number of rooms{" "}
                        <sup style={{ fontSize: "18px", top: "-1px" }}>*</sup>
                      </div>
                      <div
                        className="w-100"
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #000000",
                        }}
                      >
                        <div className="dropdown w-100">
                          <button
                            className="btn dropdown-toggle w-100"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{
                              padding: "8px 12px",
                              outline: "none",
                              border: "none",
                              borderRadius: "8px",
                              backgroundColor: "transparent",
                              boxShadow: "none",
                              height: "40px",
                            }}
                          ></button>
                          <ul
                            className="dropdown-menu w-100"
                            style={{
                              backgroundColor: themeStyles.mainColor,
                            }}
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                2 bedroom
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                3 bedroom
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                4 bedroom
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className=""
                      style={{
                        gridColumn:
                          screenWidth >= 768
                            ? "5 / span 8"
                            : screenWidth >= 576
                            ? "7 / span 6"
                            : "1 / span 12",
                      }}
                    >
                      <div
                        className=""
                        style={{
                          fontSize: "16px",
                          color: "#000000",
                          marginBottom: "8px",
                          lineHeight: "22.4px",
                        }}
                      >
                        Choose your service{" "}
                        <sup style={{ fontSize: "18px", top: "-1px" }}>*</sup>
                      </div>
                      <div
                        className="w-100"
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #000000",
                        }}
                      >
                        <div className="dropdown w-100">
                          <button
                            className="btn dropdown-toggle w-100"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{
                              padding: "8px 12px",
                              outline: "none",
                              border: "none",
                              borderRadius: "8px",
                              backgroundColor: "transparent",
                              boxShadow: "none",
                              height: "40px",
                            }}
                          ></button>
                          <ul
                            className="dropdown-menu w-100"
                            style={{
                              backgroundColor: themeStyles.mainColor,
                            }}
                          >
                            <li>
                              <a className="dropdown-item" href="#">
                                Deep cleaning
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Laundry
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Moving in/out
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-auto p-0">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: themeStyles.colorThree,
                      color: themeStyles.otherOtherColor,
                      height: "40px",
                      width: screenWidth >= 576 ? "217px" : "100%",
                      fontSize: "16px",
                      borderRadius: "80px",
                      lineHeight: "1.3",
                      whiteSpace: "normal",
                    }}
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
