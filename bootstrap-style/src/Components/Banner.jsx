export default function Banner(){
    return(
        <div id="carouselNaveg" className="carousel slide">
            <div className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://fastly.picsum.photos/id/574/1117/300.jpg?hmac=hZKD4YzSma4tPFOc3KM3yMg9LAY1HhkU306OPg3THuM" alt="#"
                        />
                    </div>
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://fastly.picsum.photos/id/464/1117/300.jpg?hmac=iXwUZcNLcXWJi-1Zrdlmfh8Cif33FJHjsJArVild8XI" alt="#"
                        />
                    </div>
                </div>                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselNaveg" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselNaveg" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>            
        </div>
    );
}