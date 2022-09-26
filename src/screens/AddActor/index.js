import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');

const AddActor = props => {

    const navigation = useNavigation();

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');

    const onActorAdd = () => {
        if (!fname){
            alert('Please enter a first name.');
            return;
        }
        if (!lname){
            alert('Please enter a last name.');
            return;
        }
        
        try {
            database.addActor(fname, lname);
        } catch (error) {
            console.log('Error adding actor ' + error);
        }

        alert(fname + " " + lname + ' Added!');
        navigation.navigate('Enter FilmCollector!');
    }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput 
                value={fname}
                onChangeText={value => setfName(value)}
                style={styles.fname}
                clearButtonMode={'while-editing'}
                placeholder={'Enter First Name'}
                placeholderTextColor={'grey'}
            />
            <TextInput 
                value={lname}
                onChangeText={value => setlName(value)}
                style={styles.lname}
                clearButtonMode={'while-editing'}
                placeholder={'Enter Last Name'}
                placeholderTextColor={'grey'}
            />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onActorAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default AddActor;