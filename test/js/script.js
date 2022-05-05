window.addEventListener('DOMContentLoaded', () => {

  function req() {
    const request = new XMLHttpRequest();
    request.open("GET", 'http://localhost:3000/people');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('load', function () {
      if (request.status == 200) {
        let data = JSON.parse(request.response);
        createCards(data);
      } else {
        console.log("Something's going wrong!");
      }
    });

    this.remove();
  }

  document.querySelector('.app button').addEventListener('click', req, {"once": true});

  function createCards(response) {
    response.forEach(item => {
      let card = document.createElement('div');

      card.classList.add('card');

      let icon;
      if (item.sex === 'male'){
        icon = 'icons/mars.png';
      } else {
        icon = 'icons/female.png';
      }

      card.innerHTML = `
        <img src="${item.photo}" alt="">
        <div class="name">${item.name} ${item.surname}</div>
        <div class="sex">
          <img src="${icon}" alt="male">
        </div>
        <div class="age">${item.age}</div>
      `;

      document.querySelector('.app').appendChild(card);
    });
  }

});