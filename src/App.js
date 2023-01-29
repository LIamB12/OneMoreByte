import './App.css';
import { db, auth, app } from "./firebase-config"
import React, {useState, useEffect} from "react"
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc
} from "firebase/firestore";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import {motion} from "framer-motion"
import Hub from './Hub';
import Restaurants from './Restaurants';
import Volunteer from './Volunteer';
import Social from './Social';



function App() {
  const provider = new GoogleAuthProvider();

  const dataTest = {
    name: "liam",
    gf: "Katrina"
  }
  const [img, setImg] = useState("")
  const [display, setDisplay] = useState(auth.currentUser)
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [userDoc, setUserDoc] = useState(null)
  const [page, setPage] = useState(0)

  const userCollectionRef = collection(db, "UserData")
  const createUserData = async () => {
    await setDoc(doc(db, "UserData", "new-img"), img);
  };

  const handleChange = (e) => {
    console.log("Upload to firebase")
    setImg(e.target.value)
  }

  const handleSignIn = async () => {
    await signInWithRedirect(auth, provider)
    setPage(1)
    
    
  }

  useEffect(() => {

    if(auth.currentUser !== null) {
      setPage(1)
    }
    async function getDatas(myDoc) {
      const userStuff = await getDoc(myDoc)
      return userStuff
    }

    async function check(snap, newDoc, obj) {
      if((await snap) === undefined) {
        setDoc(newDoc, obj);
       console.log(obj)
      }
      else {
        console.log(snap)
      }
      

    }
    auth.onAuthStateChanged((lastUser) => {
      async function get(mine){
        const docSnap = await getDoc(mine);
        return docSnap.data()
      }

      setUser(lastUser)
      setUserDoc(doc(db, "UserData", lastUser.uid));
      const newSnap = get(doc(db, "UserData", lastUser.uid));
      console.log(newSnap)
      check(newSnap, doc(db, "UserData", lastUser.uid), {km: 0, role: "user", foodSaved: 0})
      const final = get(doc(db, "UserData", lastUser.uid))
      console.log(final)
      setUserData(final)
      console.log(lastUser.uid)
      setPage(1)
    })

  }, [])
  
  
  const getData = async () => {
    const docSnap = await getDoc(userDoc);
    console.log(docSnap.data())
    setUserData(docSnap.data())
    if(docSnap.data() === undefined) {
      console.log("PLEASE")
    }
  }

  const handleSignOut = () => {
    signOut(auth, provider)
    setPage(0)
  }
  
  const printUser = () => {
    getData()

  }

  async function data2 (mydoc) {
    return await JSON.stringify(getDoc(mydoc).data())
  }
  
  const pages = [<App />, <Hub setter = {setPage} signOut = {handleSignOut} />, <Restaurants setter = {setPage} />, <Volunteer setter = {setPage} />, <Social setter = {setPage} />]
    
  
  return (
    <>
    {page === 0 ?
    <div className="App">
      <motion.h1
        initial={{x: -4000}}
        animate={{x: 0}}
        transition={{ duration: 3 }}
      >One More Byte</motion.h1>
      <div className="spacer">
      </div>
      <motion.button 
        initial={{opacity: 0}}
        animate={{opacity: [0,0,0,0,0,0,0,1]}}
        transition={{ duration: 2.5 }} className = "gSign" onClick = {handleSignIn}>Continue With Google</motion.button>
    </div> : pages[page]}
    </>
    
  );
}

export default App;
