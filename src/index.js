class FullPageScroll {
	constructor({ container, animationDuration = 1000, easing = "ease-in-out", direction = "vertical" }) {
	  this.container = document.querySelector(container);
	  if (!this.container) {
		console.error("Container element not found");
		return;
	  }
	  this.sections = [...this.container.children];
	  this.currentIndex = 0;
	  this.animationDuration = animationDuration;
	  this.easing = easing;
	  this.direction = direction;
	  this.isScrolling = false;
  
	  this.setup();
	  this.addEventListeners();
	}
  
	setup() {
	  Object.assign(this.container.style, {
		overflow: "hidden",
		display: "flex",
		transition: `transform ${this.animationDuration}ms ${this.easing}`,
		flexDirection: this.direction === "horizontal" ? "row" : "column",
		width: this.direction === "horizontal" ? "100vw" : "100%",
		height: this.direction === "vertical" ? "100vh" : "100%"
	  });
  
	  this.sections.forEach(section => {
		Object.assign(section.style, {
		  flex: "0 0 100%",
		  width: this.direction === "horizontal" ? "100vw" : "100%",
		  height: this.direction === "vertical" ? "100vh" : "100%"
		});
	  });
	}
  
	addEventListeners() {
	  window.addEventListener("wheel", ({ deltaY }) => {
		if (this.isScrolling) return;
		this.isScrolling = true;
  
		deltaY > 0 ? this.scrollNext() : this.scrollPrev();
  
		setTimeout(() => (this.isScrolling = false), this.animationDuration);
	  });
	}
  
	scrollTo(index) {
	  if (index >= 0 && index < this.sections.length) {
		this.currentIndex = index;
		this.updateScrollPosition();
	  }
	}
  
	scrollNext() {
	  if (this.currentIndex < this.sections.length - 1) {
		this.currentIndex++;
		this.updateScrollPosition();
	  }
	}
  
	scrollPrev() {
	  if (this.currentIndex > 0) {
		this.currentIndex--;
		this.updateScrollPosition();
	  }
	}
  
	updateScrollPosition() {
	  this.container.style.transform = this.direction === "horizontal"
		? `translateX(-${this.currentIndex * 100}vw)`
		: `translateY(-${this.currentIndex * 100}vh)`;
	}
  }
  
  export const installFullPageScroll = (options) => new FullPageScroll(options);
  
  export default FullPageScroll;  