import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';
import OptionGuide from './pages/optionGuide';
import './index.less';

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/futureGuide" exact component={OptionGuide} />
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
