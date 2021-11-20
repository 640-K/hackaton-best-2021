import {initializeApp} from "firebase/app";
import {getFirestore, collection, setDoc, doc, getDoc, updateDoc, getDocs} from "firebase/firestore";
import {getAuth, signInAnonymously, updateProfile, signOut} from "firebase/auth";
import data from './data/data.json'

const app = initializeApp(data.firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function register(name) {
    const res = await signInAnonymously(auth).then(user => {
        updateProfile(user.user, {displayName: name})
        return user
    })
    const user = res.user;
    await setDoc(doc(collection(db,"users"), user.uid), {
        name,
        score: 0
    });
    return auth
}

async function logOut() {
    signOut(auth)
}

async function setScore(score) {
    const docRef = doc(db,"users", auth.currentUser.uid)
    getDoc(docRef).then(data => {
        if (data.data()['score'] < score){
            updateDoc(docRef, {"score": score})
        }
    })
}

function getLeader() {
    return getDocs(collection(db,"users")).then(docs=>{
        return docs.docs.map(element => element.data()).sort((a, b) => {
            var x = a['score']; var y = b['score'];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        })
    })
}

function getMaxScore(){
    return getDoc(doc(db,"users", auth.currentUser.uid)).then(data => {
        return data.data()['score']
    })
}

export {auth, register, logOut, setScore,getLeader, getMaxScore}