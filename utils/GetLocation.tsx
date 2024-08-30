const API_KEY = "AIzaSyBCyeBxZ-kjCbqzMmjBcJYSF6az4h4xx5w";

export const GetLocation = (lat: number, lng: number) => {
  const MAP_URL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap
&markers=color:red%7Clabel:S%7C${lat},${lng}&
&key=${API_KEY}`;
  return MAP_URL;
};
export const Switchaddress = async (lat: number, lng: number) => {
  const address_URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;
  const response: any = await fetch(address_URL);
  if (!response.ok) {
    throw new Error("Failed the fetch address!");
  }
  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
};
