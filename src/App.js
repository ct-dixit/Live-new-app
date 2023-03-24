import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSizes={9} country={'in'} category="general" />} />
          <Route exact path="/business" element={<News key="business" pageSizes={9} country={'in'} category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" pageSizes={9} country={'in'} category="entertainment" />} />
          <Route exact path="/general" element={<News key="general" pageSizes={9} country={'in'} category="general" />} />
          <Route exact path="/health" element={<News key="health" pageSizes={9} country={'in'} category="health" />} />
          <Route exact path="/science" element={<News key="science" pageSizes={9} country={'in'} category="science" />} />
          <Route exact path="/sports" element={<News key="sports" pageSizes={9} country={'in'} category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" pageSizes={9} country={'in'} category="technology" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
