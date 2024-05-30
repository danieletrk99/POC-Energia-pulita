'use client'

import { useEffect, useRef } from 'react';


export default function PercorsoDetails({params} : {
    params: {
        percorsoId: string,
    }
})
{
    const id : string = params.percorsoId;
    const outdoorActivityCallUrl = `https://www.outdooractive.com/it/embed/${id}/js?mw=false`;
    const divRef = useRef<HTMLDivElement>(null);
    const container = divRef.current!;
    useEffect(() => {
        const script = document.createElement('script');
        script.src = outdoorActivityCallUrl;
        script.async = true;
        container.appendChild(script);

        return() => {
            container.removeChild(script); 
        }
    }, [outdoorActivityCallUrl, container])

    return(
            <div ref={divRef}>
            <p>Percorso n° {id}</p>
            </div>
    );
}

/*
function map(id: string){
    const outdoorActivityCallUrl = `https://www.outdooractive.com/it/embed/${id}/js?mw=false`;
    return(
            <Script id="outdoor-activity-script" type="text/javascript" strategy="lazyOnload" src={outdoorActivityCallUrl}/>
    );  
}
*/


//<OutdoorComponent id={id}/>