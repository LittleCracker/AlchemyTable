import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import './App.css';

import logo from './logo.svg';

@observer
class App extends React.Component {

	@observable response: Response | undefined;

	constructor(props: {}) {
		super(props);
		fetch('/api/hello').then((resp) => {
			const body = resp.json();
			return body;
		}).then(body => this.response = body.express);
	}

	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					{this.response}
				</p>
			</div>
		);
	}
}

export default App;
