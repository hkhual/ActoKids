/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, 
  Text, 
  View, 
  StyleSheet,
  Platform,
KeyboardAvoidingView,
TextInput,
ScrollView,
YellowBox , 
Image} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom, createBottomTabNavigator } from 'react-navigation';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);



/*Home-page class */
class ActoKids extends Component{
  static navigationOptions = {
    title: 'Home',
  };
  render(){
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={[styles.largeText, styles.textStyle]}>Seattle</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
        <Text style={[styles.largeText, styles.textStyle]}>60F</Text>

        <TextInput
          autoCorrect = {false}
          placeholder = "Search an city"
          placeholderTextColor = "white"
          style={styles.textInput}
          clearButtonMode = "always"
          />
      </KeyboardAvoidingView>
    );
  }
}


//caldendar class
class caldendar extends Component{
  static navigationOptions = {
    title: 'Caldendar',
  }

  render(){
    return(

      //<ScrollView contentContainerStyle = { styles.contentContainer}

<ScrollView>

     
        <Text>Caldendar = > something</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>
        <Text>Caldendar</Text>
        <Text>Todo List:</Text>

         <Image
          source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
          style={{width: 320, height:180}}
      />

      </ScrollView>
    );
  }
}


class favorite extends Component{
  static navigationOptions = {
    title: 'favorite',
  }

  render(){
    return(
        <View style={styles.container}>
          <Text>Favorite</Text>
          <Text style={styles.red}>most favorite</Text>
        </View>
    );
  }
}


export default createBottomTabNavigator(
  {
    Activities: { screen: ActoKids },
    Caldendar: { screen: caldendar },
    Favorite: { screen: favorite}, 
  
  });


  const styles = StyleSheet.create({
    contentContainer:{
        paddingVertical: 20,
        flex:1,
    },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle:{
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    },
    largeText: {
      fontSize: 44,
    },
    smallText: {
      fontSize: 18,
    },

    textInput: {
      backgroundColor: '#666',
      color: 'white',
      height: 40,
      width: 300,
      marginTop: 20,
      marginHorizontal: 20,
      paddingHorizontal: 10,
      alignSelf: 'center'
    },
  });


AppRegistry.registerComponent('ActoKids', () => ActoKids);