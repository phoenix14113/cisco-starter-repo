import './IPFinder.css'
import { useState, useEffect } from "react";
//var http = require('http');

function IPFinder(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let url = `https://api.ipify.org?format=json`
    let ipv = 4
   if(!props.IPv4){
        url = `https://api64.ipify.org?format=json`
        ipv = 6
   }
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then((usefulData) => {
          setLoading(false);
          setData(usefulData);
        })
        .catch((e) => {
          console.error(`An error occurred: ${e}`)
        });
    }, []);
   
    return (

        <div className="IPv4">
          {!loading && <p>IPv{ipv}: {data.ip}</p>}
        </div>

    )
    
}

export default IPFinder;