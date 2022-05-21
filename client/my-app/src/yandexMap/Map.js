import React, { useRef, useState } from 'react';
import { YMaps, Map, Placemark, GeolocationControl, ObjectManager, RouteButton, ymaps } from 'react-yandex-maps';
import PlaceDiscription from '../components/PlaceDiscription/PlaceDiscription';

export default function App({road}) {

  const [show, setShow] = useState(false)

  const map = useRef(null);
  const apikey = "29cee40b-728e-42bd-ba3e-cc89d4ae9a46";
  const mapState = {
    center: [55.739625, 37.5412],
    zoom: 12,
    // controls: ['zoomControl', 'fullscreenControl'] 
  };

  const placeMark = [
    {
      geometry: [55.840427, 49.244449],
      balloonContentBody: 'Тут мой дом',
      preset: 'islands#redIcon',
    },
    {
      geometry: [55.802292, 49.104409],
      balloonContentBody: 'Кремлевская набережная',
      preset: 'islands#redIcon',
    },
    {
      geometry: [55.861289, 49.217559],
      balloonContentBody: 'Прикольная шавуха в свое время была',
      preset: 'islands#redIcon',
    },
    {
      geometry: [55.907161, 49.157366],
      balloonContentBody: 'Голубые озера. Очень крутое место.',
      preset: 'islands#redIcon',
    },
  ]

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
      <YMaps query={{ apikey }}>
        {/* <RouteButton options={{ float: 'right' }} /> */}
        <Map
          width='800px'
          height='500px'
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={map}
          onLoad={addRoute}
          // Placemark(geometry[, properties[, options]])

          // <Placemark
          // geometry={{
          // type: 'Point',
          // coordinates: coords,
          // } }
          // properties={{
          // iconContent: addressName,
          
          // }}
          // options={{
          // // The placemark's icon will stretch to fit its contents.
          // preset: 'islands#blackStretchyIcon',
          // // The placemark can be moved.
          // draggable: true,
          // }}
          // /> 


        >
      {placeMark.map((place) => <Placemark geometry={place.geometry}
       properties={{ balloonContentBody: place.balloonContentBody }}
       options={{ preset: place.preset }}
       onClick={(e) => showPlace()}
       />)}
        </Map>
       {show && <PlaceDiscription placeMark={ placeMark }/>}
      </YMaps>
    </div>
  );
}



// const Map1  = () => {


  // return (
  //   <YMaps>
  //     <div>
  //       <Map defaultState={{ center: [59.939402, 30.314264], zoom: 7, controls: [],}}>
  //         <Placemark geometry={[59.939402, 30.314264]} />
  //         <GeolocationControl options={{ float: 'left' }} />
  //         <ObjectManager
  //                 options={{
  //                   clusterize: true,
  //                   gridSize: 32,
  //                 }}
  //                 objects={{
    //                   openBalloonOnClick: true,
    //                   preset: 'islands#greenDotIcon',
    //                 }}
    //                 clusters={{
      //                   preset: 'islands#redClusterIcons',
      //                 }}
      //                 filter={object => object.id % 2 === 0}
      //                 // defaultFeatures={features}
      //                 modules={[
        //                   'objectManager.addon.objectsBalloon',
        //                   'objectManager.addon.objectsHint',
        //                 ]}
        //               />
        //         {/* <RoutePanel options={{ float: 'right' }} /> */}
        //         {/* <ListBox data={{ content: 'Select city' }}>
        //           <ListBoxItem data={{ content: 'Moscow' }} />
        //           <ListBoxItem data={{ content: 'Saint Petersburg', }} />
      //         </ListBox> */}
      //       </Map>
      //     </div>
      //   </YMaps>
      // );
      
    // }

// export default App;
