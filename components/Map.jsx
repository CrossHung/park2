import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { locations } from "../locations";
import MyGreatPlaceWithHover from "@/components/my_great_place_with_hover";
import { K_SIZE } from "@/components/my_great_place_with_hover_styles";
import { Wrapper } from "@googlemaps/react-wrapper";

const mapCenter = { lat: 38.91131141655464, lng: -77.04375138092037 };
const marker = ({ id }) => (
  <div key={id} style={markerStyle}>
    {id}
  </div>
);

const markers = (locations, handler) => {
  return locations.map((location) => (
    <MyGreatPlaceWithHover
      key={location.id}
      text={location.id}
      lat={location.lat}
      lng={location.lng}
    />
  ));
};

// const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
//   const [isCard, setIsCard] = useState(false);
//   const [cardData, setCardData] = useState(null);
//   const [mapProp, setMapProp] = useState({
//     center: mapCenter,
//     zoom: 16,
//   });
//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.GMAPS_API_KEY }}
//         defaultCenter={mapProp.center}
//         defaultZoom={mapProp.zoom}
//         hoverDistance={K_SIZE / 2}
//       >
//         {markers(locations)}
//       </GoogleMapReact>
//       <style jsx global>{`
//         body {
//           margin: 0;
//         }
//       `}</style>
//     </div>
//   );
// };

const Map = ({ latitude, longitude }) => {
  const ref = React.useRef(null);
  const [map, setMap] = React.useState(null);
  var InforObj = [];

  function addMarker(map) {
    for (var i = 0; i < locations.length; i++) {
      var contentString =
        '<div id="content text-center"><h5 class="text-dark">' +
        locations[i].placeName +
        "</h5><p></p></div>";

      const marker = new google.maps.Marker({
        position: { lat: locations[i].lat, lng: locations[i].lng },
        map: map,
        icon: {
        //  url: "/images/map-cp-icon.png",
            url: "/images/start_charge.png",
        },
      });

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200,
      });

      marker.addListener("click", function () {
        closeOtherInfo();
        infowindow.open(marker.get("map"), marker);
        InforObj[0] = infowindow;
      });
    }
  }

  function closeOtherInfo() {
    if (InforObj.length > 0) {
      InforObj[0].set("marker", null);
      /* and close it */
      InforObj[0].close();
      /* blank the array */
      InforObj.length = 0;
    }
  }

  React.useEffect(() => {
    if (ref.current && !map) {
      const map = new google.maps.Map(ref.current, {
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: 11,
      });

      addMarker(map);

      setMap(map);
    }
  }, [ref, map, latitude, longitude]);

  return <div ref={ref} style={{ height: "100%", width: "100%" }} />;
};

const SMap = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    // get the users current location on intial login

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setLat(latitude);
        setLng(longitude);
      }
    );
  }, []);

  return (
    <Wrapper apiKey={"AIzaSyA7mtQqMkdXDWLVOOqmnNd65ugxq13OklA"}>
      {(lat || lng) && <Map latitude={lat} longitude={lng} />}
    </Wrapper>
  );
};

export default SMap;
