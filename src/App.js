import React, { useEffect, useState } from 'react'
import CarDetails from './CarDetails'

export function App() {
    const initialCarData = {
        model: 'mustang',
        year: '1982',
        color: 'red'
    }


    return (
        <CarDetails initialData={initialCarData}/>
    )
}