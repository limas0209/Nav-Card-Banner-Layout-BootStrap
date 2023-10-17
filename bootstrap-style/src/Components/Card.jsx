export default function Card(){
    return(
        <div className="d-md-flex mt-4 justify-content-around">
            <div className="card col-md-5">
                <img src="https://fastly.picsum.photos/id/961/330/170.jpg?hmac=siqx5MvTBKRniIOGaHF-_VOKVFsQAGtYmfX84uhWxxw" alt=""/>

                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <a href="#" className="link-success text-center mb-4">Veja Mais</a>
            </div>

            <div className="card col-md-5">
                <img src="https://fastly.picsum.photos/id/392/330/170.jpg?hmac=ogUlln984tdvmKfejr0RXH-6ongLpPzjlebiQsDrrjA" alt=""/>

                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <a href="#" className="link-success text-center mb-4">Veja Mais</a>
            </div>
        </div>
    );
}