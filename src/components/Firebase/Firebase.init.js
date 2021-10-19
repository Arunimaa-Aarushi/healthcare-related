// import { initializeApp } from "firebase/app";
// import firebaseConfig from "./Firebase.config";

// const initializeAuthentication = () => {
//     initializeApp (firebaseConfig) ;
// }

// export default initializeAuthentication ;


import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initAuth = () => {
    initializeApp(firebaseConfig);
}

export default initAuth;
