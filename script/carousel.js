class Carousel {
  constructor(selector) {
    this.carousel = document.querySelector(selector);
    this.slides = Array.from(this.carousel.children);
    this.middleIndex = Math.ceil((this.slides.length - 1) / 2);
    this.buttons = document.querySelectorAll(".prediction-section__button");
    this.mobileButtons = document.querySelectorAll(
      ".prediction-section__mobile-button"
    );
    this.currentSlideIndex = this.middleIndex;
    this.currentSlide = this.slides[this.currentSlideIndex];
    this.slideRect = this.currentSlide.getBoundingClientRect();
    this.maxScroll = this.middleIndex * (this.slideRect.width + 16);
    this.firstScrolls = false;
    this.scrollPx = 0;
    this.dragDistance = 0;
    this.totalDistance = 0;
    this.isMouseWheelMoved = false;
    this.isDragging = false;
    this.timeoutId;
    this.dragStartX = 0;
    this.scrollCount = 0;
    this.newPosition = 0;
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
    this.carousel.addEventListener(
      "touchstart",
      this.handleTouchDown.bind(this)
    );
    this.carousel.addEventListener("touchend", this.handleTouchUp.bind(this));
    this.carousel.addEventListener(
      "touchmove",
      this.handleTouchMove.bind(this)
    );
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => {
        this.buttonScroll(button);
      });
    });
    this.mobileButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.buttonScroll(button);
      });
    });
  }

  buttonScroll(button) {
    this.carousel.style.transitionDuration = "300ms";
    if (button === this.buttons[0] || button === this.mobileButtons[0]) {
      if (this.currentSlideIndex <= 0) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex -= 1;
        this.scrollPx -= -336;
        this.carousel.style.transform = `translate3D(calc(${this.scrollPx}px), 0px, 0px)`;
      }
    } else if (button === this.buttons[1]) {
      this.currentSlideIndex = 3;
      this.scrollPx = 0;
      this.carousel.style.transform = `translate3D(${this.scrollPx}px, 0px, 0px)`;
    } else {
      if (this.currentSlideIndex >= this.slides.length - 1) {
        this.currentSlideIndex = this.slides.length - 1;
        this.scrollPx = -this.maxScroll;
        this.carousel.style.transform = `translate3D(calc(${this.scrollPx}px), 0px, 0px)`;
      } else {
        this.currentSlideIndex += 1;
        this.scrollPx -= 336;
        this.carousel.style.transform = `translate3D(calc(${this.scrollPx}px), 0px, 0px)`;
      }
    }
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
  }

  handleTouchDown(event) {
    event.preventDefault();
    this.isDragging = true;
    this.dragStartX = event.changedTouches[0].clientX;
    this.carousel.style.transitionDuration = "0ms";
  }

  handleMouseUp(event) {
    event.preventDefault();
    if (this.isDragging) {
      this.isDragging = false;
      if (this.dragDistance > 0) {
        this.scroll(1);
      } else {
        this.scroll(-1);
      }
    }
  }

  handleTouchUp(event) {
    event.preventDefault();
    if (this.isDragging) {
      this.isDragging = false;
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
      this.totalDistance = this.dragDistance + this.scrollPx;
      if (this.totalDistance >= this.maxScroll) {
        this.totalDistance = this.maxScroll;
      } else if (this.totalDistance <= -this.maxScroll) {
        this.totalDistance = -this.maxScroll;
      }
      this.carousel.style.transform = `translate3d(${this.totalDistance}px, 0, 0)`;
    }
  }

  handleTouchMove(event) {
    event.preventDefault();
    if (this.isDragging) {
      const dragCurrentX = event.changedTouches[0].clientX;
      this.dragDistance = dragCurrentX - this.dragStartX;
      this.carousel.scrollLeft = this.scrollLeftStart - this.dragDistance;
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
    if (this.isMouseWheelMoved) {
      const currentPosition = 200 - slideWidthWithGap / 2;
      if (this.scrollCount < 176 && this.scrollCount >= -176) {
        if (delta > 0) {
          this.scrollCount = -100;
          this.scrollCount -= deltaY;
          this.firstScrolls = false;
        } else {
          this.scrollCount = 100;
          this.scrollCount -= deltaY;
          this.firstScrolls = false;
        }
      } else if (this.scrollCount === 200 || this.scrollCount === -200) {
        this.newPosition = currentPosition;
        this.currentSlideIndex += delta;
        this.firstScrolls = true;
      }
      if (this.firstScrolls === true) {
        this.scrollCount -= deltaY;
        if (delta > 0) {
          this.newPosition -= deltaY;
        } else {
          this.newPosition -= deltaY;
        }
        if (this.newPosition >= slideWidthWithGap) {
          this.newPosition -= slideWidthWithGap * -delta;
          this.currentSlideIndex += delta;
          if (this.currentSlideIndex < 0) {
            this.currentSlideIndex = 0;
          }
        } else if (this.newPosition <= -slideWidthWithGap) {
          if (this.currentSlideIndex >= this.slides.length - 1) {
            this.currentSlideIndex = this.slides.length - 1;
          } else {
            this.newPosition -= slideWidthWithGap * -delta;
            this.currentSlideIndex += delta;
          }
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
        this.currentSlideIndex -= delta;
      } else if (this.newPosition <= -maxWidth) {
        this.updatedPosition = this.newPosition - -maxWidth;
        this.currentSlideIndex -= delta;
      }
      while (
        this.updatedPosition >= updatedMaxWidth ||
        this.updatedPosition <= -updatedMaxWidth
      ) {
        if (this.updatedPosition >= updatedMaxWidth) {
          this.updatedPosition -= updatedMaxWidth;
          this.currentSlideIndex -= delta;

          if (this.currentSlideIndex < 0) {
            this.currentSlideIndex = 0;
          }
        } else if (this.updatedPosition <= -updatedMaxWidth) {
          this.updatedPosition += updatedMaxWidth;
          this.currentSlideIndex -= delta;

          if (this.currentSlideIndex >= this.slides.length) {
            this.currentSlideIndex = this.slides.length - 1;
          }
        }
      }

      this.scrollToCurrentSlide();
    }
  }

  scrollToCurrentSlide() {
    if (this.currentSlideIndex <= 0) {
      this.currentSlideIndex = 0;
    } else if (this.currentSlideIndex >= this.slides.length) {
      this.currentSlideIndex = this.slides.length - 1;
    }
    this.currentSlide = this.slides[this.currentSlideIndex];
    const carouselRect = this.carousel.getBoundingClientRect();
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
          this.scrollPx = lock * -1;
          this.scrollCount = 0;
          this.newPosition = 0;
          this.dragDistance = 0;
          this.carousel.style.transform = `translate3d(${this.scrollPx}px,0,0)`;
          this.carousel.style.transitionDuration = "300ms";
        }
      }, 0);
    }
  }
}

const carousel = new Carousel(".carousel-prediction");
