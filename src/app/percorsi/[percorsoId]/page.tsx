'use client'

import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';


export default function PercorsoDetails({params} : {
    params: {
        percorsoId: string,
    }
})
{
    const router = useRouter();
    const id : string = params.percorsoId;
    return(

        <>           
            <p>Percorso n° {id}</p>
            {map(id)}
        </>
    );
}

export function map(id: string){
    const outdoorActivityCallUrl = `https://www.outdooractive.com/it/embed/${id}/js?mw=false`;
    return(
            <Script id="outdoor-activity-script" type="text/javascript" strategy="lazyOnload" src={outdoorActivityCallUrl}/>
    );  
}

//<OutdoorComponent id={id}/>