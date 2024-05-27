'use client'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Percorsi(){
    return(
        <>
        <h1>Percorsi disponibili:</h1>
            <ul className="list-group w-25 rouded-top rounded-bottom">
                <li><a href="percorsi/1" className="list-group-item list-group-item-action">Percorso Carega</a></li>
                <li className="list-group-item list-group-item-action">Placeholder 2</li>
                <li className="list-group-item list-group-item-action">Placeholder 3</li>
                <li className="list-group-item list-group-item-action">Placeholder 4</li>
            </ul>
        </>
    )
}