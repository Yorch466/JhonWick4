import React from 'react'
import { ActorCard } from './ActorCard'

export const TopCastContainer = () => {
  return (
    <section className='top-cast-container'>
        <h6>Top Cast</h6>
        <div className='carts-container'>
            <ActorCard />
        </div>
    </section>
  )
}
