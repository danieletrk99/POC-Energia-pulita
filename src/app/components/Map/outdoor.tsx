/*import Script from "next/script";
import { useEffect } from "react";

interface OutCompProps {
    id: string,
}

const OutdoorComponent: React.FC<OutCompProps> = ({id}) => {
    const outdoorActivityCallUrl = `https://www.outdooractive.com/it/embed/${id}/js?mw=false`;
    return(
        <Script id="outdoor-activity-script" type="text/javascript" strategy="lazyOnload" src={outdoorActivityCallUrl}></Script>
    );  
}

export default OutdoorComponent;
*/

'use client'

import { ScriptWithCleanup } from '@/app/_lib/utils/useScriptFunc';
import OutdoorComponent from '@/app/components/Map/outdoor';
import Script from 'next/script';


export default function PercorsoDetails({params} : {
    params: {
        percorsoId: string,
    }
})
{
    const id : string = params.percorsoId;    
    const outdoorActivityCallUrl = `https://www.outdooractive.com/it/embed/${id}/js?mw=false`;
    return(
        <>
        <div id="map-comp">            
            <p>Percorso n° {id}</p>
            {map(id)}
        </div>
        </>
    );
}

async function map(id: string){
    const outdoorActivityCallUrl = `https://www.outdooractive.com/it/embed/${id}/js?mw=false`;
    return(
        <Script id="outdoor-activity-script" type="text/javascript" strategy="lazyOnload" src={outdoorActivityCallUrl}></Script>
    );  
}

//<OutdoorComponent id={id}/>