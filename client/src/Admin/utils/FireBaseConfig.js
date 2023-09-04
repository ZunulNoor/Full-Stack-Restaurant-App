import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBmy3rjM80BRku_3OdKetxiEYVUGEvf9wo",
    authDomain: "restaurant-api-b3abe.firebaseapp.com",
    projectId: "restaurant-api-b3abe",
    storageBucket: "restaurant-api-b3abe.appspot.com",
    messagingSenderId: "1019429879621",
    appId: "1:1019429879621:web:e3231485f36a116f5dc82c"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)