import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JobList from './components/JobsList';
import JobSingle from './components/JobSingle';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App main">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={JobList} />
            <Route path="/about" component={About} />
            <Route path="/:job_id" component={JobSingle} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
