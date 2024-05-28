'use client'

import MapComponent from '../../components/Map/map'
import style from '../../_lib/styles/home.module.css';
//import MapboxMap from '../../components/Map/mapboxmap';
import OutdoorComponent from '../../components/Map/outdooractive';


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
            <div className="w-25">
                <OutdoorComponent params={{
                        percorsoId: params.percorsoId
                    }} />
            </div>
        </div>

        </>
    )
}