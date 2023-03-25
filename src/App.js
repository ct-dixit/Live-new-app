import NavBar from './component/NavBar';
import React, { useState } from 'react'
import News from './component/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize = 6;
  const country = 'in';
  const [progress, setProgress] = useState(0)
 const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
        color='red'
        progress={progress}
        
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSizes={pageSize} country={country} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSizes={pageSize} country={country} category="business" />} />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSizes={pageSize} country={country} category="entertainment" />}
          />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSizes={pageSize} country={country} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSizes={pageSize} country={country} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSizes={pageSize} country={country} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSizes={pageSize} country={country} category="sports" />} />
          <Route
            exact
            path="/technology"
            element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSizes={pageSize} country={country} category="technology" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
