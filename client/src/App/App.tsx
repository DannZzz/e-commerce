import React, { Suspense } from "react";
import "./App.scss";
import { Button } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../pages/Header/Header";

const HomeLazy = React.lazy(() => import("../pages/Home/Home"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <HomeLazy />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
