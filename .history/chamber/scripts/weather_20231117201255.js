
      const url =' https://api.openweathermap.org/data/2.5/forecast?lat=30.50&lon=-97.66&daily.dt&cnt=3&appid=8dfd9f3c65a6ef4eaae72e5c410d646b&units=imperial';
      const cards = document.querySelector('#cards');
       
      async function getProphetData() {
        const response = await fetch(url);
        const data = await response.json();
        console.table(data.list[1].main.temp);
        var temp = data.list[0].main.temp;
        var description = data.list[0].weather[0].description;
        document.querySelector('#temperature-one').innerText = `Temperature: ${temp}`;
        document.querySelector('#description-one').innerText = `description: ${description}`;


      }
      
      
       
  // data.list.forEach(element => {
        
  //     });

      getProphetData();
       