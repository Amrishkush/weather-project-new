import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";


function App() {


const apiKey = "101602001198fa5034cfaeb7da7dd1b6";
const [data, setData] = useState({})      //data we got in the form of object
const [inputCity, setInputCity] = useState("")   //cityname we will get as string

const getWeatherDetails = (cityName) => {
  if(!cityName) return
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=metric"; 
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)    //saving the object data we got from api

    }).catch((err) => {
      console.log("err" , err)
    })
  }

const handleChangeInput = (e) => {             //jo bhi input me change hoga wo e parameter me save hoga uska value hm pass kar denge setInputCity me
    setInputCity(e.target.value)   
}

  const handleSearch = () =>{
    // alert("clicked")         //to see that when i am clicking button is working or not
    getWeatherDetails(inputCity)   //whenever button clicked it calls handleSearch inside which we will pas api function where we got all the things from api
    //input city hamne collect kya tha input se setInputcity ke madad se wo isme daal diya cityname ki tarah act krega
  }

  const onEnterKey = (event)  =>{
    if (event.key === 'Enter') {
      getWeatherDetails(inputCity)
    }
  }


  
  useEffect(() => {
     getWeatherDetails("delhi")
  }, [])


  return (
    <div className="container-fluid container-main m-0">
        <div className="row justify-content-center headline">
              <div className="col-12 bg-dark text-white">
                <h1 className='text-center'>Current Weather</h1>
              </div>
               <div className="col-12 text-center pt-5 justify-content-center w-75">
               <input className= "form-control" placeholder="Type the city name" type="text" onChange={handleChangeInput} onKeyDown={onEnterKey} value ={inputCity} /></div>
               {/* yaha se e gaya handleChangeInput me fir wha pe jo bhi value update hoga setInputCity ke madad se change krta rhega jaise d, e, l, h, i   */}
               {/*jo bhi change hog handleChangeInput call hoga waha setInputcity karte h to value add hote jaata ha warna dikhayega nhi change or null set hoga */}
            <div className="col-12 text-center "><button className="btn btn-warning mt-2 mb-5" onClick={handleSearch} >Search</button></div>  {/**handlesearch */}
        </div>
        <div className="row justify-content-center ">
          <div className="col-6 text-center box">
            <div className="col-12"><img className="weather-icon" src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-2.png" alt="" /></div>
            <div className="col-12 cityName"><p>{data?.name}</p></div>
            <div className="col-12 temperature"><p>{data?.main?.temp}°C</p></div>
          </div>
        </div>
        <div className='row mt-4 p-5 pb-4 text-bg-dark text-white-50'>
          <div className='col-6'>
             <h4>Amrish Pratap Singh</h4>
             <p>Teacher turned Frontend Developer</p>
            📞 8353942789, 7905319717 <br/>
            ✉️ amrishkush@gmail.com
          </div>
          <div className='col-6 align-self-end' style={{paddingLeft: "41%"}}>
          <a href="https://linkedin.com/in/amrishkush"><img className= "m-auto" src="https://www.pngmart.com/files/21/Linkedin-In-Logo-PNG-Photo.png" width="30" alt="LinkedIn"/></a>
          <a href="https://github.com/Amrishkush"><img className="m-auto" width="60" src="https://www.pngmart.com/files/22/GitHub-PNG-Isolated-Transparent-Image.png" alt="gitHub"/></a>
          </div>
          <hr className='mt-5'></hr>
          <div className='col-12 text-center mt-2'>Made by <strong>Amrish Pratap Singh</strong> ©️2023</div>
        </div>
    </div>
  );
}

export default App;
