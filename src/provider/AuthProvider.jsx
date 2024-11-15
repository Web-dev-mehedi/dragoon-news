import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

const [user , setUser] = useState(null);
const [loading , setLoading] = useState(true);



const createUserWithEmailPass=(email,password)=>{
// 
    return createUserWithEmailAndPassword(auth,email,password)
   
}

const updateUserProfile =(updatedData)=>{
   return updateProfile(auth.currentUser, updatedData)
}

const signIn = (email,password)=>{
    // 
   return signInWithEmailAndPassword(auth,email,password);
   
}


// provider
const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
// google login
const handleGoogleRegister =()=>{
    // 
      signInWithPopup(auth,GoogleProvider)
    .then((result)=>{
       console.log(result);
       setUser(result.user)
    }).catch(error=>[
        console.log(error)
    ])

}
// github login
 const handleGitHubRegister=()=>{
  // 
  signInWithPopup(auth,GithubProvider)
  .then((result)=>{
    console.log(result)
    setUser(result.user)
  }).catch(error=>{
   console.log(error)

  }) 
 }


//
const handleSignOut=()=>{
    //
    signOut(auth)
    .then(() =>{
        setUser('')
        console.log("SignOut Success fully")
    }).catch(error=>console.log(error))
}

// 

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        if(currentUser){
         setUser(currentUser);
         setLoading(false);
        }else{
            return ()=>{
                unSubscribe();
            } 
        }
    })
  },[])


const authInfo={
    name:"ridoy",
    user,
    handleGoogleRegister,
    handleGitHubRegister,
    handleSignOut,
    createUserWithEmailPass,
    signIn,
    loading,
    setUser,
    updateUserProfile
}



    return <AuthContext.Provider value={authInfo}>
           {children}
    </AuthContext.Provider>
};

export default AuthProvider;