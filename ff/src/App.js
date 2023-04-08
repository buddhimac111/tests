import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from './pages/Page';

function App() {




  return (
    <BrowserRouter>
     <div className="App">
      <h3>Dummy React App</h3>
      <Routes>
        <Route path="/page" element={<Page />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
   

     


    

}

export default App;
