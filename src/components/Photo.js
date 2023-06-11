const Photo = ( {topic} ) =>{
    // const API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_API_KEY
    const getPhotos = async (topic) => {
        console.log(topic)
        const res = await fetch(
            `https://api.unsplash.com/search/photos?client_id=dIdwWEge3xfw4NcWTTiVnYvrkahzWvNnfbLwggxjsFA&&page=1&query=${topic}`,
          
        )
        const responseJson = await res.json()
        return responseJson.photos
        
    }

    let photos = getPhotos( topic )
    console.log(photos)
    return(
        <div>

        </div>
    )

}
export default Photo