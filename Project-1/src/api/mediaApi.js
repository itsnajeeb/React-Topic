import axios from 'axios'
const UNPLASH_KEY = import.meta.env.VITE_UNPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY

export async function fetchPhoto(query, page = 1, per_page = 15) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page },
        headers: { Authorization: `Client-ID ${UNPLASH_KEY}` },
    })
    return res.data
}

export async function fetchVideos(query, per_page=20) {
    const res = await axios.get('https://api.pexels.com/videos/search', {
        params: {query,per_page},
        headers: {Authorization:PEXELS_KEY},
    })
    return res.data

}
export async function fetchGIF(query) {
    const lmt=14
    const res = await axios.get("https://tenor.googleapis.com/v2/search?q=" + query + "&key=" +
            TENOR_KEY +"&client_key=" + "my_test_app" +  "&limit=" + lmt)
    
    return res.data

}