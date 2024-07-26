import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { CreateClient } from "./pages/CreateClient"
import { SearchClient } from "./pages/SearchClient"
import { UpdateClient } from "./pages/UpdateClient"

export function Router() {
    return(
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<CreateClient />}/> 
          <Route path="/search" element={<SearchClient />}/> 
          <Route path="/update" element={<UpdateClient />}/> 
        </Routes>
    )
}