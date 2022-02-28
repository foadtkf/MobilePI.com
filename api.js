function searchfood() {
    const text = document.getElementById('box-search');
    const url = `https://openapi.programming-hero.com/api/phones?search=${text.value}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
}

function showresult(phones) {

}