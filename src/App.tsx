import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import routes from "./config/routers";
import logging from "./config/logging";
import HomePage from "./pages/home";
import Kuota from "./pages/Kuota";
import Lowongan from "./pages/Lowongan";
import Accessories from "./pages/accessories";
import Karyawan from './pages/Karyawan'
import ListHarga from "./pages/harga";

export interface IAppProps {}

const App: React.FunctionComponent<{IAppProps}> = props => {
    useEffect(() => {
      logging.info('Loading App');
    }, [])

    return (
        <div>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Kuota" element={<Kuota />} />
                <Route path="/Lowongan" element={<Lowongan />} />
                <Route path="/Accessories" element={<Accessories />} />
                <Route path="/InfoKaryawan" element={<Karyawan />} />
                <Route path="/listharga" element={<ListHarga/>} />
            </Routes>
          </BrowserRouter>
        </div>
    )

}


export default App;