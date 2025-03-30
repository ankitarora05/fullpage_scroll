# Full Page Scroll 🚀

A simple fullpage scrolling plugin in simple JavaScript.

## Installation

npm install fullpage_scroll

## Usage

import FullPageScroll, { installFullPageScroll } from "full-page-scroll";

const fullPage = installFullPageScroll({ animationDuration: 1000, easing: "ease-in-out" });

###  Add Sections to Your HTML

<div class="section">Section 1</div>
<div class="section">Section 2</div>
<div class="section">Section 3</div>

### Navigate with Exposed Functions

fullPage.scrollNext(); // Scroll to next section
fullPage.scrollPrev(); // Scroll to previous section
fullPage.scrollTo(2);  // Scroll to a specific section