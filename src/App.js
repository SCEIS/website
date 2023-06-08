import { MainPage } from './Views/MainPage';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'

function App() {
  
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<MainPage/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;