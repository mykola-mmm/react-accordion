import React from 'react'
import { useState, useEffect } from 'react'
import "./styles.css"
import User from './user'

export default function GithubProfileFinder() {

    const [username, setUsername] = useState('gayanvoice')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    function handleSubmit() {
        fetchGitHubUserData()
    }

    async function fetchGitHubUserData() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${username}`)

        console.log(res)
        const data = await res.json()
        console.log(data)
        
        if (data) {
            setUserData(data)
            setLoading(false)
            setUsername('')
        }
    }

    useEffect(()=> {
        fetchGitHubUserData()
    }, [])


  return (
    <div className='github-profile-container'>
        <div className="input-wrapper">
            <input name="Search by username" type="text" placeholder="github username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={handleSubmit}>Search</button>
        </div>
        <div className="data-wrapper">
            {
                loading && <div>Loading...</div>
            }
            {
                !loading && userData !== null && <User user={userData}/>
            }
        </div>
    </div>
  )
}
