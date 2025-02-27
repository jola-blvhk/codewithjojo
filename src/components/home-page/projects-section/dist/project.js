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
var category_filter_1 = require("./category-filter");
var sub_category_filter_1 = require("./sub-category-filter");
var image_url_1 = require("@sanity/image-url");
var client_1 = require("@/sanity/client");
var image_1 = require("next/image");
var ALL_PROJECTS_QUERY = "*[_type == \"project\"] {\n  title,\n  tagline,\n  description,\n  \"imageUrl\": image.asset->url,\n  category,\n  subcategory\n}";
var _a = client_1.client.config(), projectId = _a.projectId, dataset = _a.dataset;
var urlFor = function (source) {
    return projectId && dataset
        ? image_url_1["default"]({ projectId: projectId, dataset: dataset }).image(source)
        : null;
};
var options = { next: { revalidate: 30 } };
/** Map UI categories to Sanity category names */
var CATEGORY_MAP = {
    "Web Applications": "web",
    "Mobile Applications": "mobile"
};
/** Map UI subcategories to Sanity subcategory names */
var SUBCATEGORY_MAP = {
    Health: "health",
    Games: "games",
    "E-commerce": "e-commerce",
    "News Feed": "news-feed",
    Portfolio: "portfolio"
};
var ProjectSection = function () {
    var _a = react_1.useState([]), projects = _a[0], setProjects = _a[1];
    var _b = react_1.useState("All"), selectedCategory = _b[0], setSelectedCategory = _b[1];
    var _c = react_1.useState("All"), selectedSubCategory = _c[0], setSelectedSubCategory = _c[1];
    var _d = react_1.useState([]), filteredProjects = _d[0], setFilteredProjects = _d[1];
    react_1.useEffect(function () {
        var fetchProjects = function () { return __awaiter(void 0, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, client_1.client.fetch(ALL_PROJECTS_QUERY, {}, options)];
                    case 1:
                        data = _a.sent();
                        setProjects(data);
                        setFilteredProjects(data); // Show all initially
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error fetching projects:", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchProjects();
    }, []);
    react_1.useEffect(function () {
        var filtered = projects;
        /** Apply category filter */
        if (selectedCategory !== "All") {
            var categoryKey_1 = CATEGORY_MAP[selectedCategory];
            filtered = filtered.filter(function (project) { return project.category === categoryKey_1; });
        }
        /** Apply subcategory filter */
        if (selectedSubCategory !== "All") {
            var subCategoryKey_1 = SUBCATEGORY_MAP[selectedSubCategory];
            filtered = filtered.filter(function (project) { return project.subcategory === subCategoryKey_1; });
        }
        setFilteredProjects(filtered);
    }, [selectedCategory, selectedSubCategory, projects]);
    return (react_1["default"].createElement("section", { className: "pt-4 sm:pt-14 md:pt-24 lg:pt-9" },
        react_1["default"].createElement("h2", { className: "text-3xl font-bold" }, "Projects"),
        react_1["default"].createElement("div", { className: "mt-2 md:mt-4" },
            react_1["default"].createElement(category_filter_1["default"], { categories: ["All", "Web Applications", "Mobile Applications"], onSelectCategory: setSelectedCategory })),
        react_1["default"].createElement("div", { className: "mt-4 md:mt-6" },
            react_1["default"].createElement(sub_category_filter_1["default"], { categories: [
                    "All",
                    "Health",
                    "Games",
                    "E-commerce",
                    "News Feed",
                    "Portfolio",
                ], onSelectCategory: setSelectedSubCategory })),
        react_1["default"].createElement("div", { className: "mt-6 md:mt-8" }, filteredProjects.length === 0 ? (react_1["default"].createElement("p", null, "No projects found.")) : (react_1["default"].createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" }, filteredProjects.map(function (project, index) {
            var _a;
            var projectImageUrl = (project === null || project === void 0 ? void 0 : project.imageUrl) ? (_a = urlFor(project.imageUrl)) === null || _a === void 0 ? void 0 : _a.width(500).height(400).url() : null;
            return (react_1["default"].createElement("div", { key: index, className: " shadow-lg rounded-2xl" },
                react_1["default"].createElement(image_1["default"], { src: projectImageUrl || "/assets/logo.png", width: 500, height: 500, quality: 100, alt: project.title, className: "w-full h-80 object-cover py-3 rounded-2xl" })));
        }))))));
};
exports["default"] = ProjectSection;
