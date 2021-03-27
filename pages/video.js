import { listYoutube } from '../lib/youtube'

function Video({ videos }) {
  return (<div>
    <div class="container">
      <hr />
      <div class="row">
        {videos.map((video, index) => (
          <div class="col-md-6 col-xs-12">
            <iframe src={'https://www.youtube.com/embed/' + video.videoId} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-100 hx-300"></iframe>
          </div>
        ))}
      </div>
    </div>
  </div>);
}

export async function getStaticProps() {
  const channelId = 'UCBGmhGIsYxZhEZNqxl_9hKA'
  const videos = await listYoutube(channelId)
  return {
    props: {
      videos
    }
  }
}

export default Video;