// window.addEventListener('load', ()=> {
//     let lon
//     let lat
   let temp_min
   let temp_max
    let presion=document.querySelector('.presAtm')
    let sensacion=document.querySelector('.senTermica')
    let viento=document.querySelector('.viento')
    let humedad=document.querySelector('.humedad')
    let infoClima=document.querySelector('.infoClima')
    let detalle=document.querySelector('.detallesClima')
    let result= document.querySelector('.result')
    const form = document.querySelector('.info-location')
    let ubicacion= document.getElementById('city')
    let temperatura= document.getElementById('temperatura')



    // })    
    
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        if (ubicacion.value === ''){
            showError('Por favor ingresa una Ciudad')
            return;
        }

        llamarApi(ubicacion.value);
    })
    form.addEventListener('submit',(e)=>{
       bgTemp()
    })
    function llamarApi(city){
        // const apiKey= "be454d68474e61c070edc0083e4b91a0"
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be454d68474e61c070edc0083e4b91a0&units=metric`

       fetch(url)
          .then(data=>{
            return data.json()
          })
          .then(dataJSON=>{
            if (dataJSON.cod === '404'){
                showError('Ciudad no encontrada.')
            } else{
                showWeather(dataJSON)
            }
          })
    }

    function showWeather(data){
        const {name, main:{humidity,pressure,feels_like},weather:[array],wind}= data;
        console.log(data)
        let temp= Math.round(data.main.temp)
        let temp_min=Math.round(data.main.temp_min)
        let temp_max=Math.round(data.main.temp_max)
    
       

        const content=document.createElement('div');
        content.innerHTML=`
        <h5> ${temp}°</h5>
        <h2>  ${name}</h2>`
 
         const info =document.createElement('div');
         info.innerHTML=`
      
        <p> ${array.description}</p>
        <p> Temp min ${temp_min}°</p>
        <p> Temp max ${temp_max}°</p>`

        infoClima.appendChild(info)

        info.style.display='flex'
        info.style.width='100%'
        info.style.justifyContent='center'
        info.style.color='white'
        info.style.gap='5%'

        content.style.display='flex'
        content.style.flexDirection='row'
        content.style.justifyContent='center'
        content.style.alignItems='center'
        content.style.width='100%'
        content.style.gap='5%'
        content.style.height='120px'

        const detailWind=document.createElement('div');
        detailWind.innerHTML=`
        <p> Viento </p>
        <p> ${wind.speed} m/s`

      const detailHum=document.createElement('div');
        detailHum.innerHTML=`

        <p> Humedad</p>
        <p>${humidity} %</p>`

      const detailPres=document.createElement('div')
      detailPres.innerHTML=`
         <p> Presion </p>
         <p> ${pressure} </p>`
    
         
         const detailSen=document.createElement('div')
      detailSen.innerHTML=`
         <p> Sensacion Termica </p>
         <p> ${feels_like} % </p>`
    



        detailPres.style.display='flex'
        detailPres.style.flexDirection='row'
        detailPres.style.justifyContent='space-between'
        detailPres.style.margin='5%'

        detailSen.style.display='flex'
        detailSen.style.flexDirection='row'
        detailSen.style.justifyContent='space-between'
        detailSen.style.margin='5%'

        detailWind.style.display='flex'
        detailWind.style.flexDirection='row'
        detailWind.style.justifyContent='space-between'
        detailWind.style.margin='5%'

        detailHum.style.display='flex'
        detailHum.style.flexDirection='row'
        detailHum.style.justifyContent='space-between'
        detailHum.style.margin='5%'

      presion.appendChild(detailPres)
    //   sensacion.appendChild(detailSen)
      humedad.appendChild(detailHum) 
      viento.appendChild(detailWind)   
      result.appendChild(content)
       
    }

  

    function showError(message){
        const alert=document.createElement('p');
        alert.classList.add('alert-message');
        alert.innerHTML=message;

        form.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        },3000);
    }
   


let date = new Date();
let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
console.log(output);


let displayHours = document.getElementById('displayHours');
     let displayMinutes = document.getElementById('displayMinutes');

      let currentTime = new Date();

      displayHours.innerHTML = currentTime.getHours() + " :";
      displayMinutes.innerHTML = currentTime.getMinutes() + "hrs";
          