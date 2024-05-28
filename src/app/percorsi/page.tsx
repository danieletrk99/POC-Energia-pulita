'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { percorsi } from '../_lib/styles/percorsi-array';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Percorsi(){

        return(
            <>
            <h1>Percorsi disponibili:</h1>
                <ul className="list-group w-25 rouded-top rounded-bottom">
                    {arrayPercorsi}
                </ul>
            </>
        )
}

const arrayPercorsi = percorsi.map((item, index) => {
    return(
    <li key={index}>
        <Link href={`/percorsi/${item}`} className="list-group-item list-group-item-action">{item}</Link>
    </li>
    )
})
