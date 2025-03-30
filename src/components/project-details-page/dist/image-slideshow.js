"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var Slideshow = function (_a) {
    var images = _a.images;
    var _b = react_1.useState(1), index = _b[0], setIndex = _b[1];
    react_1.useEffect(function () {
        if (images.length < 3)
            return;
        var interval = setInterval(function () {
            setIndex(function (prevIndex) { return (prevIndex + 1) % images.length; });
        }, 10000);
        return function () { return clearInterval(interval); };
    }, [images]);
    return (React.createElement("div", { className: "relative w-full  mx-auto flex items-center justify-center overflow-hidden" },
        React.createElement("div", { className: "relative flex w-full h-[250px] sm:h-[300px] md:h-[350px] items-center justify-center" }, images.map(function (src, i) {
            // Determine the position in the loop
            var prev = (index - 1 + images.length) % images.length;
            var scale = 0.8;
            var opacity = 0.6;
            var translateX = "95%";
            if (i === prev) {
                translateX = "-95%";
            }
            else if (i === index) {
                scale = 1;
                opacity = 1;
                translateX = "0%"; // Centered
            }
            return (React.createElement(framer_motion_1.motion.img, { key: i, src: src, alt: "Slide " + (i + 1), className: "absolute w-[80%] sm:w-[85%] lg:w-[60%] max-w-[600px] rounded-xl shadow-lg", style: { transform: "translateX(-50%)" }, initial: { opacity: 1, scale: 1 }, animate: {
                    opacity: opacity,
                    scale: scale,
                    x: translateX
                }, transition: { duration: 1, ease: "easeInOut" } }));
        }))));
};
exports["default"] = Slideshow;
