import React from 'react';
import ActorsScreen from '../screens/Actor';
import FilmsScreen from '../screens/Films';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddActor from '../screens/AddActor';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {

  return (
    <Tab.Navigator
        screenOptions={{
            tabBArActiveTintColor: '#f15454',
            tabBarLabelStyle: {
                flex: 1,
                fontSize: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
            },
            tabBarStyle: {display: 'flex'},
            tabBarIconStyle: {display: 'none'},
        }}
    >
        <Tab.Screen name={'Actor'} component={ActorsScreen}/>
        <Tab.Screen name={'Film'} component={ItemsScreen}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;