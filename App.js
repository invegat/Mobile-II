import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Content from './components/Content';
import styles from './Styles';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Home extends Component {
  render() {
    return (
      <Provider
      store={createStoreWithMiddleware(
        reducers)}
      >
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to your List of Users</Text>
        <Button
          title="Sign In"
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}
        />
        <Button
          title="Sign Up"
          onPress={() => {
            this.props.navigation.navigate('SignUp');
          }}
        />        
      </View>
      </Provider>
    );
  }
}

const Routes = StackNavigator({ 
  Home: { screen: Home },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }.
  Content: { screen: Content }.
});

export default Routes;
