$(document).ready(() => {
  $('#cta-btn').click((event) => {
    const destinations = [
      'Cancun',
      'Playa del Carmen',
      'Tulum',
      'Riviera Maya',
      'Cozumel',
    ];

    $('#destinations-list').empty();
    for (const dest of destinations) {
      const destHtml = `<li>${dest}</li>`;
      $('#destinations-list').append(destHtml);
    }

    $('body').css('background-color', 'tomato');
  });
});
