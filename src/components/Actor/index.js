import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Actor = props => {

    const post = props.post;

    const onPress = () => {
        console.log(post.fname + " " + post.lname);
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 1}}>
                <Text style={styles.fname}>{post.fname}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.lname}>{post.lname}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Actor;