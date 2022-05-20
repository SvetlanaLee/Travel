import React from 'react';
import { YMaps, Map, Placemark, GeolocationControl, ObjectManager, RoutePanel, RouteButton, ListBox, ListBoxItem } from 'react-yandex-maps';

const Map1  = () => {
  return (
    <YMaps>
      <div>
        <Map defaultState={{ center: [55.751574, 37.573856], zoom: 5, controls: [],}}>
          <Placemark geometry={[54.684758, 37.738521]} />
          <GeolocationControl options={{ float: 'left' }} />
          <RouteButton options={{ float: 'right' }} />
          <ObjectManager
                  options={{
                    clusterize: true,
                    gridSize: 32,
                  }}
                  objects={{
                    openBalloonOnClick: true,
                    preset: 'islands#greenDotIcon',
                  }}
                  clusters={{
                    preset: 'islands#redClusterIcons',
                  }}
                  filter={object => object.id % 2 === 0}
                  // defaultFeatures={features}
                  modules={[
                    'objectManager.addon.objectsBalloon',
                    'objectManager.addon.objectsHint',
                  ]}
                />
          {/* <RoutePanel options={{ float: 'right' }} /> */}
          {/* <ListBox data={{ content: 'Select city' }}>
            <ListBoxItem data={{ content: 'Moscow' }} />
            <ListBoxItem data={{ content: 'Saint Petersburg', }} />
          </ListBox> */}
        </Map>
      </div>
    </YMaps>
  );

}

export default Map1;
