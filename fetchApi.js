const baseurl = "https://cities-x4yv.onrender.com/cities";

async function fetchApi() {
  let res = await fetch(`${baseurl}`);
  //console.log(res);
  let result = await res.json();
  console.log(result);

  result.map(function (author) {
    let ul = document.getElementById("cities");
    let city = document.createElement("li");
    ul.appendChild(city);

    city.innerHTML = `${author.cityName}`;
  });
}
fetchApi();
