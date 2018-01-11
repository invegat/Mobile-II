import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
 // username: t.maybe(t.String),
  password: t.String,
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      password: true,
      secureTextEntry: true,
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
  },
  stylesheet: formStyles,
};

export default class SignIn extends Component {

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    this.props.signIn(value.email, value.password);
  }

  componentDidMount() {
    console.log('is Mounted');
    /*
    const t = AsyncStorage.getItem('token');
    t
      .then(res => {
        if (res !== null) {
          this.setState(prevState => {
            let token = JSON.parse(res);
            return {
              token
            };
          });
        }
      })
      .catch(err => {
        console.log('On did Mount', err);
      });
      */
  }  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Sign In!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },    
});
