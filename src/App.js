import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const pageSize = 6;
  const country = 'in';
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSizes={pageSize} country={country} category="general" />} />
          <Route exact path="/business" element={<News key="business" pageSizes={pageSize} country={country} category="business" />} />
          <Route
            exact
            path="/entertainment"
            element={<News key="entertainment" pageSizes={pageSize} country={country} category="entertainment" />}
          />
          <Route exact path="/general" element={<News key="general" pageSizes={pageSize} country={country} category="general" />} />
          <Route exact path="/health" element={<News key="health" pageSizes={pageSize} country={country} category="health" />} />
          <Route exact path="/science" element={<News key="science" pageSizes={pageSize} country={country} category="science" />} />
          <Route exact path="/sports" element={<News key="sports" pageSizes={pageSize} country={country} category="sports" />} />
          <Route
            exact
            path="/technology"
            element={<News key="technology" pageSizes={pageSize} country={country} category="technology" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
