import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./screens/MainPage"
import "./App.css"
import OurTeam from "./screens/OurTeam"
import Price from "./screens/Price"
import Contacts from "./screens/Contacts"
import MainLayout from "./components/layouts/MainLayout"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path="/1" element={<OurTeam />} />
            <Route path="/2" element={<Price />} />
            <Route path="/3" element={<Contacts />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
        {/* <div className="h-[100vh] w-[100vw] bg-red-800">Hello</div> */}
      </div>
    </BrowserRouter>
  )
}

export default App
