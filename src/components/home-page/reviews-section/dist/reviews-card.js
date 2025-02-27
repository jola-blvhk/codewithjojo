"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var avatar_1 = require("@/components/avatar");
var ReviewCard = function (_a) {
    var name = _a.name, role = _a.role, imageSrc = _a.imageSrc, text = _a.text, company = _a.company;
    return (React.createElement("div", { className: "relative px-7 py-8 md:py-10 mx-4 sm:mx-0  max-w-md rounded-lg " },
        React.createElement("div", { className: "absolute top-0 left-0 w-10 h-10" },
            React.createElement("svg", { width: "49", height: "49", viewBox: "0 0 49 59", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M9.77463 9.98464C20.7368 -0.986742 37.2179 -2.29259 46.5864 7.06794C55.9548 16.4285 29.0008 7.27035 18.0387 18.2417C7.07655 29.2131 16.2574 56.1593 6.88895 46.7988C-2.47947 37.4383 -1.18751 20.956 9.77463 9.98464Z", className: " fill-[#E6E6E6] dark:fill-purple-200 shadow-lg" }))),
        React.createElement("div", { className: "absolute top-0 right-0 w-10 h-10  " },
            React.createElement("svg", { width: "49", height: "59", viewBox: "0 0 49 71", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M37.9391 14.9609C46.0271 28.1943 43.4233 44.5208 32.1233 51.4272C20.8234 58.3335 36.0592 34.2865 27.9712 21.0531C19.8831 7.81969 -8.46598 10.4111 2.83398 3.50472C14.134 -3.40162 29.851 1.72748 37.9391 14.9609Z", className: " fill-[#E6E6E6] dark:fill-purple-200 shadow-lg" }))),
        React.createElement("div", { className: "absolute bottom-0 left-0 w-10 h-10 " },
            React.createElement("svg", { width: "49", height: "49", viewBox: "0 0 49 59", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M11.1084 39.0726C-0.343723 28.6137 -2.3876 12.2077 6.54325 2.42881C15.4741 -7.35009 7.53434 19.9876 18.9864 30.4465C30.4385 40.9054 56.9458 30.525 48.0149 40.3039C39.0841 50.0828 22.5605 49.5316 11.1084 39.0726Z", className: " fill-[#E6E6E6] dark:fill-purple-200 shadow-lg" }))),
        React.createElement("div", { className: "absolute bottom-0 right-0 w-12 h-12  " },
            React.createElement("svg", { width: "49", height: "49", viewBox: "0 0 49 59", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M38.2284 38.2516C29.6588 51.1784 13.7636 55.7255 2.72543 48.408C-8.3127 41.0905 19.9218 44.7234 28.4914 31.7966C37.061 18.8699 22.7205 -5.72157 33.7587 1.59598C44.7968 8.91352 46.798 25.3248 38.2284 38.2516Z", className: " fill-[#E6E6E6] dark:fill-purple-200 " }))),
        React.createElement("div", { className: "flex items-center space-x-4 mb-4" },
            React.createElement(avatar_1["default"], __assign({ name: name }, (imageSrc ? { src: imageSrc } : {}))),
            React.createElement("div", null,
                React.createElement("h3", { className: "text-sm md:text-lg font-medium" }, name),
                React.createElement("p", { className: "text-sm  text-gray-500 dark:text-gray-400" },
                    role,
                    " at ",
                    company))),
        React.createElement("p", { className: "text-sm leading-8  text-center md:text-left md:text-base md:leading-10 " }, text)));
};
exports["default"] = ReviewCard;
