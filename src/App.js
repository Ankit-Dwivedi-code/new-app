import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

const App =()=>{
  const page = 6;
  const apikey = process.env.REACT_APP_NEWS_API

  const[progress,setProgress ] = useState(0)

    return (

      <div>

        <Router>

          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/sports" element={<News apikey={apikey} setProgress={setProgress} key="sports" pageSize={page} country='in' category='sports' />} />
            <Route exact path="/business" element={<News apikey={apikey} setProgress={setProgress} key="business" pageSize={page} country='in' category='business' />} />
            <Route exact path="/entertainment" element={<News apikey={apikey} setProgress={setProgress} key="entertainment" pageSize={page} country='in' category='entertainment' />} />
            <Route exact path="/health" element={<News apikey={apikey} setProgress={setProgress} key="health" pageSize={page} country='in' category='health' />} />
            <Route exact path="/science" element={<News apikey={apikey} setProgress={setProgress} key="science" pageSize={page} country='in' category='science' />} />
            <Route exact path="/technology" element={<News apikey={apikey} setProgress={setProgress} key="technology" pageSize={page} country='in' category='technology' />} />
            <Route exact path="/" element={<News apikey={apikey} setProgress={setProgress} key="general" pageSize={page} country='in' category='general' />} />
          </Routes>

        </Router>
      </div>
    );
}

export default App