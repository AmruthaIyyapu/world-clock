function updateDateTime() {
  let newyorkElement = document.querySelector("#new-york");
  let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTimeElement = newyorkElement.querySelector(".time");
  let ndateElement = moment().tz("America/New_York");
  newyorkDateElement.innerHTML = ndateElement.format("MMMM Do , YYYY");
  newyorkTimeElement.innerHTML = ndateElement.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let ldateElement = moment().tz("Europe/London");
  londonDateElement.innerHTML = ldateElement.format("MMMM Do , YYYY");
  londonTimeElement.innerHTML = ldateElement.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateDateTime();
setInterval(updateDateTime, 1000);
