import React from  'react';
import BannerCarousel from '../../components/sliders/slider';
import AllServices from '../../components/allservices/allservice';
// import RecentWorks from '../../components/recentworks/recentworks';

export const Home = props => {
    return (
        <React.Fragment>
            <BannerCarousel/>
            <AllServices/>
        </React.Fragment>
    );
}

export default Home;