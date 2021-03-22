class TrackModelClass {
    id: String;
    artist: String;
    album: String;
    artwork: String;
    title: String;
    url: String;

    constructor(id, artist, album, artwork, title, url){
        this.id = id;
        this.artist = artist;
        this.album = album;
        this.artwork = artwork;
        this.title = title;
        this.url = url;
    }
}

export default TrackModelClass