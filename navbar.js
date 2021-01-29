import React from 'react';
import { Link } from 'react-router-dom';

export var NavBar = function NavBar(props) {

    return React.createElement(
        'div',
        { className: 'navbar navbar-default navbar-static-top yamm sticky', role: 'navigation' },
        React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'div',
                { className: 'navbar-header' },
                React.createElement(
                    'button',
                    { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse',
                        'data-target': '.navbar-collapse' },
                    React.createElement(
                        'span',
                        { className: 'sr-only' },
                        'Toggle navigation'
                    ),
                    ' ',
                    React.createElement('span', {
                        className: 'icon-bar' }),
                    ' ',
                    React.createElement('span', { className: 'icon-bar' }),
                    ' ',
                    React.createElement('span', {
                        className: 'icon-bar' })
                ),
                React.createElement(
                    'a',
                    { className: 'navbar-brand', href: '' },
                    'Data Science 9'
                )
            ),
            React.createElement(
                'div',
                { className: 'navbar-collapse collapse' },
                React.createElement(
                    'ul',
                    { className: 'nav navbar-nav navbar-right' },
                    React.createElement(
                        'li',
                        { className: '$home$' },
                        React.createElement(
                            'a',
                            { Link: true, to: 'home' },
                            'Home'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: '$about$' },
                        React.createElement(
                            'a',
                            { Link: true, to: 'about' },
                            'About'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'dropdown' },
                        React.createElement(
                            'a',
                            { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                            'Services ',
                            React.createElement('i', { className: 'fa fa-angle-down' })
                        ),
                        React.createElement(
                            'ul',
                            { className: 'dropdown-menu', role: 'menu' },
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { Link: true, to: 'datamining' },
                                    'Data Mining'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { Link: true, to: 'datamigration' },
                                    'Database Migrations'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { Link: true, to: 'datatransformation' },
                                    'Data Transformation'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { Link: true, to: 'document' },
                                    'Document Conversion'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { Link: true, to: 'enterprise' },
                                    'Enterprise Software Solution'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { Link: true, to: 'it' },
                                    'IT as a Service'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { Link: true, to: 'webdevelopment' },
                                    'Web Development'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'dropdown' },
                        React.createElement(
                            'a',
                            { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                            'Products',
                            React.createElement('i', { className: 'fa fa-angle-down' })
                        ),
                        React.createElement(
                            'ul',
                            { className: 'dropdown-menu', role: 'menu' },
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { Link: true, to: 'businessrule' },
                                    'Business Rules Extractions'
                                )
                            ),
                            React.createElement(
                                'li',
                                null,
                                React.createElement(
                                    'a',
                                    { Link: true, to: 'microservices' },
                                    'Automated Generation of Microservices'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: '$portfolio$' },
                        React.createElement(
                            'a',
                            { Link: true, to: 'portfolio' },
                            'Portfolio'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: '$blog$' },
                        React.createElement(
                            'a',
                            { Link: true, to: 'blogs' },
                            'Blog'
                        )
                    )
                )
            )
        )
    );
};
export default NavBar;