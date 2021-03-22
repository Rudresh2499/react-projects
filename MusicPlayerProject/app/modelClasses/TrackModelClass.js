class TrackModelClass {
    trackId: Number;
    artistName: String;
    albumName: String;
    albumCoverUrl: String;
    songName: String;
    songUrl: String;

    constructor(trackId, artistName, albumName, albumCoverUrl, songName, songUrl){
        this.trackId = trackId;
        this.artistName = artistName;
        this.albumName = albumName;
        this.albumCoverUrl = albumCoverUrl;
        this.songName = songName;
        this.songUrl = songUrl;
    }
}

export default TrackModelClass