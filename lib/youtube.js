export async function listYoutube(channelId) {
  const API_KEY = process.env.YOUTUBE_API_KEY
  const URI_LIST_FULL = `https://content-youtube.googleapis.com/youtube/v3/search?channelId=${channelId}&maxResults=50&key=${API_KEY}`
  const URI_PART_LIST = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDNgBij-_JLufOuiY9Y58vxJJymkU4FT50&channelId=UCBGmhGIsYxZhEZNqxl_9hKA&part=snippet,id&order=date&maxResults=20'
  
  const res = await fetch(URI_PART_LIST)
  const data = await res.json()

  return data.items.map(item => {
    return {
      videoId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description
    }
  })
}

export async function detailYoutube(videoId) {
  const API_KEY = process.env.YOUTUBE_API_KEY
  const URI_DETAIL_VIDEO = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}` 
}