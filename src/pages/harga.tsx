import React, { useEffect } from "react";
import IPage from "../interfaces/page";
import logging from "../config/logging";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import ListHarga from "../component/Content/Listharga/ListHarga.jsx"

declare module ListHarga {
    
}

    const Harga: React.FunctionComponent<IPage> = props => {
        useEffect(() => {
            logging.info(`Loading ${props.name}`);
        })
        
        return (
            <div>
                    <Navbar />
                    <div>
                        <ListHarga />
                    </div>
                    <Footer />
                </div>

)
}

export default Harga;
