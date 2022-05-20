import React, { useRef } from 'react';
import { YMaps, Map, Placemark, GeolocationControl, ObjectManager, RouteButton, ymaps } from 'react-yandex-maps';

export default function App() {
  const map = useRef(null);
  const apikey = "29cee40b-728e-42bd-ba3e-cc89d4ae9a46";
  const mapState = {
    center: [55.739625, 37.5412],
    zoom: 12
  };

  const addRoute = (ymaps) => {
    const pointA = "Санкт-Петербург";
    const pointB = "Москва, Красная площадь";

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
    <div className="App">
      <YMaps query={{ apikey }}>
        {/* <RouteButton options={{ float: 'right' }} /> */}
        <Map
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={map}
          onLoad={addRoute}
        ></Map>
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
