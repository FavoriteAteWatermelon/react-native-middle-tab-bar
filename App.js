import * as React from 'react';
import { Button, View, Text } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from  'react-navigation-tabs'
import Icon from "react-native-vector-icons/Ionicons"
import Tab1 from './src/pages/tabs/tab1'
import Tab2 from './src/pages/tabs/tab2'
import Tab3 from './src/pages/tabs/tab3'
import Tab4 from './src/pages/tabs/tab4'
import AddButton from './src/components/addButton'
const TabNavigator = createBottomTabNavigator(
  {
    tab1: {
      screen: Tab1,
      navigationOptions: {
        tabBarIcon: () =><Icon name="ios-settings" size={25} color="#CDCCCE" />
      }
    },
    tab2: {
      screen: Tab2,
      navigationOptions: {
        tabBarIcon: () =><Icon name="ios-book" size={25} color="#CDCCCE" />
      }
    },
    Add:{
      screen: () => null,
      navigationOptions: {
        tabBarIcon: <AddButton/>,
        tabBarOnPress: () => null,
        tabBarOnLongPress: () => null
      }
    },
    tab3: {
      screen: Tab3,
      
      navigationOptions: {
        tabBarIcon: () =><Icon name="ios-moon" size={25} color="#CDCCCE" />
      }
    },
    tab4: {
      screen: Tab4,
      navigationOptions: {
        tabBarIcon: () =><Icon name="ios-camera" size={25} color="#CDCCCE" />
      }
    },
  },{
    tabBarOptions: {
      showLabel: false
    }
  }
)

export default createAppContainer(TabNavigator);