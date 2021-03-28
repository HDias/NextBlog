export async function listYoutube(channelId, maxResults) {
  const API_KEY = process.env.YOUTUBE_API_KEY
  const URI_LIST_FULL = `https://content-youtube.googleapis.com/youtube/v3/search?channelId=${channelId}&maxResults=50&key=${API_KEY}`
  const URI_PART_LIST = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
  const URI_LIST_PAGINATED = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${API_KEY}`

  const res = await fetch(URI_LIST_PAGINATED)
  
  return res.json()
}

export async function detailYoutube(videoId) {
  const API_KEY = process.env.YOUTUBE_API_KEY
  const URI_DETAIL_VIDEO = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
}