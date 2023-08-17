import { MainPage } from './Views/MainPage';
import { Enrollment } from './Views/Enrollment';

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
            <Route exact path="/enrollment" element={<Enrollment/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;