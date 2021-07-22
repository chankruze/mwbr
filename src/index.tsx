/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 24 2020 07:29:31 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
import App from './components/App';

import './index.sass';

// render app to html
const appContainer = document.getElementById('react_root');
appContainer &&
	ReactDOM.render(
		<ErrorBoundary>
			<App />
		</ErrorBoundary>,
		appContainer
	);

if (module.hot) {
	module.hot.accept();
}
