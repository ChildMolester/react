import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter,Route,Link} from 'react-router-dom'
import './index.css';
import App from './components/App';
import Jsxtl from './components/Jsxtl/Jsxtl'
import Top from './components/Top/Top'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<BrowserRouter>
		<div>			
			<Route path="/" component={App}>								
			</Route>	
		</div>
	</BrowserRouter>
), document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
