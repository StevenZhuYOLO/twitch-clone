import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './stream/StreamCreate';
import StreamEdit from './stream/StreamEdit';
import StreamDelete from './stream/StreamDelete';
import StreamShow from './stream/StreamShow';
import StreamList from './stream/StreamList';
import Header from './Header';
import history from '../history';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact={true} component={StreamList} />
						<Route path="/stream/new" exact component={StreamCreate} />
						<Route path="/stream/edit/:anything" exact component={StreamEdit} />
						<Route path="/stream/delete/:anything" exact component={StreamDelete} />
						<Route path="/stream/:anything" exact component={StreamShow} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
