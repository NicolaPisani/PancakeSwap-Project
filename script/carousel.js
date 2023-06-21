class Carousel {
  constructor(selector) {
    this.carousel = document.querySelector(selector);
    this.slides = Array.from(this.carousel.children);
    this.startIndex = 3;
    this.currentSlideIndex = 3;
    this.currentSlide = this.slides[this.currentSlideIndex];
    this.slideRect = this.currentSlide.getBoundingClientRect();
    this.maxScroll = this.startIndex * (this.slideRect.width + 16);
    this.scrollPx = 0;
    this.dragDistance = 0;
    this.totalDistance = 0;
    this.isMouseWheelMoved = false;
    this.isDragging = false;
    this.timeoutId;
    this.dragStartPosition = 0;
    this.totalDragDistance = 0;
    this.dragStartX = 0;
    this.scrollCount = 0;
    this.newPosition = 0;
    this.speed = 1.5;
    this.carousel.addEventListener("wheel", this.handleWheel.bind(this));
    this.carousel.addEventListener(
      "mousedown",
      this.handleMouseDown.bind(this)
    );
    this.carousel.addEventListener("mouseup", this.handleMouseUp.bind(this));
    this.carousel.addEventListener("mouseleave", this.handleMouseUp.bind(this));
    this.carousel.addEventListener(
      "mousemove",
      this.handleMouseMove.bind(this)
    );
  }

  handleWheel(event) {
    event.preventDefault();
    this.isMouseWheelMoved = true;
    clearTimeout(this.timeoutId);
    const delta = Math.sign(event.deltaY);
    this.scroll(delta, event.deltaY);
  }

  handleMouseDown(event) {
    event.preventDefault();
    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.carousel.style.transitionDuration = "0ms";
    this.dragStartPosition = event.clientX;
  }

  handleMouseUp(event) {
    event.preventDefault();
    if (this.isDragging) {
      this.isDragging = false;
      const dragEndX = event.clientX;
      this.totalDragDistance = Math.abs(dragEndX - this.dragStartPosition);
      if (this.dragDistance > 0) {
        this.scroll(1);
      } else {
        this.scroll(-1);
      }
    }
  }

  handleMouseMove(event) {
    event.preventDefault();
    if (this.isDragging) {
      const dragCurrentX = event.clientX;
      this.dragDistance = dragCurrentX - this.dragStartX;
      this.carousel.scrollLeft = this.scrollLeftStart - this.dragDistance;
      const scrollSpeed = this.dragDistance * this.dragSpeed;
      this.totalDistance = this.dragDistance + this.scrollPx;
      if (this.totalDistance >= this.maxScroll) {
        this.totalDistance = this.maxScroll;
      } else if (this.totalDistance <= -this.maxScroll) {
        this.totalDistance = -this.maxScroll;
      }

      this.carousel.style.transform = `translate3d(${this.totalDistance}px, 0, 0)`;
    }
  }

  scroll(delta, deltaY) {
    const slideWidthWithGap = this.currentSlide.offsetWidth + 32;
    console.log(slideWidthWithGap);
    if (this.isMouseWheelMoved) {
      const currentPosition = slideWidthWithGap / 2;
      const updatedPosition = slideWidthWithGap / 3;

      if (this.scrollCount < 2 && this.scrollCount > -2) {
        if (delta > 0) {
          this.newPosition -= currentPosition * delta;
          this.scrollCount--;
        } else {
          this.newPosition += currentPosition * -delta;
          this.scrollCount++;
        }
      } else {
        if (delta > 0) {
          this.newPosition -= updatedPosition * delta;
          this.scrollCount--;
        } else {
          this.newPosition += updatedPosition * -delta;
          this.scrollCount++;
        }
      }
      if (this.scrollCount >= 2 || this.scrollCount <= -2) {
        if (this.newPosition >= slideWidthWithGap) {
          this.newPosition = 0;
          this.currentSlideIndex += delta;

          if (this.currentSlideIndex < 0) {
            this.currentSlideIndex = 0;
          }
          this.currentSlide = this.slides[this.currentSlideIndex];
        } else if (this.newPosition <= -slideWidthWithGap) {
          this.newPosition = 0;
          this.currentSlideIndex += delta;

          if (this.currentSlideIndex >= this.slides.length) {
            this.currentSlideIndex = this.slides.length - 1;
          }
          this.currentSlide = this.slides[this.currentSlideIndex];
        }
      }
      this.scrollPx -= deltaY;
      this.scrollToCurrentSlide();
    } else {
      const maxWidth = slideWidthWithGap / 2;
      const updatedMaxWidth = slideWidthWithGap - 16;
      this.newPosition = this.dragDistance;
      if (this.newPosition >= maxWidth) {
        this.updatedPosition = this.newPosition - maxWidth;
        this.currentSlideIndex += delta;
      } else if (this.newPosition <= -maxWidth) {
        this.updatedPosition = this.newPosition - -maxWidth;
        this.currentSlideIndex += delta;
      }
      while (
        this.updatedPosition >= updatedMaxWidth ||
        this.updatedPosition <= -updatedMaxWidth
      ) {
        if (this.updatedPosition >= updatedMaxWidth) {
          this.updatedPosition -= updatedMaxWidth;
          this.currentSlideIndex += delta;
        } else if (this.updatedPosition <= -updatedMaxWidth) {
          this.updatedPosition += updatedMaxWidth;
          this.currentSlideIndex += delta;
        }
      }
      if (this.currentSlideIndex < 0) {
        this.currentSlideIndex = 0;
      } else if (this.currentSlideIndex >= this.slides.length) {
        this.currentSlideIndex = this.slides.length - 1;
      }
      this.currentSlide = this.slides[this.currentSlideIndex];
      this.scrollToCurrentSlide();
    }
  }

  scrollToCurrentSlide() {
    this.currentSlide = this.slides[this.currentSlideIndex];
    const carouselRect = this.carousel.getBoundingClientRect();
    this.currentSlide = this.slides[this.currentSlideIndex];
    this.slideRect = this.currentSlide.getBoundingClientRect();

    if (this.isMouseWheelMoved) {
      if (this.scrollPx >= this.maxScroll) {
        this.scrollPx = this.maxScroll;
      } else if (this.scrollPx <= -this.maxScroll) {
        this.scrollPx = -this.maxScroll;
      }

      this.carousel.style.transform = `translate3d(${this.scrollPx}px, 0, 0)`;
      this.carousel.style.transitionDuration = "0ms";

      this.timeoutId = setTimeout(() => {
        this.isMouseWheelMoved = false;
        this.carousel.scroll({
          left: this.currentSlide.offsetLeft,
          behavior: "smooth",
        });
        if (!this.isMouseWheelMoved) {
          const lock =
            this.slideRect.left -
            carouselRect.left +
            this.carousel.scrollLeft -
            (this.carousel.offsetWidth - this.currentSlide.offsetWidth) / 2;
          this.scrollPx = lock * -1;
          this.newPosition = 0;
          this.scrollCount = 0;
          this.carousel.style.transform = `translate3d(${this.scrollPx}px, 0px, 0px)`;
          this.carousel.style.transitionDuration = "300ms";
        }
      }, 500);
    } else {
      this.timeoutId = setTimeout(() => {
        if (!this.isDragging) {
          const lock =
            this.slideRect.left -
            carouselRect.left +
            this.carousel.scrollLeft -
            (this.carousel.offsetWidth - this.currentSlide.offsetWidth) / 2;
          this.scrollPx = lock;
          this.scrollCount = 0;
          this.carousel.style.transform = `translate3d(${this.scrollPx}px,0,0)`;
          this.carousel.style.transitionDuration = "300ms";
        }
      }, 0);
    }
  }
}

const carousel = new Carousel(".carousel-prediction");
