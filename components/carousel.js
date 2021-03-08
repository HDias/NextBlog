 
function Carousel({ image }) {
    return (<div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img 
                    src="/back-to-ebook-2.jpg" 
                    class="d-block w-100" 
                />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Não precisa ter Medo da Dor no Parto</h5>
                    <p>Descubra com esse simples EBOOK que você pode sim tornar o seu parto um momento único..</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

    </div>);
}

export default Carousel;