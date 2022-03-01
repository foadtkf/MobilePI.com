// Search by textfield
const searchphones = () => {
        const text = document.getElementById('box-search');
        const url = `https://openapi.programming-hero.com/api/phones?search=${text.value.toLowerCase()}`
        fetch(url)
            .then(res => res.json())
            .then(data => showresult(data.data, text))
    }
    // Showing result for search value
const showresult = (phones, text) => {
        const body = document.getElementsByClassName('card-group')[0];
        body.textContent = ''
        text.value = ''
        document.getElementById('details').textContent = ''
        if (phones.length == 0) {
            alert('no results found')
        }
        const phones20 = phones.slice(0, 20)
        phones20.forEach(phone => {
            const div = document.createElement('div')
            div.innerHTML = `<div class="card bg-primary p-2 text-dark bg-opacity-10">
        <img  src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
            <h5 class="card-title"><strong>${phone.phone_name}</strong></h5>
            <p class="card-text"><strong>Brand: ${phone.brand}</strong></p>
            <button type="button" class="btn btn-primary px-5 container"onclick="seemore('${phone.slug}')">See More</button>
        </div>
    </div>`
            body.appendChild(div)
            console.log(phone)
        });
    }
    // Select a phone
const seemore = (value) => {
        const url = `https://openapi.programming-hero.com/api/phone/${value}`
        fetch(url)
            .then(res => res.json())
            .then(data => showmore(data.data))
    }
    // Showing details of a specific phone
const showmore = phone => {
    console.log(phone)
    const result = document.getElementById('details')
    result.textContent = ''
    const div = document.createElement('div')
    const p1 = document.createElement('p')

    if (phone.others != undefined)

        for (const [key, value] of Object.entries(phone.others)) {

        const p = document.createTextNode(`${key} : ${value}`);
        var br = document.createElement('br')
        p1.appendChild(p)
        p1.appendChild(br)
    }
    if (phone.mainFeatures.sensors != undefined)
        for (sensor of phone.mainFeatures.sensors)
            console.log(sensor)
    if (phone.mainFeatures.memory == undefined)
        phone.mainFeatures.memory = 'unknown'
    if (phone.mainFeatures.chipSet == undefined)
        phone.mainFeatures.chipSet = 'unknown'
    if (phone.mainFeatures.displaySize == undefined)
        phone.mainFeatures.displaySize = 'unknown'
    if (phone.releaseDate == undefined || phone.releaseDate == '')
        phone.releaseDate = 'Unknown release date'
    div.innerHTML = `<div class="card  w-75 mx-auto bg-success p-2 text-dark bg-opacity-10">
    <img src="${phone.image}" class="card-img-top w-25" alt="...">
    <div class="card-body">
    <h5 class="card-title"><strong>${phone.name}</strong></h5>
    <h6 class="card-title"><strong>Brand: ${phone.brand}</strong></h6>
        <p class="card-text"><strong>Features</strong><br>Memory: ${phone.mainFeatures.memory}<br>Display: ${phone.mainFeatures.displaySize}<br>Chipset: ${phone.mainFeatures.chipSet}<br>${phone.releaseDate} <br>Sensors: ${phone.mainFeatures.sensors}<br>Others:</p>
    </div>
</div>`
    div.lastElementChild.lastElementChild.lastElementChild.appendChild(p1)
    result.appendChild(div)
}