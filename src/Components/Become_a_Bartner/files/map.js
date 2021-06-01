import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { useState, useRef, useCallback } from 'react'
import MapGL, {Marker, NavigationControl,GeolocateControl} from 'react-map-gl';
import Pin from './Pin.js'
import ControlPanel from './ControlPanel.js' 
import Geocoder from 'react-map-gl-geocoder'
import * as mapboxgl from 'mapbox-gl';
 
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN ='pk.eyJ1IjoibW9oYW1lZHNoZXJiZW55IiwiYSI6ImNrbjh3Z2YycjBtM2cydm1xY3p2bTIzeWcifQ.BR7UFEI1yfjrKRDxMNrRMQ';

const navStyle = {
  position: 'absolute',
  top: 100,
  left: 0,
  padding: '10px'
};
const nstyle = {
  
  top: 100,
  
};
const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10
};
const positionOptions = {enableHighAccuracy: true};
const Map = (props) => {
 
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  const [marker, setMarker] = useState({
    latitude: viewport.latitude,
    longitude: viewport.longitude
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => {
      
     props.address(newViewport.latitude,newViewport.longitude)

      setViewport(newViewport)},
    []
  );
 
  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
     props.address(newViewport.latitude,newViewport.longitude)
      
        setMarker({
          latitude:newViewport.latitude,
          longitude:newViewport.longitude
        })
        console.log(marker)
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    []
  );

  const [events, logEvents] = useState({});

  const onMarkerDragStart = useCallback(event => {
    logEvents(_events => ({..._events, onDragStart: event.lngLat}));
    
  }, []);

  const onMarkerDrag = useCallback(event => {
    logEvents(_events => ({..._events, onDrag: event.lngLat}));
  }, []);

  const onMarkerDragEnd = useCallback(event => {
    logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    });
    props.address(marker.latitude,marker.longitude)


  }, []);
  const handleGetCurrentLocation = useCallback(
    (location) => {
      props.address(location.latitude,location.longitude)
      

    })
  
    const MapQueryResult = useCallback(res => {
      console.log(res.result.place_name);
       props.MapResult(res.result.place_name);
    }, []);
  return (
    <div style={{ height: "70vh" }}>
      <MapGL
       ref={mapRef}
       {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
       
      >
      
       <Geocoder
       className="geocoder"
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="center"
          reverseGeocode={true}
         
         onResult={MapQueryResult}

        />
        <GeolocateControl
        style={geolocateStyle}
        positionOptions={positionOptions}
        trackUserLocation
        auto
        onViewportChange={handleGetCurrentLocation}
        
      />
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
           
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
        >
          <Pin size={40} />
        </Marker>

        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
       
      </MapGL>
  
    </div>
  );
};
 
export default Map