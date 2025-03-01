import React from "react";

import { BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/headerSection/Header";
import Feed from "./components/feedSection/Feed";
import SearchVideoResult from "./components/searchSeaction/SearchVideoResult";
import VideoDetails from "./components/videoSection/VideoDetails";
import { AppContext } from "./useContextHook/useContextApi";
import { ThemeProvider } from "./useContextHook/useTheme";


function App() {
  

  return (
   

    <AppContext >

      <ThemeProvider>
      <BrowserRouter>
      <div>
        <Header/>
        
       
        <Routes>

            <Route path="/" element={<Feed />}/>
            <Route path="/search/:searchQuery" element={<SearchVideoResult />}/>
            <Route path="/video/:categoryId/:videoId" element={<VideoDetails />}/>
        </Routes>

      </div>
      </BrowserRouter>  
      </ThemeProvider> 
    </AppContext>
  )
}

export default App
