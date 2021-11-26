function Test()
{


    var city = "Cape Town"

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=7b9c283bb098336ad719ef337253230c",
        function(data){
            // var currentdate = new Date(); 
            // var datetime = "Last Sync: " + currentdate.getDate() + "/"
            //         + (currentdate.getMonth()+1)  + "/" 
            //         + currentdate.getFullYear() + " @ "  
            //         + currentdate.getHours() + ":"  
            //         + currentdate.getMinutes() + ":" 
            //         + currentdate.getSeconds();

            var dateString = new Date();
            dateString = new Date(dateString).toUTCString();
            dateString = dateString.split(' ').slice(0, 5).join(' ');
            console.log(dateString);

                    console.log(new Date());
            
            console.log(data);

            var cityname = data.name;

            var country = data.sys.country;

            var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            
            var temp = Math.floor(data.main.temp); 
            var weather = data.weather[0].main 
            console.log(icon);

            $('.icon').attr('src', icon);
            $('.cityName').append(cityname);
            $('.countryName').append(country);
            $('.weatherstate').append(weather);
            $('.temp').append(temp);
            $('.dateTime').append(dateString);


        }
    );



    return <section>
    <div class="container">
        <div class="weather-container">
            <div>
                <p class="dateTime" ></p>
            </div>
    
    
            <div class="row row-cols-auto">
                <div class="col">
                    <h1 class="cityName"></h1>
                </div>
                <div class="col">
                    <h1 class="countryName">,</h1>
                </div>
            </div>
    
            <div class="row row-cols-auto">
    
                <div class="col">
                    <img src="" alt="" class="icon" />
                </div>
    
                <div class="col">
                    <span class="temp"></span>
                    <span>°C</span>
                </div>  
            </div>
    
      
            <p class="weatherstate"></p>
    
        </div>
    </div>
</section>
}

class Hello extends React.Component{
    render()
    {
      return <div><Test /></div>  
    }
}

ReactDOM.render(<Hello />,document.getElementById('mydiv'))