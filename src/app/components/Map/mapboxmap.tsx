import { useEffect, useRef, useState } from 'react';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
var jsonMap = require ('./mygeodata_merged.json');
import style from '../../_lib/styles/home.module.css';


const MapboxMap= () => {
    const ref = useRef(null);
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (ref.current && !map) {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZGFueXRyazk5IiwiYSI6ImNsd29uYjgycDA0cmMybHAxMjFqYmp6dXEifQ.hTkbPKsHNCJJNaXbkKMK9g';

        const map = new mapboxgl.Map({
            container: ref.current,
            style: "mapbox://styles/mapbox/outdoors-v12",
            center: [127.20476, 35.44092],
            zoom: 12
        });

        map.on('load', ()=> {
            map.addSource('route',{
                'type': 'geojson',
                'data': jsonMap
            });
            map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#000000',
                    'line-width': 6
                }
            });
            map.addControl(new mapboxgl.NavigationControl());
        });
    
        

        setMap(map);
        }
    }, [ref, map]);

    return(
        <div
        className={style.map} ref={ref}
        />
    );
}

export default MapboxMap;