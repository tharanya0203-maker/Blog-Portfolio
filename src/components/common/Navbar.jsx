import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import auth from '../../config/firebase';



function Navbar() {

    const navigate = useNavigate()
    const [log, setLog] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, function (user) {
            if (user) {
                setLog(true)
                console.log("User logged In")
            } else {
                setLog(false)
                console.log("User logged out")
            }
        })

        return () => unsubscribe()
    }, [])

    function logout() {
        signOut(auth)
            .then(() => {
                navigate("/login")
            })
            .catch((error) => {
                console.log("Logout error", error)
            })
    }

    return (
        <div className='py-5 flex justify-between items-center'>
            <h2 className='text-2xl font-bold'>Personal</h2>
            <div className='flex items-center'>
                <Link className='list-none px-5' to={"/home"}>Home</Link>
                <Link className='list-none px-5' to={"/blogs"}>Blogs</Link>
                <Link className='list-none px-5'>About</Link>

                {
                    log
                        ? <button className='button-style hidden md:block' onClick={logout}>Logout</button>
                        : <button className='button-style hidden md:block' onClick={() => navigate("/login")}>Login</button>
                }
            </div>
        </div>
    )
}

export default Navbar
