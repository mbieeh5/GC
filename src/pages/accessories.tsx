import React, { useEffect } from "react";
import IPage from "../interfaces/page";
import logging from "../config/logging";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Belanja from '../component/Content/Belanja/Belanja.jsx'

declare module Belanja {

}

const Accessories: React.FunctionComponent<IPage> = props => {
        useEffect(() => {
            logging.info(`Loading ${props.name}`);
        })

        return (
                <div>
                    <Navbar />
                    <div>
                        <Belanja />
                    </div>
                    <Footer />
                </div>

        )
}

export default Accessories;
