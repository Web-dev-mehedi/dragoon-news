import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

const [user , setUser] = useState(null)


console.log(user)


const createUserWithEmailPass=(email,password)=>{
// 
      createUserWithEmailAndPassword(auth,email,password)
      .then(result=>{
         console.log(result.user)
         alert(result?.user?.displayName, "your are logged in")
      }).catch(error=>{
        console.log(error);
        alert("error",error)
      })
}


const signIn = (email,pass)=>{
    // 
    signInWithEmailAndPassword(auth,email,pass)
    .then(res=>{
        console.log(res.user);
        setUser(res.user)
        alert("sign in successfully")

    }).catch(error=>{
      console.log(error);
      alert(error)
    })
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
         setUser(currentUser)
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
    signIn
}



    return <AuthContext.Provider value={authInfo}>
           {children}
    </AuthContext.Provider>
};

export default AuthProvider;