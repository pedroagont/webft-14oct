console.log(window);
console.log(navigator);
console.log(document);

const ctaBtn = document.getElementById('cta-btn');
const destinationsList = document.getElementById('destinations-list');

const handleCtaBtnClick = (event) => {
  console.log('hello from button!');
  console.log(event.target);

  const destinations = [
    'Cancun',
    'Playa del Carmen',
    'Tulum',
    'Riviera Maya',
    'Cozumel',
  ];

  for (const dest of destinations) {
    const destHtml = `<li>${dest}</li>`;
    destinationsList.innerHTML += destHtml;
  }
};

ctaBtn.addEventListener('click', handleCtaBtnClick);

// document.addEventListener('click', (event) => {
//   console.log('hello from document click!');
//   console.log(event);
// });

// window.addEventListener('resize', (event) => {
//   console.log('resizing!');
//   console.log(event);
// });
