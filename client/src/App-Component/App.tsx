import React, { Suspense } from "react"
import "./App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../pages/Header/Header"
import Footer from "../pages/Footer/Footer"

const HomeLazy = React.lazy(() => import("../pages/Home/Home"))
const SignInLazy = React.lazy(() => import("../pages/SignIn/SignIn"))

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<div>loading...</div>}>
              <HomeLazy />
            </Suspense>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Suspense fallback={<></>}>
              <SignInLazy />
            </Suspense>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
