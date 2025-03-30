class FullPageScroll {
	constructor(options = {}) {
		this.sections = document.querySelectorAll(".section");
		this.currentIndex = 0;
		this.isScrolling = false;
		this.options = {
			animationDuration: options.animationDuration || 800,
			easing: options.easing || "ease-in-out",
		};
		this.init();
	}

	init() {
		this.setStyles();
		this.handleScroll();
	}

	setStyles() {
		document.body.style.overflow = "hidden";
		document.documentElement.style.scrollBehavior = "smooth";
		this.sections.forEach((section) => {
			section.style.height = "100vh";
			section.style.transition = `transform ${this.options.animationDuration}ms ${this.options.easing}`;
			section.style.position = "relative";
		});
	}

	handleScroll() {
		window.addEventListener("wheel", (event) => {
			if (this.isScrolling) return;
			this.isScrolling = true;

			if (event.deltaY > 0) {
				this.scrollNext();
			} else {
				this.scrollPrev();
			}

			setTimeout(
				() => (this.isScrolling = false),
				this.options.animationDuration
			);
		});
	}

	scrollTo(index) {
		if (index < 0 || index >= this.sections.length) return;
		this.currentIndex = index;
		this.updateScroll();
	}

	scrollNext() {
		if (this.currentIndex < this.sections.length - 1) {
			this.currentIndex++;
			this.updateScroll();
		}
	}

	scrollPrev() {
		if (this.currentIndex > 0) {
			this.currentIndex--;
			this.updateScroll();
		}
	}

	updateScroll() {
		window.scrollTo({
			top: this.sections[this.currentIndex].offsetTop,
			behavior: "smooth",
		});
	}
}

// Export as ES module
export default FullPageScroll;

// Export a function for initialization
export function installFullPageScroll(options) {
	return new FullPageScroll(options);
}
