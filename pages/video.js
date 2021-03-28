import { listYoutube } from '../lib/youtube'

function Video({ videos }) {
  return (<div>
    <div class="container">
      <hr />
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {videos.items.map(({ id, snippet = {} }) => {
          const { title, description, thumbnails = {} } = snippet;
          const { medium } = thumbnails;
          const { videoId } = id;
          return (
            <div class="col">
              <div key={id} class="card shadow">
                <img src={medium.url} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{title}</h5>
                  <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                  <div class="row justify-content-end">
                    <small class="text-muted col-4">
                      <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" class="stretched-link card-link"><small>Quero assistir...</small></a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <br />
    </div>
  </div>);
}

export async function getServerSideProps() {
  const channelId = 'UCBGmhGIsYxZhEZNqxl_9hKA'
  const videos = await listYoutube(channelId, 10)
  return {
    props: {
      videos
    }
  }
}

export default Video;