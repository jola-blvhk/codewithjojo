"use strict";
exports.__esModule = true;
var react_1 = require("react");
var pi_1 = require("react-icons/pi");
var SubCategoryFilter = function (_a) {
    var categories = _a.categories, onSelectCategory = _a.onSelectCategory;
    var _b = react_1.useState(categories[0]), activeCategory = _b[0], setActiveCategory = _b[1];
    var handleCategoryClick = function (category) {
        setActiveCategory(category);
        onSelectCategory(category);
    };
    return (react_1["default"].createElement("div", { className: "flex items-center divide-x divide-gray-100" },
        react_1["default"].createElement("button", { className: "flex items-center mr-4 gap-4 px-4 py-2 bg-[#FAFAFA] dark:bg-purple-200 rounded-[50px]  text-sm md:text-lg lg:text-xl" },
            react_1["default"].createElement(pi_1.PiSlidersHorizontal, { className: "text-lg md:text-xl font-bold", fontWeight: 700 }),
            "Filter"),
        react_1["default"].createElement("div", { className: "flex gap-4 pl-4 items-center  overflow-scroll scrollbar-hide" }, categories.map(function (category) { return (react_1["default"].createElement("button", { key: category, onClick: function () { return handleCategoryClick(category); }, className: "px-4 py-2 whitespace-nowrap rounded-[50px]  text-sm md:text-base lg:text-lg transition-all duration-300 " + (activeCategory === category
                ? "bg-black text-white "
                : "border border-gray-100 ") }, category)); }))));
};
exports["default"] = SubCategoryFilter;
