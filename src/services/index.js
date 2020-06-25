class unsplashService {
    _apiBase = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recived ${res.status}`)
        }
        return await res.json();
    };

    async getNextPage(page) {
        const data = await this.getResource(`&page=${page}`)
        return (this._transformPhotos(data))
    }

    _transformPhotos = (photos) => {
        const newPhotos = photos.map(item => {
            return {
                id: item.id,
                authorName: item.user.name,
                description: item.description,
                img: item.urls.regular
            }
        })
        return newPhotos
    };
}

export default unsplashService;