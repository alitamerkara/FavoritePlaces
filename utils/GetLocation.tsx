const API_KEY = "AIzaSyBCyeBxZ-kjCbqzMmjBcJYSF6az4h4xx5w";

const GetLocation = (lat: number, lng: number) => {
  const MAP_URL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}&
&key=${API_KEY}`;
  return MAP_URL;
};

export default GetLocation;
