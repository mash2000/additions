window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  function req(e) {
    e.preventDefault();

    let formData = new FormData(form);
    // formData.append("id", Math.random());

    // let obj = {};
    // formData.forEach((value, key) => {
    //   obj[key] = value;
    // });
    // let json = JSON.stringify(obj);

    // const request = new XMLHttpRequest();
    // request.open("GET", './api.php');
    // request.setRequestHeader('Content-type', 'multipart/form-data');
    // request.send(formData);
    // request.addEventListener('load', function () {
    //   if (request.status == 200) {
    //     let data = JSON.parse(request.response);
    //     createCards(data);
    //   } else {
    //     console.log("Something's going wrong!");
    //   }
    // });

    // getResource('http://localhost:3000/people', formData)
    //   .then(data => createCards(data.data))
    //   .catch(err => console.log(err))

    axios({
      method: 'post',
      url: './api.php',
      data: formData,
    })
    .then(data => console.log(data))

    // this.remove();
  }

  form.addEventListener('submit', (e) => req(e), {"once": true});

  async function getResource(url, data){
    const res = await fetch(`${url}`, {
      method: "POST",
      body: data
    });

    if (!res.ok){
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.text();
  }

  async function getResource(url){
    const res = await axios(`${url}`);

    if (res.status !== 200){
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return res;
  }

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