import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OutdoorComponent({params}: {
    params: {
        percorsoId: string;
    }
}){ 
    const outdoorActivityCallUrl = `https://www.outdooractive.com/it/embed/${params.percorsoId}/js?mw=false`;
    return(
        <Script type="text/javascript" src={outdoorActivityCallUrl}></Script>
    );
}