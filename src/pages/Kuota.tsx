import React, { useEffect } from "react";
import IPage from "../interfaces/page";
import logging from "../config/logging";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

const Kuota: React.FunctionComponent<IPage> = props => {
        useEffect(() => {
            logging.info(`Loading ${props.name}`);
        })

        return (
                <div>
                    <Navbar />
                    <div>
                        <p>TEMPAT KUOTA</p>
                    </div>
                    <Footer />
                </div>

        )
}

export default Kuota;
