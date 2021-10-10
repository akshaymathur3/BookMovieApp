import React from "react";
import Header from "../../common/header/Header";

const Home = (props) => {

    return (
        <div>
            <Header baseUrl={props.baseUrl} />
            Hello Home
        </div>
    );
};

export default Home;