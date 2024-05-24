import { Map, View } from "ol"
import { OSM, XYZ } from "ol/source"
import MapComponent from '../../components/Map/map'
import style from '../../_lib/styles/home.module.css';


export default function Percorso({params} : {
    params: {
        percorsoId: string,
    }
})
{
    return(
        <>
        <div className={style.column25}>
            <p>Percorso n° {params.percorsoId}</p>
        </div>
        <div className={style.flex50}>
            <MapComponent />
        </div>
        </>
    )
}