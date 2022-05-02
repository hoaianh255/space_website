/******page destination******/
let dataDestinations = [];
// switch info of planet
const buttons = document.querySelector('.planet-nav').querySelectorAll('li');
const planet_img = document.querySelector('#planet-img');
const planet_title = document.querySelector('#planet-title');
const planet_des = document.
  querySelector('#planet-description');
const planet_evg = document.querySelector('#planet-evg');
const planet_est = document.querySelector('#planet-est');
const fetchData = async () => {
  const data = await fetch('./data.json').then(res => res.json());
  dataDestinations = data.destinations;
  console.log(dataDestinations);

}
fetchData();
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    })
    button.classList.add('active');
    switchPlanet(button.dataset.planet)
  })
})
function switchPlanet(planet) {
  switch (planet) {
    case 'moon':
      planet_img.src = dataDestinations[0].images.png;
      planet_title.innerText = dataDestinations[0].name;
      planet_des.innerText = dataDestinations[0].description;
      planet_evg.innerText = dataDestinations[0].distance;
      planet_est.innerText = dataDestinations[0].travel;
      break;

    case 'mars':
      planet_img.src = dataDestinations[1].images.png;
      planet_title.innerText = dataDestinations[1].name;
      planet_des.innerText = dataDestinations[1].description;
      planet_evg.innerText = dataDestinations[1].distance;
      planet_est.innerText = dataDestinations[1].travel;
      break;
    case 'europa':
      planet_img.src = dataDestinations[2].images.png;
      planet_title.innerText = dataDestinations[2].name;
      planet_des.innerText = dataDestinations[2].description;
      planet_evg.innerText = dataDestinations[2].distance;
      planet_est.innerText = dataDestinations[2].travel;
      break;
    case 'titan':
      planet_img.src = dataDestinations[3].images.png;
      planet_title.innerText = dataDestinations[3].name;
      planet_des.innerText = dataDestinations[3].description;
      planet_evg.innerText = dataDestinations[3].distance;
      planet_est.innerText = dataDestinations[3].travel;
      break;

    default:
      break;
  }
}