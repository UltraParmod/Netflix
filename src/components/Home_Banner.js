import { Alert, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUpcomingMovies } from '../api/Network'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo'

const Home_Banner = () => {
    const [upcommingApiData, setupcommingApiData] = useState([])
    useEffect(() => {
        const handleUpcomingApi = async () => {
            const { data, status } = await getUpcomingMovies()
            if (status === 200) {
                setupcommingApiData(data.results)
            } else {
                Alert.alert(`Request failed with ${data}`)
            }
        }
        handleUpcomingApi()
    }, [])

    const renderMovieBanner = ({ item, index }) => {
        return <ImageBackground resizeMode='cover' style={styles.movieBanner} source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}>
            <LinearGradient style={styles.linearStyle} colors={["rgba(0,0,0,.1)", "rgba(0,0,0,7)"]}>
                <Text style={styles.titles}>My List </Text>
                <TouchableOpacity style={styles.playBtn} activeOpacity={.9} onPress={() => {
                    Alert.alert('play alert')
                }}>

                    <Entypo name='controller-play' color='black' size={30} />
                    <Text style={[styles.titles, { fontSize: responsiveFontSize(2.7), color: 'black' }]}>Play &nbsp;</Text>

                </TouchableOpacity>
                <Text style={styles.titles}>Info</Text>
            </LinearGradient>
        </ImageBackground>
    }
    return (
        <View style={styles.container}>
            <FlatList pagingEnabled horizontal showsHorizontalScrollIndicator={false} data={upcommingApiData} renderItem={renderMovieBanner} />
        </View>
    )
}

export default Home_Banner

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(65),
        width: '100%'
    },
    movieBanner: {
        width: responsiveWidth(100),
        height: '100%',
        justifyContent: 'flex-end',
    },
    linearStyle: {
        flex: .2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    titles: {
        fontSize: responsiveFontSize(2.5),
        color: 'white',
        fontWeight: '500',
    },
    playBtn: {
        backgroundColor: 'white',
        width: responsiveWidth(28),
        height: responsiveHeight(5.5),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',

        justifyContent: 'center'
    }
})