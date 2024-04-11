import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterCard.jsx'

const users = [
  {
    userName: 'ravila64',
    name: 'Rene Avila Alonso',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hernandez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas Chein',
    isFollowing: false
  }
]

export function App() {
  //const midudev={initialIsFollowing:true, userName:'midudev'};
  //const pheralb={initialIsFollowing:false, userName:'pheralb'};
  //esta inicializacion es cuando se coloca [...midudev]

  //     name=vr estado  setName=como actualizar el estado
  /* se utilizan las llaves para evaluar, en section APP*/

  //const [name, setName] = useState('midudev');
  return (
    <section className='App'>
     {
      users.map(user=>{
        const {userName, name, isFollowing} =user
        return(
            <TwitterFollowCard
              key={userName}
              userName = {userName}
              initialIsFollowing={isFollowing}
            >
            {name}
            </TwitterFollowCard>
        )
       }) 
     }
    </section>
  )
}
