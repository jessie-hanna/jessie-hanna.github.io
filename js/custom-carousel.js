window.addEventListener("DOMContentLoaded", (event) => {
    const moveNext = (carouselElement, scrollPosition) => {
        const cardWidth = carouselElement.querySelector(".carousel-item").offsetWidth;
        const carouselWidth = carouselElement.querySelector(".carousel-inner").scrollWidth;
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            carouselElement.querySelector(".carousel-inner")
                .scroll({
                    left: scrollPosition,
                    behavior: "smooth",
                });
        }
        return scrollPosition;
    };
    const movePrev = (carouselElement, scrollPosition) => {
        const cardWidth = carouselElement.querySelector(".carousel-item").offsetWidth;
        const carouselWidth = carouselElement.querySelector(".carousel-inner").scrollWidth;
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            carouselElement.querySelector(".carousel-inner")
                .scroll({
                    left: scrollPosition,
                    behavior: "smooth",
                });
        }
        return scrollPosition;
    };
    const activateCarousel = (carouselElement) => {
        if (window.matchMedia("(min-width: 768px)").matches) {
            let scrollPosition = 0;

            const nextButton = carouselElement.querySelector(".carousel-control-next");
            nextButton.addEventListener("click", () => {
                scrollPosition = moveNext(carouselElement, scrollPosition)
            });
            nextButton.addEventListener("touchstart", () => {
                scrollPosition = moveNext(carouselElement, scrollPosition);
            })

            const prevButton = carouselElement.querySelector(".carousel-control-prev");
            prevButton.addEventListener("click", () => {
                scrollPosition = movePrev(carouselElement, scrollPosition)
            });
            prevButton.addEventListener("touchstart", () => {
                scrollPosition = movePrev(carouselElement, scrollPosition)
            });
        } else {
            console.log('click');
            carouselElement.classList.add("slide");
        }
    };

    var carousels = document.querySelectorAll(".carousel");
    carousels.forEach(activateCarousel);
});
