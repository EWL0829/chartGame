import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import FutureGuide from './pages/futureGuide';
import './index.less';

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/futureGuide" exact component={FutureGuide} />
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
