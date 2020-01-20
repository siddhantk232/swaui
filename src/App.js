import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { BodyWrapper } from './Components/UI/BodyWrapper/BodyWrapper';
import { Logo } from './Components/UI/Logo/Logo';
import logo from './assets/logo.png';
import { Container } from './Components/UI/Container/Container';
import People from './Components/People/People';
import PersonDetailsCard from './Components/PersonDetailsCard/PersonDetailsCard';

function App() {
	return (
		<Router>
			<BodyWrapper>
				<Logo>
					<img
						style={{ height: '100%', width: '100%' }}
						src={logo}
						alt="star wars"
					/>
				</Logo>

				<Container>
					<Switch>
						<Route path="/" exact component={People} />
						<Route path="/person/:id" component={PersonDetailsCard} />
					</Switch>
				</Container>
			</BodyWrapper>
		</Router>
	);
}

export default App;
