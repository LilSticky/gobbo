import { initializeApp } from "firebase/app";
import { ref, set, onValue, getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyA3S3iheJPl3k1ZsgkaPJB-RDDhdWamLDY",
  authDomain: "gobbo-88113.firebaseapp.com",
  databaseURL:
    "https://gobbo-88113-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gobbo-88113",
  storageBucket: "gobbo-88113.appspot.com",
  messagingSenderId: "15022917957",
  appId: "1:15022917957:web:1c7a64be1cdd723ebed62c",
  measurementId: "G-D3DX0KLQHR",
};

const app = initializeApp(config);
const database = getDatabase(app);

function setMap(map: any) {
  const db = getDatabase();
  set(ref(db, "map"), map);
}
// async function loadCity(name) {
//   const cityDoc = doc(db, `cities/${name}`);
//   const snapshot = await getDoc(cityDoc);
//   return {
//     id: snapshot.id,
//     ...snapshot.data(),
//   };
// }
// async function getField(name: string) {
//   const db = getDatabase();
//   const mapRef = ref(db, `fields/${name}`);
//   onValue(mapRef, (snapshot) => {
//     const map = snapshot.val();
//     return map;
//     // TODO: figure out realtime database handling
//   });
// }

export default {
  database,
  // getMap,
  setMap,
};
