import './Card.css';

const Card = ({ data, size, img }) => {

    return (

        <div className={size} >
            <img className={img} src="https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/9d/3d/dd/9d3ddde2-d671-d9b4-3e21-e872b1529193/U0MtTVMtV1ctRmVlbGluZ19GZXN0aXZlLUFEQU1fSUQ9MTA1NzU5MDMzOC5wbmc.png/632x632cc.webp" alt="Card cap" />
            <div className="card-text card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.artist}</p>
            </div>
        </div>





    )
}

export default Card