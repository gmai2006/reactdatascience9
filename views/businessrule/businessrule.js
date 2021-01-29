import React from 'react';

var BusinessRule = function BusinessRule(props) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement("div", { className: "divide10" }),
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
                    "Business Rules Extractions (BREX)"
                )
            ),
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-md-8" },
                    React.createElement(
                        "div",
                        { className: "card" },
                        React.createElement(
                            "div",
                            { className: "panel-heading" },
                            React.createElement(
                                "h3",
                                null,
                                "Business Rules Extractions (BREX)"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "card-body" },
                            React.createElement(
                                "p",
                                { className: " color_3" },
                                "In 2016, 70% of data transaction systems were written in COBOL. Maintaining these those legacy applications is not only costly, but is it\u2019s hard to keep the system up-to-date and is even harder to find qualified COBOL Cobol programmers nowadays."
                            ),
                            React.createElement(
                                "p",
                                { className: " color_3" },
                                "Modernizing these large systems is not trivial, because most of the functional specifications do not exist or are no longer available. Business rules extraction helps to recover the business rules that are buried in the source codes."
                            ),
                            React.createElement(
                                "p",
                                { className: " color_3" },
                                "Our firm has developed an open architecture for extracting business rules is based on different disciplines from Backus- Naur form,  to compiling to, data mining and to  machince learning. This framework utilizes uses various open open-source tool sets like such as ANTLR4, StringTemplates, NumPy, and Apache Sparks."
                            ),
                            React.createElement(
                                "p",
                                { className: " color_3" },
                                "The BREX process comprises of multiple phases as shown in Figure 1."
                            ),
                            React.createElement(
                                "ul",
                                null,
                                React.createElement(
                                    "li",
                                    null,
                                    "Variable classNameification"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Business Rule Identification"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Domain Model Extraction"
                                )
                            ),
                            React.createElement(
                                "p",
                                { className: " color_3" },
                                React.createElement("img", { src: "images/business-rules.png", className: "card-img-bottom", alt: "" })
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col-md-4" },
                    React.createElement(
                        "div",
                        { className: "card " },
                        React.createElement(
                            "div",
                            { className: "panel-heading" },
                            React.createElement(
                                "h3",
                                null,
                                "Technology"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "card-body" },
                            React.createElement(
                                "ul",
                                { className: "list-group list-group-flush" },
                                React.createElement(
                                    "li",
                                    null,
                                    "ANTLR4"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "NumPi"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "ML"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Apache Sparks"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "JDBC"
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

export default BusinessRule;