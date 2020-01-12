import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import React from 'react' 
import AWSAppSyncClient from 'aws-appsync'
import {Rehydrated } from 'aws-appsync-react'
import {  ApolloProvider} from 'react-apollo' 
import Amplify from 'aws-amplify';
import config from './aws-exports'; 

Amplify.configure(config); 

const client = new AWSAppSyncClient ({
	url: config.aws_appsync_graphqlEndpoint,
	region: config.aws_appsync_region,
	auth: {
		type: config.aws_appsync_authenticationType,
		jwtToken: async () => (await Auth.currentSession()).idToken.jwtToken 
	}
});

const AppWithProvider = () =>(
	<ApolloProvider client ={client}>
	<Rehydrated>
	<App />
	</Rehydrated>
	</ApolloProvider>

	);
AppRegistry.registerComponent(appName, () => App);
