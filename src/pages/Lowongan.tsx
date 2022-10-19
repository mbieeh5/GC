import React, { useEffect } from "react";
import IPage from "../interfaces/page";
import logging from "../config/logging";
import Navbar from "../component/Navbar"
//import Testimoni from "../component/Testimoni"
import Footer from "../component/Footer"
import Intro from "../component/Intro"

const Lowongan: React.FunctionComponent<IPage> = props => {
        useEffect(() => {
            logging.info(`Loading ${props.name}`);
        })

        return (
                <div>
                    <Navbar />
                    <div>
                        <p>TEMPAT Lowongan</p>
                    </div>
                    <Footer />
                </div>

        )
}

export default Lowongan;
