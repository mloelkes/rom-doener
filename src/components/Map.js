import React, { useState } from "react";
import { useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import ideasData from "../data/ideasData.json";
import PopUp from "./PopUp.js"

function Map() {
    const [showPopUp, setShopPopUp] = useState(false);
    const [popUpContent, setPopUpContent] = useState(undefined);

    function initializeMap() {
        const mapboxMap = createMap();
        createMarkers(mapboxMap);
    }

    function createMap() {
        mapboxgl.accessToken = "pk.eyJ1IjoibWxvZWxrZXMiLCJhIjoiY2w0ZHdjemIzMGNtaTNpbmFjNWxoMjgzcyJ9.KKxu07GlP5ftDrDSTGycPQ"
        let mapboxMap = new mapboxgl.Map({
            container: "map-content",
            style: 'mapbox://styles/mapbox/light-v10',
            center: [8.680000, 50.110000],
            zoom: 12
        })

        // Comment in to show navigation controls
        // const nav = new mapboxgl.NavigationControl();
        // mapboxMap.addControl(nav, "bottom-right");

        mapboxMap.on("click", clickMap);

        return mapboxMap;
    }

    function createMarkers(mapboxMap) {
        for (let ideasEntry of ideasData) {
            createMarker(mapboxMap, ideasEntry);
        } 
    }

    function createMarker(mapboxMap, ideasEntry) {
        const el = document.createElement("div");
        el.id = ideasEntry.id;
        el.className = "marker";
        el.style.backgroundColor = ideasEntry.color
        el.addEventListener("click", (e) => {
            clickMarker(e, ideasEntry);
        })

        new mapboxgl.Marker(el)
        .setLngLat(ideasEntry.coordinates)
        .addTo(mapboxMap)
    }

    function clickMarker(e, ideasEntry) {
        setShopPopUp(true);
        setPopUpContent(ideasEntry)

        e.stopPropagation();
    }
 
    function clickMap() {
        setShopPopUp(false);
    }

    useEffect(() => {
        initializeMap();
    }, []);

    return (
        <div className="Map">
            {showPopUp && <PopUp popUpContent= {popUpContent}/>}
            <div id="map-content"></div>
        </div>
    )
}

export default Map;
