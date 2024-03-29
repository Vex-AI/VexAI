import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Customize from "./screens/Customize";
import Drawer from "./components/Drawer";
import LanguageSelector from "./screens/LanguageSelector";
import Train from "./screens/Train";
import Synon from "./screens/Synon";
import VexProfile from "./screens/VexProfile";
import Splash from "./screens/Splash";
import Nada from "./screens/teste";
import "./classes/translation";
import { Provider } from "react-redux";
import { SplashScreen } from "@capacitor/splash-screen";

SplashScreen.hide();

import store from "./store/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Browser>
    <Provider store={store}>
      <Drawer />
      <Routes>
        <Route path="*" element={<Splash />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:locale" element={<Home />} />
        <Route path="synon" element={<Synon />} />
        <Route path="train" element={<Train />} />
        <Route path="custom" element={<Customize />} />
        <Route path="language" element={<LanguageSelector />} />
        <Route path="profile" element={<VexProfile />} />
        <Route path="teste" element={<Nada />} />
      </Routes>
    </Provider>
  </Browser>
);
