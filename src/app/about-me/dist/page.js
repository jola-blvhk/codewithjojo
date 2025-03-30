"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var profile_picture_svg_1 = require("../../../public/assets/profile-picture.svg");
var small_profile_picture_svg_1 = require("../../../public/assets/small-profile-picture.svg");
var md_1 = require("react-icons/md");
var AboutMe = function () {
    var _a = react_1.useState(false), isSmallScreen = _a[0], setIsSmallScreen = _a[1];
    react_1.useEffect(function () {
        var checkScreenSize = function () {
            setIsSmallScreen(window.innerWidth < 640);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return function () { return window.removeEventListener("resize", checkScreenSize); };
    }, []);
    return (react_1["default"].createElement("section", { className: "paddingX py-4 md:py-9" },
        react_1["default"].createElement("section", { className: "maxWidthSection grid md:flex gap-4 md:gap-8 lg:gap-10" },
            react_1["default"].createElement("div", { className: "flex gap-5 items-center md:items-start" },
                react_1["default"].createElement("div", { className: " w-[60px] sm:w-[90px] md:w-[120px] h-auto md:h-[120px] " },
                    react_1["default"].createElement(image_1["default"], { src: isSmallScreen ? small_profile_picture_svg_1["default"] : profile_picture_svg_1["default"], width: 50, height: 50, alt: "Jojo", quality: 100, className: "inline md:block w-full h-auto rounded-xl" })),
                react_1["default"].createElement("h1", { className: "md:hidden font-bold mt-3 md:mt-4  text-3xl  sm:text-4xl md:text-5xl xl:text-6xl leading-[70px] sm:leading-[80px] lg:leading-[96px] xl:leading-[96px] " }, "Hi, I\u2019m Oluremi !")),
            react_1["default"].createElement("section", { className: "lg:w-[70%]" },
                react_1["default"].createElement("h1", { className: "hidden md:block font-bold mt-9  text-3xl  sm:text-4xl md:text-5xl xl:text-6xl leading-[70px]  " }, "Hi, I\u2019m Oluremi !"),
                react_1["default"].createElement("div", { className: "md:mt-14  space-y-4 text-sm sm:text-base  md:text-lg md:leading-8" },
                    react_1["default"].createElement("p", { className: "" },
                        "I craft ",
                        react_1["default"].createElement("strong", null, " beautiful, responsive, and user-friendly"),
                        " ",
                        "web experiences using modern front-end technologies. My passion lies in transforming ideas into sleek, interactive, and functional web applications\u2014ensuring every pixel and interaction feels just right!\uD83D\uDE0A"),
                    react_1["default"].createElement("p", null,
                        "Currently, I\u2019m learning ",
                        react_1["default"].createElement("strong", null, "Java"),
                        " to strengthen my understanding of object-oriented programming and backend development, allowing me to build more robust and scalable applications."),
                    react_1["default"].createElement("p", null,
                        "I\u2019m also working on a",
                        react_1["default"].createElement("strong", null, " mobile app called Jojo-AI"),
                        ", where I\u2019m exploring",
                        react_1["default"].createElement("strong", null, " text streaming"),
                        ", a technology used in AI-powered applications (like OpenAI\u2019s models) to process and display text incrementally for a smoother user experience.",
                        react_1["default"].createElement("br", null),
                        react_1["default"].createElement("strong", null, "Jojo-AI"),
                        " is an app where users type a story prompt (e.g., \"A spaceship lands in a medieval kingdom\"), and the AI generates a story in real-time, streaming each paragraph as it\u2019s created.")),
                react_1["default"].createElement("div", { className: "mt-6" },
                    react_1["default"].createElement("h2", { className: "text-base sm:text-lg md:text-xl font-semibold" }, "What I Bring to the Table :"),
                    react_1["default"].createElement("ul", { className: "mt-2 md:mt-4 space-y-2" }, [
                        "Pixel-perfect, responsive UI",
                        "Seamless user experiences",
                        "Performance-optimized web apps",
                        "Clean, maintainable code",
                    ].map(function (skill, index) { return (react_1["default"].createElement("li", { key: index, className: "flex items-center gap-2 text-sm sm:text-base md:text-lg" },
                        react_1["default"].createElement(md_1.MdOutlineCheckroom, { className: "text-pink-100" }),
                        skill)); })),
                    react_1["default"].createElement("p", { className: "mt-4 text-xs sm:text-sm" },
                        "When I\u2019m not coding, you\u2019ll find me immersed in fantasy books, exploring new worlds and epic adventures.",
                        " ",
                        react_1["default"].createElement("em", null, "I Highly recommend \"Throne of Glass\" series by Sarah J. Maas!"))),
                react_1["default"].createElement("a", { href: "https://drive.google.com/file/d/1ijlC1vTCeC3n25S8leXm7IJcsM79PbRn/view?usp=sharing", target: "_blank", rel: "noopener noreferrer" },
                    " ",
                    react_1["default"].createElement("button", { className: " text-white mt-4 sm:mt-6 py-2 px-[22.3px]  sm:py-5 sm:px-12 rounded-[50px] text-sm md:text-base lg:text-lg bg-black" }, "View Resume"))))));
};
exports["default"] = AboutMe;
