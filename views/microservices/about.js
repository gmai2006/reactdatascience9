import React from 'react';

var MicroSesrvices = function MicroSesrvices(props) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement("div", { "class": "divide20" }),
        React.createElement(
            "div",
            { "class": "container" },
            React.createElement(
                "ol",
                { "class": "breadcrumb" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "index.xhtml" },
                        "Home"
                    )
                ),
                React.createElement(
                    "li",
                    { "class": "active" },
                    "About"
                )
            ),
            React.createElement(
                "div",
                { "class": "row" },
                React.createElement(
                    "div",
                    { "class": "col-md-6 margin20" },
                    React.createElement(
                        "div",
                        { "class": "card" },
                        React.createElement(
                            "div",
                            { "class": "panel-heading" },
                            React.createElement(
                                "h3",
                                null,
                                "About Us"
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "card-body" },
                            React.createElement(
                                "p",
                                { "class": " color_3" },
                                "Data Science 9 is a unique software solution firm that provides a solution for companies in a software crisis. Our firm comprises a group of software developers, architects, project managers, and experts in the software development field who have come together to offer content, consulting, and training to our clients. These experts are committed to delivering top-level, critical, and objective advice."
                            ),
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "services.xhtml", "class": "btn border-black btn-lg" },
                                    "Our Services"
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "col-md-6" },
                    React.createElement("img", { src: "images/hosting-architecture.png", "class": "card-img-bottom", alt: "" })
                )
            )
        ),
        React.createElement("div", { "class": "divide20" })
    );
};

export default MicroSesrvices;