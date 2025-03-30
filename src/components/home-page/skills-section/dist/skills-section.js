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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var client_1 = require("@/sanity/client");
var image_url_1 = require("@sanity/image-url");
require("./skills-section.css");
var image_1 = require("next/image");
var react_1 = require("react");
var ALL_SKILLS_QUERY = "*[_type == \"skill\"] {\n  name,\n  \"iconUrl\": icon.asset->url,\n}";
var _a = client_1.client.config(), projectId = _a.projectId, dataset = _a.dataset;
var urlFor = function (source) {
    return projectId && dataset
        ? image_url_1["default"]({ projectId: projectId, dataset: dataset }).image(source)
        : null;
};
var options = { next: { revalidate: 30 } };
var SkillsSection = function () {
    var _a = react_1.useState([]), skills = _a[0], setSkills = _a[1];
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    react_1.useEffect(function () {
        var fetchSkills = function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, client_1.client.fetch(ALL_SKILLS_QUERY, {}, options)];
                    case 1:
                        data = _a.sent();
                        setSkills(data);
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error fetching skills:", error_1);
                        return [3 /*break*/, 4];
                    case 3:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        fetchSkills();
    }, []);
    return (react_1["default"].createElement("section", { className: "mt-14 md:mt-16 lg:mt-20 xl:mt-32" },
        react_1["default"].createElement("h1", { className: "font-bold text-center text-3xl lg:text-5xl" }, "Skills and Technology"),
        react_1["default"].createElement("div", { className: "mt-10 md:mt-16 flex gap-2.5 sm:gap-4 md:gap-x-8 md:gap-y-7 justify-center m-auto w-[90%] md:w-[80%] items-center flex-wrap" }, loading
            ? __spreadArrays(Array(8)).map(function (_, index) { return (react_1["default"].createElement("div", { key: index, className: "animate-pulse flex items-center gap-1.5 sm:gap-4 py-1.5 px-2 sm:py-2 sm:px-6 border border-gray-100 rounded-[21.63px] md:rounded-[50px] text-sm sm:text-base lg:text-xl bg-gray-200 dark:bg-purple-200" },
                react_1["default"].createElement("div", { className: "w-4 h-4 sm:w-5 sm:h-5 md:w-10 md:h-10 bg-gray-300 dark:bg-white  rounded-full" }),
                react_1["default"].createElement("div", { className: "w-16 h-4 bg-gray-300 dark:bg-white rounded" }))); })
            : skills.map(function (skill, index) {
                var _a;
                var skillImageUrl = skill.iconUrl
                    ? (_a = urlFor(skill.iconUrl)) === null || _a === void 0 ? void 0 : _a.width(40).height(40).url() : null;
                return (react_1["default"].createElement("div", { key: index, className: "flex items-center gap-1.5 sm:gap-4 py-1.5 px-2 sm:py-2 sm:px-6 border border-gray-100 rounded-[21.63px] md:rounded-[50px] text-sm sm:text-base lg:text-xl" },
                    react_1["default"].createElement(image_1["default"], { src: skillImageUrl ? skillImageUrl : "", width: 48, height: 48, className: "w-4 h-4 sm:w-5 sm:h-5 md:w-10 md:h-10", alt: skill.name }),
                    react_1["default"].createElement("p", { className: "font-normal" }, skill.name)));
            }))));
};
exports["default"] = SkillsSection;
