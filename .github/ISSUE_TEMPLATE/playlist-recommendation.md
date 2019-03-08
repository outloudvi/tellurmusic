---
name: Playlist Recommendation
about: Recommand a song to the outv.im playlist
title: ''
labels: contributed, type:dicsussion
assignees: outloudvi

---

Please fill in the infomation in this format:

``` json
{
        "id": [a number, just be unique among the list],
        "title": "<title>",
        "author": "<author>",
        "links": {
            "soundcloud": "https://soundcloud.com/[author]/[song-identifier]",
            "ncm": "https://music.163.com/#/song?id=[song-id]",
            "youtube": "https://youtu.be/[video-id]"
        },
        "embed": {
            "soundcloud": [soundcloud id],
            "ncm": [song-id, same as above],
            "youtube": [youtube video id]
        }
}
```

A reason is optional here.

(delete everything below this line when opening an issue)

```
1. It's okay if the song only appears in one of the platforms listed above (SoundCloud, NetEase Cloudmusic or YouTube).
2. To find the "SoundCloud ID", go to the music page on SoundCloud, click "share" then click "embed", you can find the id in the code. it's like:
   ... ?url=https%3A//api.soundcloud.com/tracks/<soundcloud id>&color=%23ff5500& ...
3. Pull Requests are actually preferred.
```
