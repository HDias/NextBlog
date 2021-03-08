import Link from 'next/link';
import Carousel from '../components/carousel'
import Image from 'next/image'

function Home({ posts }) {
    return (<div>
        <Carousel></Carousel>
        <div class="row">
            {posts.map((post) => (
                <div class="col-4 d-flex align-items-stretch mb-3">
                    <div class="card mb-3 h-100 mr-2">
                        <div class="row g-0 h-100">
                            <div class="col-md-4">
                                <Image
                                    className="card-img-top"
                                    src={post.thumbnail}
                                    alt={post.title}
                                    width={75}
                                    height={75}
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body h-100 position-relative">
                                    <h5 class="card-title">{post.title}</h5>
                                    <p class="card-text">{post.title}</p>
                                    <div class="pb-2 d-grid gap-2 fixed-bottom position-absolute bottom-0">
                                        <a href="#" class="btn btn-sm btn-primary">Acessar</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>)
}

export function getStaticProps() {
    const posts = [
        {
            "thumbnail": "/posts/post1.png",
            "title": "APGAR – a nota que o bebê recebe ao nascer | IsaDoula Explica"
        },
        {
            "thumbnail": "/posts/post2.png",
            "title": "Como entrar em Trabalho de Parto?"
        },
        {
            "thumbnail": "/posts/post1.png",
            "title": "APGAR – a nota que o bebê recebe ao nascer | IsaDoula Explica"
        },
        {
            "thumbnail": "/posts/post2.png",
            "title": "Como entrar em Trabalho de Parto?"
        },
        {
            "thumbnail": "/posts/post2.png",
            "title": "Como entrar em Trabalho de Parto?"
        }
    ];

    return {
      props: {
        posts
      }
    }
  }

export default Home;