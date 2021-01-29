import React from 'react';
import Slider from '../../components/sliders/slider';
import AllServices from '../../components/allservices/allservice';
import RecentWorks from '../../components/recentworks/recentworks';

export var Home = function Home(props) {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(Slider, null),
        React.createElement('div', { 'class': 'divide20' }),
        React.createElement(AllServices, null),
        React.createElement(RecentWorks, null)
    );
};

export default Home;