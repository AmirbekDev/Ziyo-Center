import React from 'react';
import HomeBanner from "./HomeComponents/HomeBanner";
import HomeAbout from "./HomeComponents/HomeAbout";
import HomePriceCources from "./HomeComponents/HomePriceCources";
import HomeBlockTeachers from "./HomeComponents/HomeBlockTeachers";
import HomeBlockNumber from "./HomeComponents/HomeBlockNumber";
import HomeBlockInput from "./HomeComponents/HomeBlockInput";

function Home(props) {
    return (
        <div className="home">
            <HomeBanner/>
            <HomeAbout/>
            <HomePriceCources/>
            <HomeBlockTeachers/>
            <HomeBlockNumber/>
            <HomeBlockInput/>

        </div>
    );
}

export default Home;