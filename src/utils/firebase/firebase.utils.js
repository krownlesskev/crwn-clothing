import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBkQlw2XsS2s_Z9KyLAHaKSLAhCRvav2Ck",
    authDomain: "crwn-clothing-db-a84c8.firebaseapp.com",
    projectId: "crwn-clothing-db-a84c8",
    storageBucket: "crwn-clothing-db-a84c8.appspot.com",
    messagingSenderId: "206039511774",
    appId: "1:206039511774:web:c260ecd906d1f4d379484f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);