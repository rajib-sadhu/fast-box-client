import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)

const AuthProvider = (props: { children: any }): any => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const auth = getAuth(app);


    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            setUser(currentUser);

            console.log('Current User', currentUser);
            //  get and set token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(res => {
                        // console.log(res.data.token);
                        const token: string = res.data.token
                        localStorage.setItem('access-token', token);

                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token');
            }
        });

        return () => {
            unsubscribe();
        }

    }, [])

    type InfoType = {
        user: null | any,
        loading: boolean,
        signInWithGoogle: any,
        logOut: any
    }


    const info: InfoType = {
        user,
        loading,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={info} >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;