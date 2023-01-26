import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import SearchViz from './components/searchviz';
import { SortingViz } from './components/sortingviz';

function App() {
  return (
    <div className='mainView'>
      <div className='bg'>
        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7'></div>
        <div className='light x8'></div>
        <div className='light x9'></div>
      </div>
      <Router>
        <NavBar />
        <div className='pageView'>
          <Routes>
            <Route exact path='/' element={< SortingViz />}></Route>
            <Route exact path='/searchviz' element={< SearchViz />}></Route>
          </Routes>
          {/* <SortingViz /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
