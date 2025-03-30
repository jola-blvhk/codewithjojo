"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var green_light_svg_1 = require("../../../../public/assets/green-light.svg");
var green_dark_svg_1 = require("../../../../public/assets/green-dark.svg");
var profile_picture_svg_1 = require("../../../../public/assets/profile-picture.svg");
var small_profile_picture_svg_1 = require("../../../../public/assets/small-profile-picture.svg");
var animated_skills_1 = require("./animated-skills");
var animated_arrows_1 = require("./animated-arrows");
var next_themes_1 = require("next-themes");
var framer_motion_1 = require("framer-motion");
var HeroSection = function () {
    var theme = next_themes_1.useTheme().theme;
    var _a = react_1.useState(false), mounted = _a[0], setMounted = _a[1];
    var _b = react_1.useState(false), isSmallScreen = _b[0], setIsSmallScreen = _b[1];
    react_1.useEffect(function () {
        var checkScreenSize = function () {
            setIsSmallScreen(window.innerWidth < 640);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return function () { return window.removeEventListener("resize", checkScreenSize); };
    }, []);
    react_1.useEffect(function () {
        setMounted(true);
    }, []);
    // Prevents hydration issues
    if (!mounted)
        return null;
    return (react_1["default"].createElement("div", { className: "relative pt-4 pb-6 md:py-9 lg:flex justify-between items-center" },
        react_1["default"].createElement("div", { className: "sm: w-full  lg:w-[95%] xl:w-[60%]" },
            react_1["default"].createElement("div", { className: " pl-1.5 pr-2 pb-1 pt-1.5 w-fit  md:pl-3 md:pr-4 text-xs md:text-base  md:py-3  gap-1.5 md:gap-3 border border-gray-100 rounded-[40px] dark:bg-purple-200 flex items-center" },
                react_1["default"].createElement(image_1["default"], { src: theme === "dark" ? green_dark_svg_1["default"] : green_light_svg_1["default"], alt: "green-light", width: 20, height: 20, className: "w-3 h-auto md:w-6  " }),
                react_1["default"].createElement("p", null, "Open to work")),
            react_1["default"].createElement("h1", { className: "font-bold mt-3 md:mt-4  text-3xl  sm:text-4xl md:text-5xl xl:text-6xl leading-[70px] sm:leading-[80px] lg:leading-[96px] xl:leading-[96px] " },
                react_1["default"].createElement(image_1["default"], { src: isSmallScreen ? small_profile_picture_svg_1["default"] : profile_picture_svg_1["default"], width: 50, height: 50, alt: "Jojo", quality: 100, className: "inline mr-5 sm:mr-7  md:mr-10  w-[60px] sm:w-[90px] md:w-[120px] h-auto rounded-xl" }),
                " ",
                "Hi, I\u2019m Oluremi !",
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("span", { className: "text-gray-100" }, "a"),
                " ",
                react_1["default"].createElement("span", { className: "text-pink-100" }, "Front-end Developer")),
            react_1["default"].createElement("p", { className: "lg:w-[80%] sm:mt-3 leading-7 text-sm sm:text-base sm:leading-9   md:leading-9 lg:leading-10 lg:text-lg md:text-xl" }, "I craft visually appealing and user-friendly web experiences with clean, efficient code. Passionate about turning ideas into interactive, responsive, and accessible digital solutions."),
            react_1["default"].createElement(framer_motion_1.motion.button, { onClick: function () {
                    return (window.location.href = "mailto:awujoolabello@gmail.com");
                }, className: "text-white mt-2 sm:mt-3 py-2 px-[22.3px] sm:py-5 sm:px-12 rounded-[50px] text-sm md:text-base lg:text-lg bg-black transition-all duration-300 ease-in-out focus:outline-none", whileHover: { scale: 1.05, backgroundColor: "#1a1a1a" }, whileTap: { scale: 0.95 }, whileFocus: { boxShadow: "0 0 12px rgba(255,255,255,0.5)" } }, "Send a mail")),
        react_1["default"].createElement("div", { className: "  sm:mt-10 md:mt-16 relative right-12 sm:left-20 md:left-40  lg:left-0 lg:right-0 w-fit gap-8 flex scale-75 sm:scale-100 md:scale-125  lg:scale-95 xl:scale-100 xl:relative xl:right-0 xl:left-0  items-center" },
            react_1["default"].createElement("div", { className: "relative top-6" },
                react_1["default"].createElement(animated_arrows_1["default"], null)),
            react_1["default"].createElement(animated_skills_1["default"], null))));
};
exports["default"] = HeroSection;
