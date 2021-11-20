import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc, getDoc, updateDoc, getDocs} from "firebase/firestore";
import { getAuth, signInAnonymously, updateProfile, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiCZpwy8ae1-2HrS2CryZqGJaGQ5lvfgc",
  authDomain: "discoverit-2d4ab.firebaseapp.com",
  projectId: "discoverit-2d4ab",
  storageBucket: "discoverit-2d4ab.appspot.com",
  messagingSenderId: "63565936836",
  appId: "1:63565936836:web:04b5872a1a78f311e23191",
  measurementId: "G-J308LB1GLB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function register(name){
  const res = await signInAnonymously(auth).then((user)=>{
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

async function logOut(){
  signOut(auth)
}

async function setScore(score){
  const docRef = doc(db,"users", auth.currentUser.uid)
  getDoc(docRef).then(data =>{
    if (data.data()['score'] < score){
      updateDoc(docRef, {"score": score})
    }
  })
}

function getLeader(){
    return getDocs(collection(db,"users")).then(docs=>{
      return docs.docs.map(element => element.data()).sort(function(a, b)
       {
        var x = a['score']; var y = b['score'];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
       })
    })
}

function getMaxScore(){
  return getDoc(doc(db,"users", auth.currentUser.uid)).then(data =>{
    return data.data()['score']
  })
}

export {auth, register, logOut, setScore,getLeader, getMaxScore}