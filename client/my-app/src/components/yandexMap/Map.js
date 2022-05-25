import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default function App({road, coordCentr}) {

  const places = useSelector(store => store.places);
  
  // const coordCentr = useSelector(store => store.coordCentr);

  // console.log(coordCentr)

  const map = useRef(null);
  const apikey = "29cee40b-728e-42bd-ba3e-cc89d4ae9a46";

  const mapState = {
    center: coordCentr,
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

  return (
    <div className="mapCard">

      <YMaps query={{ apikey }}>
        <Map
          width='1100px'
          height='500px'
          // margin-left='5%'
          // margin-top='10%'
          border
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

