
const menuContainer = document.getElementById("ramen-menu")
const imageElement = document.querySelector('.detail-image')
const nameElement = document.querySelector('.name')
const restaurant = document.querySelector('.restaurant')
const ratingElement = document.getElementById('rating-display')
const commentElement = document.getElementById('comment-display')
const formatElement = document.getElementById('new-ramen')

fetch("http://localhost:3000/ramens")
.then(res => res.json())
.then(ramenArr => {
    ramenArr.forEach(ramenObj => {renderImage(ramenObj)})
})

function renderImage(ramenObj){
    const img = document.createElement("img");
    img.addEventListener('click', () => showRamen(ramenObj));
    img.src = ramenObj.image;
    menuContainer.append(img);
}

function showRamen(ramenObj){
    imageElement.src = ramenObj.image;
    nameElement.textContent = ramenObj.name;
    restaurant.textContent = ramenObj.restaurant;
    ratingElement.textContent = ramenObj.rating;
    commentElement.textContent = ramenObj.comment
}

formatElement.addEventListener('submit', event => {
    event.preventDefault();
    const newObj = {
        name: event.target.name.value,
        restaurant: event.target.restaurant.value,
        image: event.target.image.value,
        rating: event.target.rating.value,
        comment: event.target["new-comment"].value
    }
    renderImage(newObj)
})

