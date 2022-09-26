import React, { useState } from 'react';
import {View , Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');

const AddActor = props => {

    const navigation = useNavigation();

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
   
    const on = () => {
        if (!fname){
            alert('Please enter first name.')
            return;
        }
        if (!lname){
            alert('Please enter last name.')
            return;
        }

        try {
            database.addActor(fname, lname)
        } catch (error) {
            console.log('Error adding actors name ' + error);
        }
        
        alert(fname + ' Added!');
        navigation.navigate('Enter FilmCollector!');
    }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput 
                value={fname}
                onChangeText={value => setName(value)}
                style={styles.name}
                clearButtonMode={'while-editing'}
                placeholder={'Enter List Name'}
                placeholderTextColor={'grey'}
            />
             <TextInput 
                value={lname}
                onChangeText={value => setStore(value)}
                style={styles.store}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Store'}
                placeholderTextColor={'grey'}
            />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onListAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default AddActor;