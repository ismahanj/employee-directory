
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './pages/Search';
import Home from './pages/Home';
import NavBar from './components/NavTabs';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Search' component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
