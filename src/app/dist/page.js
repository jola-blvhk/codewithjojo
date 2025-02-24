"use client";
"use strict";
exports.__esModule = true;
var hero_section_1 = require("@/components/home-page/hero-section/hero-section");
var project_1 = require("@/components/home-page/projects-section/project");
var skills_section_1 = require("@/components/home-page/skills-section/skills-section");
function Home() {
    return (React.createElement("section", { className: "paddingX h-[7000px]" },
        React.createElement("section", { className: "maxWidthSection " },
            React.createElement(hero_section_1["default"], null),
            React.createElement(project_1["default"], null),
            React.createElement(skills_section_1["default"], null))));
}
exports["default"] = Home;
