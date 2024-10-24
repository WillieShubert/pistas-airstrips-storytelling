import React, { useState, useRef, useEffect } from 'react';
import { transformRequest } from './map-utils';
import { useScrollFunctionality, useHandleResize } from './map-hooks';
import ReactMapGL, { Marker } from 'react-map-gl';
import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = (props) => {
  const { chapters, accessToken, mapStyle, showMarkers, setCurrentChapter, externalLayers, currentChapterId, currentAction } = props;
  const [loaded, setLoaded] = useState(false);
  const [externalLayersOpacity, setExternalLayersOpacity] = useState({});
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const initialLocation = chapters[0].location;
  const [initialLongitude, initialLatitude] = initialLocation.center;
  const [markerPosition, setMarkerPosition] = useState({
    latitude: initialLatitude,
    longitude: initialLongitude
  });
  const initialViewport = {
    initialViewState: {
      latitude: initialLatitude,
      longitude: initialLongitude,
      pitch: initialLocation.pitch,
      bearing: initialLocation.bearing,
      zoom: initialLocation.zoom
    }
  };
  const [viewport, setViewport] = useState(initialViewport);
  const updateViewport = (newViewport) =>
    setViewport({ ...viewport, ...newViewport });

  useHandleResize(updateViewport);

  // Set map when loaded
  useEffect(() => {
    if (loaded && mapRef.current) {
      setMap(mapRef.current.getMap());
    }
    return undefined;
  }, [mapRef, loaded, setMap]);

  useScrollFunctionality({
    loaded,
    map,
    chapters,
    showMarkers,
    setCurrentChapter,
    setMarkerPosition,
    setExternalLayersOpacity,
    externalLayersOpacity,
    externalLayers,
    currentAction,
    currentChapterId
  });
  return (
    <div ref={mapContainerRef} className="mapboxgl-map">
      <ReactMapGL
        ref={mapRef}
        width="100%"
        height="100%"
        mapboxApiAccessToken={accessToken}
        mapStyle={mapStyle}
        transformRequest={transformRequest}
        onLoad={() => setLoaded(true)}
        onViewportChange={updateViewport}
        onResize={updateViewport}
        scrollZoom={false}
        dragPan={false}
        dragRotate={false}
        doubleClickZoom={false}
        {...viewport}
      >
        {showMarkers && (
          <Marker
            longitude={markerPosition.longitude}
            latitude={markerPosition.latitude}
          />
        )}
      </ReactMapGL>
    </div>
  );
}

export default Map;