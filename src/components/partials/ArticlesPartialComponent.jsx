import React from 'react'
import '@assets/articles.css'

export default function ProfilArticlesComponent() {
  return (
    <>
            <article>
                <div id='all' className='wallrow'>ALL</div>
                <div id='wall' className='wallrow'>Walls</div>
                <div id='galerry' className='wallrow'>Galerry</div>
                <div id='video' className='wallrow'>Video</div>
                <div id='music' className='wallrow'>Music</div>
            </article>
    </>
  )
}
