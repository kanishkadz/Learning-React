import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/kanishkadz')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
  return (
    <div className='text-center m-4 bg-grey-600 text-white text-3xl'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Get picture" width={300} />
    </div>
  )
}

export default Github