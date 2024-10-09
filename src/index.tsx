import { render } from "solid-js/web";
import App from "./App.tsx";
import { formatDate } from "date-fns";
import { Geocoder } from "@dewars/protobufs";
console.log(formatDate);
console.log(Geocoder.GeoPointSchema);

const root = document.getElementById("root");
if (root) {
  render(() => <App />, root);
}
