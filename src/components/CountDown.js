import React from 'react'



export default function CountDown(props) {

    const [textDay,setTextDay] = React.useState()
    const [textMinute,setTextMinute] = React.useState()
    const [textHour,setTextHour] = React.useState()
    const [textSecond,setTextSecond] = React.useState()

    //"September 12 , 2022 00:00:00:00"

  function counter () {
   const targetDate = new Date(props.target).getTime()
   const nowDate = new Date().getTime()
   const gap = targetDate - nowDate 

   // Time 

   const second = 1000
   const minute = second * 60 
   const hour = minute * 60
   const day = hour * 24

   



   if(gap < 0) {
    setTextDay(0) 
   setTextHour(0) 
   setTextMinute(0) 
   setTextSecond(0) 
   }

   else {
    
   setTextDay(Math.floor(gap / day)) 
   setTextHour(Math.floor((gap % day) / hour )) 
   setTextMinute(Math.floor((gap % hour) / minute)) 
   setTextSecond(Math.floor((gap % minute) / second)) 

   }

  

  }

  setInterval(counter , 1000)

   

 const  myStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap : "wrap",
    flexDirection:" row" ,
    fontSize : "65px" , 
    color :"#333"
   }

   const spanStyle = {
    backgroundColor : "rgba(255, 255, 255, 0.5)",
    padding: "5px 30px",
    borderRadius : "7px", 
    margin : "10px 5px",
    fontSize :"1.5rem ",
    color : "#333" , 
    display: "flex",
    alignItems: "center",
    flexDirection : "column",
    justifyContent: "center",
    backdropFilter : "5px",
    boxShadow : "0 8px 32px 0 rgb(31 38 135 / 37%)",
    fontFamily: 'Libre Baskerville',
    fontWeight :'bold',
    gap : "10px"
   }

 const  pStyle = {
    fontSize : "15px",
    margin : "0",
    borderTop :"4px solid #333"
   }

  return (


    <div className='count-down' style={myStyles}>
    <span style={spanStyle}>  {textDay} <p style={pStyle}>{textDay > 1 ? "Days" : "Day" }</p> </span>
    <span style={spanStyle}> {textHour} <p style={pStyle}>{textHour > 1 ? "Hours" : "Hour" }</p>  </span> 
    <span style={spanStyle}>  {textMinute} <p style={pStyle}>{textMinute > 1 ? "Minutes" : "Minute" }</p></span>
    <span style={spanStyle}> {textSecond} <p style={pStyle}>{textSecond > 1 ? "Seconds" : "Second" }</p> </span>
    </div>
  
  )
}
