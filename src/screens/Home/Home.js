import { ScrollView, StatusBar, StyleSheet, Text, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home_Banner from '../../components/Home_Banner'
import MovieCard from '../../components/MovieCard'
import { getNowPlayingMovies, getPoipularMovies, getTopRatedMovies } from '../../api/Network'

const Home = () => {
    const [nowPlaingData, setnowPlayingData] = useState([])
    const [popularMovieData, setPopularMovieData] = useState([])
    const [top_ratedData, setTop_ratedData] = useState([])


    useEffect(() => {
        const handleApi = async () => {
            const { data, status } = await getNowPlayingMovies()
            if (status === 200) {
                setnowPlayingData(data.results)
            } else {
                Alert.alert(`Request failed with ${data}`)
            }
        }
        handleApi()
    }, [])

    useEffect(() => {
        const handleApi = async () => {
            const { data, status } = await getPoipularMovies()
            if (status === 200) {
                setPopularMovieData(data.results)
            } else {
                Alert.alert(`Request failed with ${data}`)
            }
        }
        handleApi()
    }, [])

    useEffect(() => {
        const handleApi = async () => {
            const { data, status } = await getTopRatedMovies()
            if (status === 200) {
                setTop_ratedData(data.results)
            } else {
                Alert.alert(`Request failed with ${data}`)
            }
        }
        handleApi()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'default'} translucent backgroundColor={'transparent'} />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

                <Home_Banner />
                <View>
                    <View style={styles.subContainer}>
                        <MovieCard title={'Now Playing'} data={nowPlaingData} />
                        <MovieCard title={'Popular Movies'} data={popularMovieData} />
                        <MovieCard title={'TopRated Movies'} data={top_ratedData} />

                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1
    },
    subContainer: {
        gap: 10,


    }
})