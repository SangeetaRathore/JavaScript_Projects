const reviews = [
  {
    id: 1,
    name: 'Ramesh Sharma',
    job: 'web developer',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaJJ8JIujufzFP5NraecAbn6XIZNB3EtND_POK5XBPA&s',
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos modi hic molestiae, asperiores veniam officiis ex maxime eos distinctio, nemo sequi error natus placeat, itaque omnis ipsum mollitia.",
  },
  {
    id: 2,
    name: 'Kajal Mishra',
    job: 'Hollywood Actress',
    img: 'https://media.licdn.com/dms/image/D4E03AQGmB85JP__pAQ/profile-displayphoto-shrink_200_200/0/1675720895936?e=2147483647&v=beta&t=C1iE0uL7R343LvoXz5-_OAMf9D2LEhlNmKAgQBj9zNc',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos modi hic molestiae, asperiores veniam officiis ex maxime eos distinctio, nemo sequi error natus placeat, itaque omnis ipsum mollitia.',
  },
  {
    id: 3,
    name: 'Apoorav Goyal',
    job: 'Electrical engineer',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos modi hic molestiae, asperiores veniam officiis ex maxime eos distinctio, nemo sequi error natus placeat, itaque omnis ipsum mollitia.',
  },
  {
    id: 4,
    name: 'Mahi Yadav',
    job: 'Chef',
    img: 'https://i.pinimg.com/474x/28/e1/61/28e1616c6f9a070032a3cb0c8b1002f0.jpg',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos modi hic molestiae, asperiores veniam officiis ex maxime eos distinctio, nemo sequi error natus placeat, itaque omnis ipsum mollitia.',
  },
];


const img = document.querySelector('.image');
const author = document.querySelector('.name');
const job = document.querySelector('.job');
const info = document.querySelector('.details');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


let currentItem = 0;


window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});


function showPerson(index) {
  const item = reviews[index];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}




nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});



prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});



randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
