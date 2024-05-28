import Script from "next/script";
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