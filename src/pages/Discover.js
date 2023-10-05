import Map, { Marker, Popup } from "react-map-gl";
import Footer from "../components/Footer";
import ideasData from "../data/ideasData.json";
import { useEffect, useState } from "react";
import Pin from "../components/Pin";
import PopUpContent from "../components/PopUpContent";

function Discover() {
    const [markers, setMarkers] = useState([]);
    const [popUps, setPopUps] = useState([]);

    function createAllMarkers() {
        const markers = []

        ideasData.forEach(ideasEntry => {
            ideasEntry.coordinates.forEach((coordinate) => {
                const marker = <Marker 
                    key={`${ideasEntry.id}_${coordinate.lng}_${coordinate.lat}`}
                    id={ideasEntry.id} 
                    longitude={coordinate.lng} 
                    latitude={coordinate.lat}
                    showZoom="true"
                    onClick={(e) => {
                        e.originalEvent.stopPropagation(); 
                        clickMarker(ideasEntry, coordinate);
                    }}
                >
                    <Pin color={ideasEntry.color} />
                </Marker>

                markers.push(marker);
            })
        })

        return markers;
    }

    function clickMarker(ideasEntry, coordinate) {
        const popUp = <Popup 
            key={ideasEntry.id} 
            longitude={coordinate.lng} 
            latitude={coordinate.lat} 
            maxWidth={`${definePopUpMaxWidth()}vw`}
            offset={60} 
            closeButton={false} 
            closeOnClick={false}
        >
            <PopUpContent ideaData={ideasEntry} />
        </Popup>

        setPopUps([popUp]);
    }

    function clickMap() {
        setPopUps([]);
    }

    function definePopUpMaxWidth() {
        if (window.innerWidth < 429) return 60;
        return 50;
    }

    useEffect(() => {
        setMarkers(() => createAllMarkers());
    }, [])

    return (
        <div className="Discover">
            <Map
                className="Map"
                mapboxAccessToken="pk.eyJ1IjoibWxvZWxrZXMiLCJhIjoiY2w0ZHdjemIzMGNtaTNpbmFjNWxoMjgzcyJ9.KKxu07GlP5ftDrDSTGycPQ"
                initialViewState={{
                    longitude: 8.680000,
                    latitude: 50.110000,
                    zoom: 12
                }}
                mapStyle="mapbox://styles/mapbox/light-v10"
                onClick={clickMap}
            >
                { markers }
                { popUps }
            </Map>
            <Footer />
        </div>
    )
}

export default Discover;
