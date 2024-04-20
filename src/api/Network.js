import axios from "axios"


const Config = {
    baseURL: 'https://api.themoviedb.org/3/movie',
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjA2NjhkYzBhYTk1YzM3NmQwMTRiMjJmZmZhZjc1MiIsInN1YiI6IjY2MWZkMmUyYTZmZGFhMDE2MzZiMmIwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3flSmre2wZ7eRfbHG3XNGVq8C-hw7ShNALpR-WwsqIM'
}

export const getUpcomingMovies = async () => {
    try {
        const response = await axios.get(`${Config.baseURL}/upcoming`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data
        const status = response.status

        return { success: true, data: data, status: status }
    } catch (error) {
        return { success: false, data: error }
    }

}

export const getNowPlayingMovies = async () => {
    try {
        const response = await axios.get(`${Config.baseURL}/now_playing`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data
        const status = response.status

        return { success: true, data: data, status: status }
    } catch (error) {
        return { success: false, data: error }
    }

}

export const getPoipularMovies = async () => {
    try {
        const response = await axios.get(`${Config.baseURL}/popular`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data
        const status = response.status

        return { success: true, data: data, status: status }
    } catch (error) {
        return { success: false, data: error }
    }

}

export const getTopRatedMovies = async () => {
    try {
        const response = await axios.get(`${Config.baseURL}/top_rated`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data
        const status = response.status

        return { success: true, data: data, status: status }
    } catch (error) {
        return { success: false, data: error }
    }

}
