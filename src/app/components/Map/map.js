'use client'

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet';
import style from '../../_lib/styles/home.module.css';

export default function MapComponent(){
    return(
        <>
        <div>
            <MapContainer className={style.map} center={[45.7286,11.1288]} zoom={13} scrollWheelZoom={true}>
                <TileLayer 
                attribution=<a href="https://www.openstreetmap.org/copyright/">OpenStreetMap</a> 
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </MapContainer>
        </div>
        </>
    )
}