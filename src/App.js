import './App.css';
import { Route, Routes } from 'react-router-dom';
import BasicLayout from './pages/layouts/basicLayout/BasicLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout/>}>

      </Route>
      
    </Routes>
  );
}

export default App;
