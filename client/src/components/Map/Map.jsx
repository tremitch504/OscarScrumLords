/* eslint-disable multiline-ternary */
import React, { useEffect } from 'react'; 
import { GoogleMap, useLoadScript, Marker, InfoWindow, BicyclingLayer } from '@react-google-maps/api'; 
import styled from 'styled-components';
import axios from 'axios';
import Search from './Search.jsx'; 
import mapStyles from '../styles/mapStyles.js'; 
import MapToolbar from './MapToolbar.jsx';
import MarkerDropdown from './MarkerDropdown.jsx';
import NewEvent from './EntryForms/NewEvent.jsx';
import RenderInfo from './RenderInfo.jsx';

import cone from '../../assets/stockcone.jpg';
import shopImg from '../../assets/shop.jpg';
import eventImg from '../../assets/Event.jpg';
 
const libraries = ['places']; //    library for places api
const mapContainerStyle = {
  // width: '100vw', 
  height: '100vh',
};
// position of map when loaded  
const center = {
  lat: 29.951065,  
  lng: -90.071533
};
/**
 * options for customizing map
 * styles: imported from mapStyles.js
 * disableDefault: toggle to remove unwanted UI elements, manually add UI´s below
 */
const options = { 
  styles: mapStyles, 
  disableDefaultUI: false, 
  zoomControl: true,
};
/**
 * styles for nola ❤️´s 🚲
 */
const H1 = styled.h2`
    position: absolute; 
    top: 50rem;
    left: 1rem;
    color: black; 
    z-index: 10; 
    margin: 0;
    padding: 0,
`
;



const Map = ({events, setEvents, loggedIn, createEvent}) => {
  const { isLoaded, loadError } = useLoadScript({ 
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY, 
    libraries, //                                   enable additional libraries for 'places' api
  }); 
  // state for markers 
  // const [markers, setMarkers] = React.useState([]); 
  const [selected, setSelected] = React.useState(null); 
  const [shops, setShops] = React.useState([]);
  const [dropdown, setDropdown] = React.useState(false);
  const [form, setForm] = React.useState(null);
  const [activeLayers, setActiveLayers] = React.useState({
    hazards: true,
    poi: true,
    shops: true,
    events: true
  });

  useEffect(() => {
    axios.get('/shops')
      .then(({ data: { results } }) => {
        const shopArray = results.map(({name, formatted_address: formattedAddress, rating, opening_hours: openingHours, geometry: { location: { lat, lng }}}) => {
          return {
            name,
            lat,
            lng,
            formattedAddress,
            rating,
            time: new Date(),
            kind: 'shop',
            openingHours
            // open_now
          };
        });
        setShops(shopArray);
      });
  }, []);
  /**
   * useCallBack hook allows you to create a function that will always retain the same value
   * setMarkers gets called when the cone gets placed
   * receive current state and return a new version of it 
   * spread in the current marker with cords given and create and new version of state
   * every time you click on map it renders a new version of state
   */  
  const onMapClick = (event) => {
    dropdown && setForm({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date(),
      type: dropdown
    });
  }; 



  /**
   * mapRef: retain a reference of the actual map instance. used to pan and zoom on map when searching
   * OnMapLoad: produces the value of the map and saves it to a variable 
   */
  const mapRef = React.useRef();  
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map; 
  }, []); 
  const panTo = React.useCallback(({lat, lng}) => { //                     lat and lng that user whats to pan to
    mapRef.current.panTo({lat, lng}); //                                   call panTo function with same params
    mapRef.current.setZoom(18); //                                         zooms into location that is is searched
  }, []); 
  if (loadError) { 
    return 'error loading map';
  } else if (!isLoaded) {
    return 'Loading Maps';
  }  
  return (
    <div> 
      <MapToolbar activeLayers={activeLayers} setActiveLayers={setActiveLayers} />
      <MarkerDropdown dropdown={dropdown} setDropdown={setDropdown} loggedIn={loggedIn}/>
      
      <H1> nola ❤️´s 🚲 </H1>
      <Search panTo={panTo} />   
      <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={12} 
        center={center} 
        options={options} 
        onClick={onMapClick} 
        onLoad={onMapLoad}
      >
        <BicyclingLayer autoUpdate />
        {activeLayers.shops && shops.map(shop => <Marker key={Math.random()}
          position={{ lat: shop.lat, lng: shop.lng }} 
          icon={{ //                                        options for centering and resizing pin 
            url: shopImg,
            scaledSize: new window.google.maps.Size(33, 33),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15), 
          }}
          onClick={() => { 
            setSelected(shop); //                       onlick passes in the marker being clicked, rendered (stores marker in selected state)
          }}
        />
        )}

        {activeLayers.events && events.map(event => <Marker key={Math.random()}
          position={{ lat: Number(event.lat), lng: Number(event.lng) }} 
          icon={{ //                                        options for centering and resizing pin 
            url: eventImg,
            scaledSize: new window.google.maps.Size(33, 33),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15), 
          }}
          onClick={() => { 
            console.log(event);
            setSelected(event); //                       onlick passes in the marker being clicked, rendered (stores marker in selected state)
          }}
        />
        )}
        

        {selected && (
          <InfoWindow 
            position={{ lat: selected.lat, lng: selected.lng }} 
            onCloseClick={() => {
              setSelected(null); 
            }}
          >
            <RenderInfo selected={selected}/>
          </InfoWindow>
        )}

        {form && dropdown ? (
          <InfoWindow 
            position={{ lat: form.lat, lng: form.lng }} 
            onCloseClick={() => {
              setForm(null); 
            }}
          >
            <div>
              <h2>add your event!!</h2>
              <NewEvent form={form} createEvent={createEvent} />

            </div>


          </InfoWindow>
        ) : null}

      </GoogleMap>
    </div>
  );
}; 
export default Map;
