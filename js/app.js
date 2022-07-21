// window.addEventListener('load', ()=> {
//     let lon
//     let lat
    
   let result= document.querySelector('.result')
    const form = document.querySelector('.info-location')
    let ubicacion= document.getElementById('city')
    let temperatura= document.getElementById('temperatura')
    let viento= document.getElementById('viento')
    let lluvia= document.getElementById('lluvia')
    let humedad=document.getElementById('humedad')


    // })    
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        if (ubicacion.value === ''){
            showError('Por favor ingresa una Ciudad')
            return;
        }

        llamarApi(ubicacion.value);
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
        const {name, main:{temp_min, temp_max,speed},weather:[arr]}= data;
        console.log(data)
        let temp= Math.round(data.main.temp)
    
        viento.textContent=`${data.wind.speed} m/s`

        const content=document.createElement('div');
        content.innerHTML=`
        <h5> ${temp}°</h5>
        <h2>  ${name}</h2>
        <img src ="http://openweathermap.org/img/wn/${arr.icon}2x.png" alt="icon">
        <p>  ${temp_min}</p>
        <p>  ${temp_max}</p>`
        // viento.textContent=`${wind.speed} m/s`
        content.style.display='flex'
        content.style.flexDirection='row'
        content.style.justifyContent='center'
        content.style.alignItems='center'
        content.style.width='100%'
        content.style.gap='5%'

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
   

    // function onSubmit(event){
    //     event.preventDefault();
    //     alert('apretaste enter')
    // }
    // location.addEventListener('submit',onSubmit,true);

    // if(navigator.geolocation){
    //       navigator.geolocation.getCurrentPosition( posicion => {
    //        lon=posicion.coords.longitude
    //        lat=posicion.coords.latitude
    
    //         // ubicacion por ciudad
    //        const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=be454d68474e61c070edc0083e4b91a0&units=metric`

    //     //    ubicacion actual
    //     //    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=be454d68474e61c070edc0083e4b91a0`
    //        console.log(url)
    //    fetch(url)
    //    .then(response => {return response.json()
    //    .then( data =>{
    //     console.log(data)
    //     let loc=(data.name)
    //     location.textContent= loc

    //     let temp= Math.round(data.main.temp)
    //     temperatura.textContent=`${temp}°C`

    //     let wind= (data.wind.speed)
    //     viento.textContent=`${wind} m/s`

    //     let hum=(data.main.humidity)
    //     humedad.textContent=`${hum} %`
    //    }) 
    //    .catch( error =>{
    //     console.log(error)
    //    })
    
    // })

    //       });
          
    // }


