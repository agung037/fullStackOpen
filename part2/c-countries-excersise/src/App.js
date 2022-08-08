import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [dataToShow, setDataToShow] = useState('')
  const [input, setInput] = useState('')
  const [country, setCountry] = useState(false)
  const [error, setError] = useState('')
  const [weather, setWeather] = useState()
  

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const showClickHandler = (event) => {
    setCountry(dataToShow[event.target.id])
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
    .then(response =>{
      console.log(response.data)
      setWeather(response.data)
    })
  }

  useEffect(() => {
    console.log("your input is", input)
    axios
      .get(`https://restcountries.com/v3.1/name/${input}`)
      .then(response => {
          if (response.data.length !== 1){
            if(response.data.length >= 10){
              setDataToShow(false)
              setCountry(false)
              setError("Too Many Data")
            }else{
              setDataToShow(response.data)
            }
          }else{
            setError("")
            setCountry(response.data[0])
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(response =>{
              console.log(response.data)
              setWeather(response.data)
            })
          }
      })
  }, [input])

  


  return (
    <div>
      find countries <input onChange={inputHandler} />
      <div>
          <ul>
            {dataToShow ? dataToShow.map((data, num) => <li key={data.name.common}>{data.name.common} <button name={data.name.common} id={num}  onClick={showClickHandler}>show</button> </li>) : error }
          </ul>
      </div>

      <div>
        <div>
          <h2>{country ? country.name.common : ""}</h2>
        </div>

        <div>
          {country ? <p>capital {country.capital[0]} <br/> area {country.area}</p> : ""}
        </div>
      
        <div>
          {country ? <h2>Languages : </h2> : ""}

          {country ? Object.values(country.languages).map((value) => <li>{value}</li>) : ""}

        </div>

        <div>
          {country ? <img alt='flag' src={country.flags.svg} width="150" /> : ""}
        </div>

        <div>
          {country && weather ? <h2>Weather in {country.capital[0]}</h2> : ""}
          {weather && country ? <p>{weather.main.temp} celcius</p> : ""}
          {weather && country ? <img alt='icon' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img> : ""}
          {weather && country ? <p>wind : {weather.wind.speed} m/s</p> : ""}
        </div>
      </div>
    </div>


  )
}

export default App