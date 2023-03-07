function updateDateTime() {
  let newyorkElement = document.querySelector("#new-york");
  if (newyorkElement) {
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let ndateElement = moment().tz("America/New_York");
    newyorkDateElement.innerHTML = ndateElement.format("MMMM Do , YYYY");
    newyorkTimeElement.innerHTML = ndateElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let ldateElement = moment().tz("Europe/London");
    londonDateElement.innerHTML = ldateElement.format("MMMM Do , YYYY");
    londonTimeElement.innerHTML = ldateElement.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateDateTime();
setInterval(updateDateTime, 1000);

function updateCity(event) {
  let cityNameValue = event.target.value;
  // console.log(cityNameValue);
  if (cityNameValue === "current") {
    cityNameValue = moment.tz.guess();
  }
  cityName = cityNameValue.replace("_", " ").split("/")[1];
  // console.log(cityName);
  let cityDate = moment().tz(cityNameValue).format("MMMM Do , YYYY");
  let cityTime = moment()
    .tz(cityNameValue)
    .format("h:mm:ss [<small>]A[</small>]");

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `
  <div class="city">
    
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityDate}</div>
      </div>
      <div class="time">${cityTime}</div>
    
  </div>
  
  <a href="index.html" class="back">Back</a>`;
}

let selectElement = document.querySelector("#city-select");
selectElement.addEventListener("change", updateCity);

function showDefault() {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = ` `;
}
