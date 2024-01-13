import logo from './assets/logo.svg';
import './App.css';
import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom';
import BookChoicePage from './containers/BookChoicePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/books" element={<BookChoicePage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
