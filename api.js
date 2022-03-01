const searchphones = () => {
    const text = document.getElementById('box-search');
    const url = `https://openapi.programming-hero.com/api/phones?search=${text.value.toLowerCase()}`
    fetch(url)
        .then(res => res.json())
        .then(data => showresult(data.data, text))
}

const showresult = (phones, text) => {
    const body = document.getElementsByClassName('card-group')[0];
    body.textContent = ''
    text.value = ''
    if (phones.length == 0) {
        alert('no results found')

    }
    for (const phone of phones) {

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
    }
}
const seemore = (value) => {
    const url = `https://openapi.programming-hero.com/api/phone/${value}`
    fetch(url)
        .then(res => res.json())
        .then(data => showmore(data.data))
}
const showmore = phone => {
    console.log(phone)

    const result = document.getElementById('details')
    result.textContent = ''
    const div = document.createElement('div')
    document.getElementById
        // {"mainFeatures":{"storage":"128GB/256GB/1TB storage, no card slot","displaySize":"6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio)","chipSet":"Apple A15 Bionic (5 nm)","memory":"128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM","sensors":["Face ID","accelerometer","gyro","proximity","compass","barometer"]},
    if (phone.mainFeatures.memory == undefined)
        phone.mainFeatures.memory = 'unknown'
    if (phone.mainFeatures.chipSet == undefined)
        phone.mainFeatures.chipSet = 'unknown'
    div.innerHTML = `<div class="card  w-75 mx-auto bg-success p-2 text-dark bg-opacity-10">
    <img src="${phone.image}" class="card-img-top w-25" alt="...">
    <div class="card-body">
    <h5 class="card-title"><strong>${phone.name}</strong></h5>
        <p class="card-text"><strong>Features</strong><br>Memory: ${phone.mainFeatures.memory}<br>Display: ${phone.mainFeatures.displaySize}<br>Chipset: ${phone.mainFeatures.chipSet}<br></p>
    </div>
</div>`
    result.appendChild(div)
}