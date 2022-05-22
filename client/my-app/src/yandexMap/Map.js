import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { YMaps, Map, Placemark, GeolocationControl, ObjectManager, RouteButton, ymaps } from 'react-yandex-maps';
import FormAddMark from '../components/FormAddMark/FormAddMark';
import Button from '@mui/material/Button';


export default function App({road}) {

  const [show, setShow] = useState(false)

  const places = useSelector(store => store.places);

  const map = useRef(null);
  const apikey = "29cee40b-728e-42bd-ba3e-cc89d4ae9a46";
  const mapState = {
    center: [55.739625, 37.5412],
    zoom: 12,
  };

  const addRoute = (ymaps) => {
    const pointA = road.from;
    const pointB = road.destination;

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: "car"
        }
      },
      {
        boundsAutoApply: true
      }
    );

    map.current.geoObjects.add(multiRoute);
  };

  const showPlace = () => {
    setShow(!show)
  }

  return (
    <div className="mapCard">
          <div>
            <Button onClick={(e) => showPlace()}>Создать метку</Button> 
          {show && <FormAddMark/>}
          </div>
      <YMaps query={{ apikey }}>
        <Map
          width='800px'
          height='500px'
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={map}
          onLoad={addRoute}              
        >

      {places.map((place) => 
        <Placemark geometry={place.geometry}
        properties={{ 
          balloonContentHeader: place.title,
          balloonContentBody: place.info,
          balloonContentFooter: place.adress
        }}
        options={{ preset: place.preset }}
        key={place.id} 
        />
       )}

        </Map>
      </YMaps>
    </div>
  );
}

