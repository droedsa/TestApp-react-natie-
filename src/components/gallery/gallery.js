import React, {useEffect} from 'react';
import {Button, ScrollView, StyleSheet, TouchableHighlight, View} from "react-native-web";
import unsplashService from "../../services";
import {connect} from 'react-redux';
import {getData, showSpinner} from "../../redux/actions";
import ListItem from "./list-item";
import Loader from "../loader";

const photoService = new unsplashService();

const Gallery = ({photos, navigation, page, loading, showLoader, getPhoto}) => {

    const loadNewPhoto = () => {
        showLoader();
        getPhoto(page);
    }

    useEffect(() => {
        loadNewPhoto()
    }, [])

    return (<ScrollView style={styles.container}>
        {
            photos.map(({id, authorName, description, img}) => {
                return (
                    <TouchableHighlight key={id}
                                        onPress={() => {
                                            navigation.navigate('photoView', {
                                                img
                                            });
                                        }}>
                        <View>
                            <ListItem description={description} img={img} authorName={authorName}/>
                        </View>
                    </TouchableHighlight>
                )
            })
        }
        {loading ? <Loader/> : null}
        {loading ? null : <View style={styles.buttonMore}>
            <Button onPress={() => loadNewPhoto()} title='Load more'/>
        </View>}
    </ScrollView>)
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonMore: {
        margin: 20
    }
});

const mapStateToProps = ({photos, page, loading, showLoader, getPhoto}) => {
    return {
        photos, page, loading, showLoader, getPhoto
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showLoader: () => dispatch(showSpinner()),
        getPhoto: (page) => dispatch(getData(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)