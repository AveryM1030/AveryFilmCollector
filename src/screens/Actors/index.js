import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Actor from '../../components/Actor';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage";

// use hook to create database
const shopperDB = openDatabase({name: 'Actors.db'});
const listsTableName = 'actors';

const ActorsScreen = props => {

  const navigation = useNavigation();

  const [lists, setLists] = useState([]);

  useEffect(() => {
     const listener = navigation.addListener('focus', () => {
      // declare an empty array that will store the results of the 
      // SELECT
      let results = [];
      // declare a transation the will execute the SELECT
      actorsDB.transaction(txn => {
        // execute SELECT
        txn.executeSql(
          `SELECT * FROM ${listsActorName}`,
          [],
          // callback function to handle the results from the 
          // SELECT
          (_, res) => {
            // get number of rows of data selected
            let len = res.rows.length;
            console.log('Length of lists ' + len);
            // if more than one row was returned
            if (len > 0){
              // loop through thr rows
              for (let i = 0; i < len; i++){
                // push a row of data at a time onto the
                // results array
                let item = res.rows.item(i);
                results.push({
                  id: item.id,
                  fname: item.fname,
                  lname: item.lname,
                });
              }
              // assign results array to lists state variable
              setLists(results);
            } else {
              // if no rows of data were returned,
              // set lists state variable to an empty array
              setLists([]);
            }
          },
          error => {
            console.log('Error getting actors ' + error.message);
          }
        )
      });
     });
     return listener;
  });

  return (
    <View style={styles.container}>
      <View>
        <FlatList 
          data={lists}
          renderItem={({item}) => <List post={item} />}
          keyExtractor={item => item.id}
        />
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Add Actor')}
                >
                <Text style={styles.buttonText}>Add Actor</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default ActorsScreen;