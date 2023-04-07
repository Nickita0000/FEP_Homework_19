class GalleryApi {
    static ALBUMS_API = 'https://jsonplaceholder.typicode.com/albums'
    static PICTURES_API = 'https://jsonplaceholder.typicode.com/photos?albumId='

    static getListOfTitles() {
        return fetch(GalleryApi.ALBUMS_API)
            .then((res) => {
                if(res.ok) {
                    return res.json()
                }
                throw new Error('Can not retrieve albums list from server.')
        })
    }

    static getListOfPictures(id) {
        return fetch(GalleryApi.PICTURES_API + id)
            .then((res) => {
                if(res.ok) {
                    return res.json()
                }
                throw new Error('Can not retrieve albums list from server.')
            })
    }
}