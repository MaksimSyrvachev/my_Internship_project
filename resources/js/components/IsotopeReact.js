import React, {useEffect, useRef, useState} from "react";
import Isotope from "isotope-layout";
import Card from "react-bootstrap/Card";

export default function IsotopeReact() {
    // init one ref to store the future isotope object
    const isotope = useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState('*')
  
    // initialize an Isotope object with configs
    useEffect(() => {
      isotope.current = new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
      // cleanup
      return () => isotope.current.destroy()
    }, [])
  
    // handling filter key change
    useEffect(() => {
      filterKey === '*'
        ? isotope.current.arrange({filter: `*`})
        : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])
  
    const handleFilterKeyChange = key => () => setFilterKey(key)
  
    return (
      <>
        <ul>
          <li onClick={handleFilterKeyChange('theatre')}>Theatre</li>
          <li onClick={handleFilterKeyChange('artist')}>Artists</li>
          <li onClick={handleFilterKeyChange('coming-soon')}>Coming Soon</li>
        </ul>
        <hr />
        <ul className="filter-container">
          <div className="filter-item artist">
            <Card>Artist2</Card>
          </div>
          <div className="filter-item theatre">
            <Card>Theatre1</Card>
          </div>
          <div className="filter-item artist">
            <Card>Artist1</Card>
          </div>
          <div className="filter-item artist coming-soon">
            <Card>Artist + Coming Soon</Card>
          </div>
        </ul>
      </>
    )
  }
  
  