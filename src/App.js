import React, { useEffect, useState } from 'react'
import { CovidReport, } from './CovidReport'

export function App() {
    const [covidData, setCovidData] = useState([])

    useEffect(() => {
        fetch("https://api.covid19api.com/summary")
            .then((response) => response.json())
            .then((data) => setCovidData(data.Countries))

    }, [])


    return (
        <div>
            <h2>Covid Update Report</h2>
            {covidData.map((countryData) => (
                <CovidReport
                    key={countryData.CountryCode}
                    country={countryData.Country}
                    totalConfirmed={countryData.TotalConfirmed}
                    lastUpdated={countryData.Date.slice(0, 10)}
                />
            ))}
        </div>
    )
}