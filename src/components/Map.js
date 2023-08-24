import React, { useState } from "react";
import { useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import ideasData from "../data/ideasData.json";
import PopUp from "./PopUp.js"

function Map() {
    const [showPopUp, setShowPopUp] = useState(false);
    const [popUpContent, setPopUpContent] = useState(undefined);
    const [clickedMarkerPosition, setClickedMarkerPosition] = useState({})

    function initializeMap() {
        const mapboxMap = createMap();
        createAllMarkers(mapboxMap);
    }

    function createMap() {
        mapboxgl.accessToken = "pk.eyJ1IjoibWxvZWxrZXMiLCJhIjoiY2w0ZHdjemIzMGNtaTNpbmFjNWxoMjgzcyJ9.KKxu07GlP5ftDrDSTGycPQ"
        let mapboxMap = new mapboxgl.Map({
            container: "map-content",
            style: 'mapbox://styles/mapbox/light-v10',
            center: [8.680000, 50.110000],
            zoom: 12,
            attributionControl: false
        })

        mapboxMap.addControl(new mapboxgl.AttributionControl(), "bottom-left");

        mapboxMap.on("click", clickMap);

        return mapboxMap;
    }

    function createAllMarkers(mapboxMap) {
        for (let ideasEntry of ideasData) {
            createMarkersForIdeasEntry(mapboxMap, ideasEntry);
        } 
    }

    function createMarkersForIdeasEntry(mapboxMap, ideasEntry) {
        for (let coordinate of ideasEntry.coordinates) {
            const el = document.createElement("div");
            el.id = ideasEntry.id;
            el.className = "marker";
            el.style.backgroundColor = ideasEntry.color
            el.addEventListener("click", (e) => {
                clickMarker(e, ideasEntry);
            })

            new mapboxgl.Marker(el)
            .setLngLat(coordinate)
            .addTo(mapboxMap)
        }
    }

    function clickMarker(e, ideasEntry) {
        setClickedMarkerPosition({ x: e.target.getBoundingClientRect().x, y: e.target.getBoundingClientRect().y })
        setShowPopUp(true);
        setPopUpContent(ideasEntry)
        e.stopPropagation();
    }
 
    function clickMap() {
        setShowPopUp(false);
    }

    useEffect(() => {
        initializeMap();
    }, []);

    return (
        <div className="Map">
            {showPopUp && <PopUp popUpContent={popUpContent} clickedMarkerPosition={clickedMarkerPosition}/>}
            <div id="map-content"></div>
        </div>
    )
}

export default Map;
