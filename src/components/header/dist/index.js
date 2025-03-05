"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var logo_png_1 = require("../../../public/assets/logo.png");
var menu_png_1 = require("../../../public/assets/menu.png");
var link_1 = require("next/link");
var theme_toggle_1 = require("../theme-toggle");
var navigation_1 = require("next/navigation");
var hand_drawn_text_1 = require("./hand-drawn-text");
var animated_theme_toggle_1 = require("../animated-theme-toggle");
function Header() {
    var pathname = navigation_1.usePathname();
    var _a = react_1.useState(false), dropNav = _a[0], setDropNav = _a[1];
    var navLinks = [
        { title: "Projects", link: "/" },
        { title: "About me", link: "/about-me" },
        { title: "Resume", link: "https://drive.google.com/file/d/1ijlC1vTCeC3n25S8leXm7IJcsM79PbRn/view?usp=sharing" },
    ];
    return (react_1["default"].createElement("header", { className: "paddingX sticky top-0 z-50 bg-white dark:bg-purple-100 backdrop-blur-lg backdrop-filter dark:backdrop-filter-dark pt-6 md:pt-8 pb-4 md:pb-0 " },
        react_1["default"].createElement("div", { className: "maxWidthSection flex justify-between items-center" },
            react_1["default"].createElement(link_1["default"], { href: "/" },
                react_1["default"].createElement(image_1["default"], { src: logo_png_1["default"], width: 100, height: 100, alt: "logo", className: "w-[50px] h-auto md:w-[80px]" })),
            react_1["default"].createElement("div", { className: "hidden md:block" },
                react_1["default"].createElement("ul", { className: "flex gap-[51px] items-center" },
                    navLinks.map(function (link, index) {
                        var isActive = pathname === link.link ||
                            (link.link === "/" && pathname.startsWith("/project-details"));
                        return (react_1["default"].createElement(link_1["default"], { key: index, href: link.link, className: "grid place-items-center" },
                            react_1["default"].createElement("div", { className: "relative" },
                                react_1["default"].createElement("li", { className: (!isActive && "hover:underline underline-offset-8") + " text-lg text-center py-5" }, isActive ? (react_1["default"].createElement(hand_drawn_text_1["default"], { text: link.title })) : (link.title)))));
                    }),
                    react_1["default"].createElement(theme_toggle_1["default"], null))),
            react_1["default"].createElement("div", { className: "md:hidden" },
                react_1["default"].createElement("button", { onClick: function () { return setDropNav(!dropNav); } },
                    react_1["default"].createElement(image_1["default"], { src: menu_png_1["default"], width: 28, height: 28, alt: "menu", className: "w-[28px] h-auto" })))),
        dropNav && (react_1["default"].createElement("div", { className: "fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-black/10 dark:bg-black/10 z-40 md:hidden", onClick: function () { return setDropNav(false); } })),
        dropNav && (react_1["default"].createElement("div", { className: "absolute top-[72px] left-0 w-full bg-[#FAFAFA] dark:bg-purple-200 drop-shadow-lg shadow-gray-100 dark:shadow-purple-100/10 rounded-b-2xl shadow-lg md:hidden transition-all z-50" },
            react_1["default"].createElement("ul", { className: "flex flex-col items-center gap-5 py-6" },
                navLinks.map(function (link, index) {
                    var isActive = pathname === link.link ||
                        (link.link === "/" && pathname.startsWith("/project-details"));
                    return (react_1["default"].createElement("li", { key: index },
                        react_1["default"].createElement(link_1["default"], { href: link.link, className: "text-lg text-center block py-2 hover:underline", onClick: function () { return setDropNav(false); } }, isActive ? (react_1["default"].createElement(hand_drawn_text_1["default"], { text: link.title })) : (link.title))));
                }),
                react_1["default"].createElement(animated_theme_toggle_1["default"], null))))));
}
exports["default"] = Header;
