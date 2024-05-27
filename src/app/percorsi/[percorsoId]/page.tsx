'use client'

import MapComponent from '../../components/Map/map'
import style from '../../_lib/styles/home.module.css';
import MapboxMap from '../../components/Map/mapboxmap';


export default function Percorso({params} : {
    params: {
        percorsoId: string,
    }
})
{
    return(
        <>
        <div>
            <p>Percorso n° {params.percorsoId}</p>
        </div>
        <div className={style.flex100}>
            <p>Leaflet map</p>
            <MapComponent />
        </div>
        <div className={style.flex50}>        
            <p>Mapboxmap</p>
            <MapboxMap />
        </div>

        </>
    )
}