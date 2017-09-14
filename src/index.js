import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter,Route} from 'react-router-dom'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<HashRouter>
		<div>			
			<Route path="/" component={App}>								
			</Route>	
		</div>
	</HashRouter>
), document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
