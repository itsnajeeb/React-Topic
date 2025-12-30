import axios from 'axios'
const UNPLASH_KEY = import.meta.env.VITE_UNPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY

export async function fetchPhoto(query, page = 1, per_page = 15) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page },
        headers: { Authorization: `Client-ID ${UNPLASH_KEY}` },
    })
   return res.data.results.map((item) => ({
        id:item.id,
        title:item.alt_description,
        type:'photos',
        thumbnail:item.urls.thumb,
        src:item.urls.small
    }))
    

}

export async function fetchVideos(query, per_page = 20) {
    const res = await axios.get('https://api.pexels.com/videos/search', {
        params: { query, per_page },
        headers: { Authorization: PEXELS_KEY },
    })
    return res.data.videos.map((item)=> ({
        id:item.id,
        title:item.user.name || "USER TITLE",
        type:'videos',
        thumbnail:item.image,
        src:item.video_files[0].link
    }))

}
export async function fetchGIF(query) {
    const lmt = 14
    const res = await axios.get("https://tenor.googleapis.com/v2/search?q=" + query + "&key=" +
        TENOR_KEY + "&client_key=" + "my_test_app" + "&limit=" + lmt)

    return res.data.results.map((item)=> ({
        id:item.id,
        title:item.content_description_source,
        type:'gif',
        thumbnail:item.url,
        src:item.media_formats.gif.url,
    }))

}