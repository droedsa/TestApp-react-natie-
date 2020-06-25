import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native-web";

const ListItem = ({img, authorName, description}) => {
    return (
        <View style={styles.photoBox}>
            <Image
                style={styles.img}
                source={{
                    uri: img
                }}>
            </Image>

            <View style={styles.infoBox}>
                <View style={styles.authorBox}>
                    <Text style={styles.author}>Author : </Text>
                    <Text>{authorName}</Text>
                </View>

                <View style={styles.descriptionBox}>
                    <Text style={styles.description}>{description}</Text>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 70,
        marginLeft: 10
    },
    photoBox: {
        flexDirection: 'row',
        margin: 5,
        backgroundColor: 'white',
        minHeight: 100,
        alignItems: 'center'
    },
    infoBox: {
        flex: 1,
        justifyContent: 'space-between',
        margin: 10
    },
    authorBox: {
        flexDirection: 'row',

    },
    author: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    descriptionBox: {},
    description: {
        fontSize: 10,
        color: 'grey',
        wordWrap: 'break-word'
    }
});

export default ListItem;