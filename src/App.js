import React from "react"
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Popular from "./components/Popular";
import Loading from "./components/Loading";
import OfferPage from "./components/OfferPage";
import People from "./components/People"
import TrendingSection from "./components/TrendingSection";
import PopUp from "./components/PopUp";
import Download from "./components/Download";
import TvShows from "./components/TvShows";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";




import axios from 'axios'

function App() {

  const [popular , setPopular] = React.useState(null)
  const [people , setPeople] = React.useState(null)
  const [tv ,setTv] = React.useState(null)
  const [popUp , setPopup]  = React.useState(false)
  const [popUpInfo , setPopUpInfo] = React.useState(null)
  const [popUpType , setPopUpType] = React.useState("")
  



React.useEffect(()=> {




  // axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5fda6c0e61a77dda4abed025fe6d6a6f&language=en-US&page=1')
  // .then(res => {
  //   setPopular(res.data.results)
  // })

  // using Fetch then Json then Take the Data

  fetch("https://api.themoviedb.org/3/movie/popular?api_key=5fda6c0e61a77dda4abed025fe6d6a6f&language=en-US&page=1").then(reso => reso.json()).then(res => {const est = res.results
   setPopular(est)}
 
   )

   // Using AXIOS (Data)
  
  axios.get('https://api.themoviedb.org/3/person/popular?api_key=5fda6c0e61a77dda4abed025fe6d6a6f&language=en-US&page=1')
  .then(res => {
    setPeople(res.data.results)
  })

  
  axios.get('https://api.themoviedb.org/3/tv/popular?api_key=5fda6c0e61a77dda4abed025fe6d6a6f&language=en-US&page=1')
  .then(res => {
    setTv(res.data.results)
  })






},[])


function handleClose ( ) {
  setPopup(false)
}

function handleSelectMovie (id) {
popular.forEach(item => {
  if(item.id === id) {setPopUpInfo(item)}
})
setPopup(true)
setPopUpType("movie")
}

function handleSelectPerson (id) {
  people.forEach(item => {
    if(item.id === id) {setPopUpInfo(item)}
  })
  setPopup(true)
  setPopUpType("person")
  

}

  return (

    !people ? 
  <Loading /> 
  : 
   <>
   {popUp ? <PopUp close={handleClose} content={popUpInfo} type={popUpType}  /> : null}
    <NavBar />
    <Landing />

    <Popular content={popular} select={handleSelectMovie}  /> 
    <OfferPage />
    <TvShows content={tv}  />
    <Pricing />
    <People content={people}  select={handleSelectPerson}  /> 
    <TrendingSection />
    <Download />
    <Footer />
   
   </>
  );
}

export default App;
