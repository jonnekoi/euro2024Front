import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './home.jsx';
import Admin from './components/Admin.jsx';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="/admin" element={<Admin/>}/>
          </Route>
        </Routes>
      </Router>
  );
};

export default App;
