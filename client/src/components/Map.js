import React from "react";
import { useState, useEffect } from "react";
import mapboxgl from 'mapbox-gl';

function Map() {
    const [map, setMap] = useState(undefined);

    function createMap() {
        mapboxgl.accessToken = "pk.eyJ1IjoibWxvZWxrZXMiLCJhIjoiY2w0ZHdjemIzMGNtaTNpbmFjNWxoMjgzcyJ9.KKxu07GlP5ftDrDSTGycPQ"
        let mapboxMap = new mapboxgl.Map({
            container: "map-content",
            style: 'mapbox://styles/mapbox/light-v10',
            center: [8.680000, 50.110000],
            zoom: 12
        })

        const nav = new mapboxgl.NavigationControl();
        mapboxMap.addControl(nav, "bottom-right");

        setMap(mapboxMap);
    }

    function createMarker() {
        let marker = new mapboxgl.Marker({
            color: "rgb(203, 196, 188)"
        }).setLngLat(8.640000, 50.170000)
        .addTo(map)

        marker.getElement().addEventListener("click", (e) => {
            console.log("showArticle");
        })
    }

    useEffect(() => {
        createMap();
        // createMarker();
    }, []);

    return (
        <div className="Map">
            <div id="map-content"></div>
        </div>
    )
}

export default Map;
