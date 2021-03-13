import Carousel from '../components/carousel';
import { getAllPosts } from '../lib/posts/posts';

function Home({ posts }) {
    return (<div>
        <main class="container">
            <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div class="col-md-6 px-0">
                    <h1 class="display-4 fst-italic">Você não precisa ter medo da dor no parto.</h1>
                    <p class="lead my-3">Descubra com esse simples EBOOK que você pode sim tornar o seu parto um momento único.</p>
                    <p class="lead mb-0"><a href="#" class="text-white fw-bold">Baixe aqui seu EBOOK...</a></p>
                </div>
            </div>
            <div class="row mb-2">
                {posts.map((post) => (
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">World</strong>
                            <h3 class="mb-0">{post.title}</h3>
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href={'/blog/' + post.slug} class="stretched-link">Continue reading</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>

    </div>)
}

export function getStaticProps() {
    const posts = getAllPosts();
    
    return {
        props: {
            posts
        }
    }
}

export default Home;