import React, { Suspense } from "react"
import "./App.scss"
import { Button } from "antd"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../pages/Header/Header"
import Footer from "../pages/Footer/Footer"

const HomeLazy = React.lazy(() => import("../pages/Home/Home"))

function App() {
  return (
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
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
