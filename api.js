function searchphones() {
    const text = document.getElementById('box-search');
    const url = `https://openapi.programming-hero.com/api/phones?search=${text.value.toLowerCase()}`
    fetch(url)
        .then(res => res.json())
        .then(data => showresult(data.data))
}

function showresult(phones) {
    const body = document.getElementsByClassName('card-group')[0];
    body.innerHTML = ''
    for (const phone of phones) {
        const div = document.createElement('div')
        div.innerHTML = `<div class="card bg-primary p-2 text-dark bg-opacity-10">
        <img  src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
            <h5 class="card-title"><strong>${phone.phone_name}</strong></h5>
            <p class="card-text"><strong>Brand: ${phone.brand}</strong></p>

            <button type="button" class="btn btn-primary px-5 container">See More</button>
        </div>
    </div>`
        body.appendChild(div)
        console.log(phone)
    }
}