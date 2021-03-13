import { useRouter } from 'next/router';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Post: { slug }</p>
}

export async function getStaticPaths() {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug)
  
  return {
    props: {
      postData
    }
  }
}