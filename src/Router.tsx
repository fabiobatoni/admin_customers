import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { CreateClient } from "./pages/CreateClient"

export function Router() {
    return(
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<CreateClient />}/> 
        </Routes>
    )
}