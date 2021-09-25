const displayImg = document.querySelector(".display-img");
const thumbs = document.querySelector(".thumbs");
const imgThumbs = document.querySelectorAll(".thumb");

changeImg = (e) => {
    const newSource = e.target.src;
    displayImg.src = newSource;

    imgThumbs.forEach((imgThumb) => {
        if(imgThumb.classList.contains("active")) {
            imgThumb.classList.remove("active");
        }

    });

    e.target.classList.add("active");
    displayImg.classList.add("fade-in");

    setTimeout(() => {
        displayImg.classList.remove("fade-in")
    }, 1000)
}

thumbs.addEventListener("click", changeImg);