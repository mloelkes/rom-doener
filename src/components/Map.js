import React from "react";
import { useEffect } from "react";
import mapboxgl from 'mapbox-gl';
import { interviews } from "../data.js";
import { Link } from "react-router-dom";
import PopUp from "./PopUp.js"
import ReactDOM from "react-dom"

function Map() {
    let popUp = undefined;

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
        for (let key in interviews) {
            createMarker(mapboxMap, interviews[key]);
        } 
    }

    function createMarker(mapboxMap, interview) {
        const el = document.createElement("div");
        el.id = interview.id;
        el.className = "marker";
        el.style.backgroundColor = interview.color
        el.addEventListener("click", (e) => {
            clickMarker(e, mapboxMap, interview);
        })

        new mapboxgl.Marker(el)
        .setLngLat(interview.coordinates)
        .addTo(mapboxMap)
    }

    function clickMarker(e, mapboxMap, interview) {
        e.stopPropagation();

        createPopup(mapboxMap, interview);
    }

    function createPopup(mapboxMap, interview) {
        if (popUp) popUp.remove();

        let popUpContainer = document.createElement("div");
        ReactDOM.render(
            <PopUp interview={interview}/>, popUpContainer
        )

        popUp = new mapboxgl.Popup({closeOnClick: true, closeButton: false, offset: 60, anchor: "left"})    
        .setLngLat(interview.coordinates)
        .setDOMContent(popUpContainer)
        .addTo(mapboxMap)
    }
 
    function clickMap() {
        // click Map
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
