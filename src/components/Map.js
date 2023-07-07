import React, { useState } from "react";
import { useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import texts from "../data/texts.json";
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
        for (let idee of texts) {
            createMarker(mapboxMap, idee);
        } 
    }

    function createMarker(mapboxMap, idee) {
        const el = document.createElement("div");
        el.id = idee.id;
        el.className = "marker";
        el.style.backgroundColor = idee.color
        el.addEventListener("click", (e) => {
            clickMarker(e, idee);
        })

        new mapboxgl.Marker(el)
        .setLngLat(idee.coordinates)
        .addTo(mapboxMap)
    }

    function clickMarker(e, idee) {
        setShopPopUp(true);
        setPopUpContent(idee)

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
