/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var image_url_1 = require("@sanity/image-url");
var client_1 = require("@/sanity/client");
var image_slideshow_1 = require("./image-slideshow");
var framer_motion_1 = require("framer-motion");
var _a = client_1.client.config(), projectId = _a.projectId, dataset = _a.dataset;
var urlFor = function (source) {
    return projectId && dataset
        ? image_url_1["default"]({ projectId: projectId, dataset: dataset }).image(source)
        : null;
};
var SkeletonLoader = function () { return (React.createElement("section", { className: "pt-10 sm:pt-16 paddingX mx-auto min-h-screen animate-pulse" },
    React.createElement("section", { className: "maxWidthSection" },
        React.createElement("div", { className: "w-full h-64 md:h-72 bg-gray-200 dark:bg-purple-200 rounded-xl" }),
        React.createElement("h1", { className: "w-2/3 h-14 bg-gray-200 dark:bg-purple-200 rounded mt-8 mx-auto" }),
        React.createElement("p", { className: "w-1/2 h-8 bg-gray-200 dark:bg-purple-200 rounded mt-4 mx-auto" }),
        React.createElement("p", { className: "w-3/4 h-24 bg-gray-200 dark:bg-purple-200 rounded mt-4 mx-auto" }),
        React.createElement("div", { className: "grid sm:flex justify-center gap-4 mt-6" },
            React.createElement("div", { className: "w-40 h-16 bg-gray-200 dark:bg-purple-200 rounded md:rounded-[50px]" }),
            React.createElement("div", { className: "w-40 h-16 bg-gray-200 dark:bg-purple-200 rounded md:rounded-[50px]" }))))); };
function ProjectDetails(_a) {
    var _this = this;
    var _b;
    var slug = _a.slug;
    var _c = react_1.useState(null), details = _c[0], setDetails = _c[1];
    react_1.useEffect(function () {
        var fetchProject = function () { return __awaiter(_this, void 0, void 0, function () {
            var PROJECT_QUERY, project, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        PROJECT_QUERY = "*[_type == \"project\" && slug.current == \"" + slug + "\"]{\n        ...,\n        \"images\": images[].asset->url\n      }";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, client_1.client.fetch(PROJECT_QUERY)];
                    case 2:
                        project = _a.sent();
                        setDetails(project[0]);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Failed to fetch project details:", error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        fetchProject();
    }, [slug]);
    var imageUrls = ((_b = details === null || details === void 0 ? void 0 : details.images) === null || _b === void 0 ? void 0 : _b.map(function (img) { var _a; return (_a = urlFor(img)) === null || _a === void 0 ? void 0 : _a.width(750).height(380).url(); })) || [];
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "pt-10 sm:pt-16  mx-auto min-h-screen" }, !details ? React.createElement(SkeletonLoader, null) : (React.createElement(React.Fragment, null,
            React.createElement(image_slideshow_1["default"], { images: imageUrls }),
            React.createElement("main", { className: "paddingX" },
                React.createElement("section", { className: "maxWidthSection" },
                    React.createElement("h1", { className: "text-center text-2xl  sm:text-3xl md:text-4xl xl:text-6xl mt-2 sm:mt-8 md:mt-12 text-pink-100 font-bold" }, details.title),
                    React.createElement("p", { className: "text-center text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mt-3 lg:mt-7" },
                        "Role: ",
                        React.createElement("span", null, details === null || details === void 0 ? void 0 : details.role),
                        " ",
                        details.technologies && (React.createElement(React.Fragment, null,
                            "\u2022",
                            " ",
                            details.technologies.map(function (technology, index) { return (React.createElement("span", { key: index },
                                technology,
                                index < details.technologies.length - 1 && ", ")); })))),
                    React.createElement("p", { className: "text-center m-auto lg:w-[80%] text-sm sm:text-base md:text-lg lg:text-xl xl-text-2xl mt-3 lg:mt-5 leading-6 sm:leading-8 md:leading-8 lg:leading-10 " }, details.description),
                    React.createElement("div", { className: "grid sm:flex gap-2 mt-5 sm:mt-6 justify-center items-center" },
                        React.createElement("a", { href: "https://drive.google.com/file/d/1ijlC1vTCeC3n25S8leXm7IJcsM79PbRn/view?usp=sharing", target: "_blank", rel: "noopener noreferrer", className: "grid" },
                            " ",
                            React.createElement(framer_motion_1.motion.button, { className: " text-white py-[10.36px] px-[25.89px]  sm:py-5 sm:px-6 sm:w-[210px] rounded-lg sm:rounded-[50px] text-sm md:text-base lg:text-lg bg-black m-auto", whileHover: { scale: 1.05, backgroundColor: "#1a1a1a" }, whileTap: { scale: 0.95 }, whileFocus: { boxShadow: "0 0 12px rgba(255,255,255,0.5)" } }, "View project")),
                        details.isPublicRepo && (React.createElement("a", { href: "https://drive.google.com/file/d/1ijlC1vTCeC3n25S8leXm7IJcsM79PbRn/view?usp=sharing", target: "_blank", rel: "noopener noreferrer", className: "grid " },
                            " ",
                            React.createElement(framer_motion_1.motion.button, { className: " text-white   py-[10.36px] px-[25.89px]  sm:py-5 sm:px-6 rounded-lg sm:rounded-[50px] text-sm md:text-base lg:text-lg bg-black m-auto sm:w-[210px]", whileHover: { scale: 1.05, backgroundColor: "#1a1a1a" }, whileTap: { scale: 0.95 }, whileFocus: {
                                    boxShadow: "0 0 12px rgba(255,255,255,0.5)"
                                } }, "View codebase")))))))))));
}
exports["default"] = ProjectDetails;
