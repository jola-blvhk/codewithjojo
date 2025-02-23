"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var provider_1 = require("./provider");
var react_1 = require("react");
var header_1 = require("@/components/header");
var animated_wrapper_1 = require("@/components/animated-wrapper");
var poppins = google_1.Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});
exports.metadata = {
    title: "Jola | Frontend Developer Portfolio",
    description: "Explore my frontend development portfolio showcasing modern, responsive, and user-friendly web applications. Passionate about crafting intuitive UI/UX with React, TypeScript, and cutting-edge technologies. Let's build something amazing!",
    icons: {
        icon: "/logo.ico"
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("html", { lang: "en" },
        react_1["default"].createElement("body", { className: " " + poppins.variable + " antialiased" },
            react_1["default"].createElement(provider_1["default"], { attribute: "class", defaultTheme: "system", enableSystem: true },
                react_1["default"].createElement(animated_wrapper_1["default"], null,
                    react_1["default"].createElement(header_1["default"], null),
                    children)))));
}
exports["default"] = RootLayout;
