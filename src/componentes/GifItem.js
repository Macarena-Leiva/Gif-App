export const GifItem = ({id,title,url}) =>{
    /* console.log(id,title,url) */

    return(
        <div className="card">
            <img className="gif" src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}