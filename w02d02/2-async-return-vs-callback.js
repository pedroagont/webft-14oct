const getRandomNum = (callback) => {
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 100);
    callback(randomNum);
  }, 2000);
};

getRandomNum((randomNum) => {
  console.log(randomNum);
});

// getMyIp((ip) => {
//   getMyLocationByIp(ip, (location) => {
//     getWeatherByLocation(location, (weather) => {
//       getAlertsByWeater(weather, (alerts) => {
//         console.log(alerts);
//       });
//     });
//   });
// });
