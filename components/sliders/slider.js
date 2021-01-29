import React from 'react';

export var Slider = function Slider(Props) {
    return React.createElement(
        "div",
        { className: "tp-banner-container" },
        React.createElement(
            "div",
            { className: "tp-banner-boxed" },
            React.createElement(
                "ul",
                null,
                React.createElement(
                    "li",
                    { "data-transition": "fade", "data-slotamount": "5",
                        "data-masterspeed": "1000", "data-title": "Slide 1" },
                    React.createElement("img", { src: "images/header-bg.jpg", alt: "darkblurbg",
                        "data-bgfit": "cover", "data-bgposition": "left top",
                        "data-bgrepeat": "no-repeat" }),
                    React.createElement(
                        "div",
                        { className: "caption sfb  uppercase-title text-center",
                            "data-x": "center", "data-y": "158", "data-speed": "900", "data-start": "800",
                            "data-easing": "Sine.easeOut" },
                        "Custom Web Development"
                    ),
                    React.createElement(
                        "div",
                        { className: "caption sfb lowercase-caption text-center",
                            "data-x": "center", "data-y": "218", "data-speed": "900", "data-start": "1500",
                            "data-easing": "Sine.easeOut" },
                        "Develop custom web applications using that meet customer requirements"
                    ),
                    React.createElement(
                        "div",
                        { className: "caption rev-buttons tp-resizeme sfb", "data-x": "center",
                            "data-y": "313", "data-speed": "900", "data-start": "2200",
                            "data-easing": "Sine.easeOut" },
                        React.createElement(
                            "a",
                            { href: "web.xhtml", className: "btn btn-theme-bg btn-lg" },
                            "Learn More"
                        )
                    )
                ),
                React.createElement(
                    "li",
                    { "data-transition": "fade", "data-slotamount": "5",
                        "data-masterspeed": "1000", "data-title": "Slide 1" },
                    React.createElement("img", { src: "images/header-bg.jpg", alt: "darkblurbg", "data-bgfit": "cover", "data-bgposition": "left top",
                        "data-bgrepeat": "no-repeat" }),
                    React.createElement(
                        "div",
                        { className: "caption sfb  uppercase-title text-center",
                            "data-x": "center", "data-y": "158", "data-speed": "900", "data-start": "800",
                            "data-easing": "Sine.easeOut" },
                        "Data Migration and Transformation"
                    ),
                    React.createElement(
                        "div",
                        { className: "caption sfb lowercase-caption text-center",
                            "data-x": "center", "data-y": "218", "data-speed": "900", "data-start": "1500",
                            "data-easing": "Sine.easeOut" },
                        "Transform data from one medium to another"
                    ),
                    React.createElement(
                        "div",
                        { className: "caption rev-buttons tp-resizeme sfb", "data-x": "center",
                            "data-y": "313", "data-speed": "900", "data-start": "2200",
                            "data-easing": "Sine.easeOut" },
                        React.createElement(
                            "a",
                            { href: "data.xhtml", className: "btn btn-theme-bg btn-lg" },
                            "Learn More"
                        )
                    )
                ),
                React.createElement(
                    "li",
                    { "data-transition": "fade", "data-slotamount": "5",
                        "data-masterspeed": "1000", "data-title": "Slide 1" },
                    React.createElement("img", { src: "images/header-bg.jpg", alt: "darkblurbg",
                        "data-bgfit": "cover", "data-bgposition": "left top",
                        "data-bgrepeat": "no-repeat" }),
                    React.createElement(
                        "div",
                        { className: "caption sfb  uppercase-title text-center",
                            "data-x": "center", "data-y": "158", "data-speed": "900", "data-start": "800",
                            "data-easing": "Sine.easeOut" },
                        "Conversion of Legacy MS Word /PDF to XML"
                    ),
                    React.createElement(
                        "div",
                        { className: "caption sfb lowercase-caption text-center",
                            "data-x": "center", "data-y": "218", "data-speed": "900", "data-start": "1500",
                            "data-easing": "Sine.easeOut" },
                        "Convert legacy Word documents to semi structure XML"
                    ),
                    React.createElement(
                        "div",
                        { className: "caption rev-buttons tp-resizeme sfb", "data-x": "center",
                            "data-y": "313", "data-speed": "900", "data-start": "2200",
                            "data-easing": "Sine.easeOut" },
                        React.createElement(
                            "a",
                            { href: "software.xhtml", className: "btn btn-theme-bg btn-lg" },
                            "Learn More"
                        )
                    )
                )
            )
        )
    );
};

export default Slider;