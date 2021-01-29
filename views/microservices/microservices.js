import React from 'react';

var MicroSesrvices = function MicroSesrvices(props) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement("div", { className: "divide20" }),
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "ol",
                { className: "breadcrumb" },
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
                    { className: "active" },
                    "About"
                )
            ),
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-6 margin20" },
                    React.createElement(
                        "div",
                        { className: "card" },
                        React.createElement(
                            "div",
                            { className: "panel-heading" },
                            React.createElement(
                                "h3",
                                null,
                                "About Us"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "card-body" },
                            React.createElement(
                                "p",
                                { className: " color_3" },
                                "Data Science 9 is a unique software solution firm that provides a solution for companies in a software crisis. Our firm comprises a group of software developers, architects, project managers, and experts in the software development field who have come together to offer content, consulting, and training to our clients. These experts are committed to delivering top-level, critical, and objective advice."
                            ),
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "services.xhtml", className: "btn border-black btn-lg" },
                                    "Our Services"
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-6" },
                    React.createElement("img", { src: "images/hosting-architecture.png", className: "card-img-bottom", alt: "" })
                )
            )
        ),
        React.createElement("div", { className: "divide20" })
    );
};

export default MicroSesrvices;