'use client'
import OutdoorComponent from '@/app/components/Map/outdoor';


export default function PercorsoDetails({params} : {
    params: {
        percorsoId: string,
    }
})
{
    const id : string = params.percorsoId;
    return(
        <>
        <div id="map-comp">            
            <p>Percorso n° {id}</p>
            <OutdoorComponent id={id}/>
        </div>
        </>
    )
}