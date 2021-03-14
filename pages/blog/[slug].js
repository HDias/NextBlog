import { getAllPostIds, getPostData } from '../../lib/posts';
import { formatDate } from '../../lib/date';

export default function Post({ postData }) {
  return (<div>
    <main class="container">
      
      <hr />

      <article class="blog-post">
        <h2 class="blog-post-title">{ postData.title }</h2>
        <p class="blog-post-meta">{ formatDate({strDate: postData.dt_pub,  formatDate: 'dd/MM/yy'}) } by <strong>Isadoula</strong></p>
        <div dangerouslySetInnerHTML={{__html: postData.content}}>
        </div>      
      </article>
    
    </main>
  </div>)
}

export async function getStaticPaths() {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params)

  return {
    props: {
      postData
    }
  }
}