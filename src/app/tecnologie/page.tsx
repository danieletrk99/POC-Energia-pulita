import 'bootstrap/dist/css/bootstrap.min.css';

export default function Tecnologie(){
    return(
        <>
            <h1>Tecnologie proposte:</h1>
                <ul className='list-group'>
                <li><a href="https://nextjs.org/" target="_blank" rel="noopener" className="list-group-item list-group-item-action">NextJS</a></li>
                <li><a href="https://www.openstreetmap.org/about" target="_blank"rel="noopener"className="list-group-item list-group-item-action">OpenStreetsMap API</a></li>
                <li><a href="https://www.mapbox.com/" target="_blank" rel="noopener"className="list-group-item list-group-item-action">MapBox per fornire i vector tiles per la creazione di percorsi</a></li>
                <li><a href="https://www.maptiler.com/maps/outdoor/" target="_blank" rel="noopener"className="list-group-item list-group-item-action">MapTiler API</a></li>
                <li><a href="https://getbootstrap.com/" target="_blank" rel="noopener"className="list-group-item list-group-item-action">Bootstrap 5</a></li>
            </ul>
        </>
    )
}