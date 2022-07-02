import React from "react";
import { useState, useEffect } from "react";
import mapboxgl from 'mapbox-gl';

function Map(props) {
    const [map, setMap] = useState(undefined);

    function initializeMap() {
        const mapboxMap = createMap();
        createMarker(mapboxMap);
    }

    function clickMarker() {
        props.clickMarker();
    }

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
        return mapboxMap;
    }

    function createMarker(mapboxMap) {
        let marker = new mapboxgl.Marker({
            color: "rgb(238, 238, 30)"
        }).setLngLat({lng: 8.680000, lat: 50.110000})
        .addTo(mapboxMap)

        marker.getElement().addEventListener("click", (e) => {
            clickMarker();
        })
    }

    useEffect(() => {
        initializeMap();
    }, []);

    return (
        <div className="Map">
            <div id="map-content"></div>
        </div>
    )
}

export default Map;
