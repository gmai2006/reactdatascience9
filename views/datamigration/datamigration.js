import React from 'react';

var DataMigration = function DataMigration(props) {
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
                    "Database Migrations"
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
                                "Database Migration and Microservices Generation"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "card-body" },
                            React.createElement(
                                "p",
                                { className: " color_3" },
                                "Datascience9 can help to generate microservices directly from your legacy database. The solution is 100% automated. The generated micro services can be customized based on client requirements."
                            ),
                            React.createElement(
                                "p",
                                { className: " color_3" },
                                "The generator supports different frameworks, such as RESTEasy, Hibernate JPA, Apache, and Open JPA."
                            ),
                            React.createElement(
                                "p",
                                { className: " color_3" },
                                "The core functionality of this framework will be released as an open source to GitHub"
                            ),
                            React.createElement(
                                "p",
                                { className: " color_3" },
                                React.createElement("img", { src: "images/datamigration.png", className: "card-img-bottom", alt: "" })
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
                                    "SpringTemplate"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "Apache Open JPA"
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    "XML"
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

export default DataMigration;