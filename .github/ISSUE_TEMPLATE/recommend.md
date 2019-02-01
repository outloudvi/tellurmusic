---
title: 'Recommend: '
labels: recommendation
assignees: outloudvi
---

Please fill in the infomation in this format:

``` json
{
        "id": 1,
        "title": "<title>",
        "author": "<author>",
        "links": {
            "soundcloud": "https://soundcloud.com/<author>/<song-link>",
            "ncm": "https://music.163.com/#/song?id=<song-id>"
        },
        "embed": {
            "soundcloud": <soundcloud id>,
            "ncm": <song-id, same as above>
        }
}
```

A reason is optional here.

(delete everything below this line when opening an issue)

```
1. It's okay if the song only appears in one of the platforms listed above (SoundCloud and NetEase Cloudmusic).
2. To find the "SoundCloud ID", go to the music page on SoundCloud, click "share" then click "embed", you can find the id in the code. it's like:
   ... ?url=https%3A//api.soundcloud.com/tracks/<soundcloud id>&color=%23ff5500& ...
3. A PR is actually preferred.
```
