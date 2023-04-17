import React from 'react'
import Button from '../../stories/assets/Button/Button'

export const Description = () => {
    return (
        <div className='description'>
            <p className='description-p'>The purpose of this tiny app is to demonstrate Michael's ability to apply various tech skills quickly over the course of a weekend.</p>       
            
            <ul className='grid-container'>
                <li>Wireframing</li>
                <li>ERD</li>
                <li>TDD</li>
                <li>TypeScript</li>
                <li>Storybook</li>
                <li>GraphQL</li>
            </ul>
            <Button variant='primary'>Let's Get Started!</Button>
        </div>
    )
}
