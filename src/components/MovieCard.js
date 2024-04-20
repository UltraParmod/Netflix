import {
    FlatList,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
const MovieCard = ({ title, data }) => {
    const renderMovieCards = ({ index, item }) => {
        return (
            <Image
                resizeMode="cover"
                style={styles.movieImage}
                source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
            />
        );
    };
    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: 'white',
                    paddingTop: 20,
                    paddingLeft: 10,
                    fontSize: responsiveFontSize(2.3),
                    letterSpacing: 0.5,
                    marginLeft: 10
                }}>
                {title}
            </Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderMovieCards}
                ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
            />

        </View>
    );
};

export default MovieCard;

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(40),
        gap: 15,
        marginTop: 10
    },
    movieImage: {
        width: responsiveWidth(50),
        height: '100%',
        borderRadius: 20,
    },
});
