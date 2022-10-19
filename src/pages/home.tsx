import React, { useEffect, useState } from "react";
import IPage from "../interfaces/page";
import logging from "../config/logging";
import Navbar from "../component/Navbar"
import Testimoni from "../component/Testimoni"
import Footer from "../component/Footer"
import Intro from "../component/Intro"
import IklanGeser from "../component/Content/Carousel/index.jsx"
import env from "react-dotenv"
import axios from "axios";
import Pulsa from "../component/Content/pulsa/index.jsx"
declare module Pulsa{}
declare module IklanGeser{}

const HomePage: React.FunctionComponent<IPage> = props => {
            const [story, setStory] = useState([])    
            useEffect(() => {
            logging.info(`Loading ${props.name}`);
            axios.get(env.BASE_URL_STORIES, {
                params: {
                    access_token: env.TOKEN_ACCESS
                }
            }).then((resp) => {
                    setStory(resp.data.data)
            })
        }, [])
        

        return (
                <div>
                    <Navbar />
                    <div>
                        <Intro />
                        <Pulsa />
                        <IklanGeser slides={story} />
                        <Testimoni />
                    </div>
                    <Footer />
                </div>

        )
}

export default HomePage;
