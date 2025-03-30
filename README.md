# JavaScript Full Page Scroll 🚀

A simple full-page scrolling plugin in vanilla JavaScript that supports both **vertical** and **horizontal** scrolling.

## Installation

### NPM

```sh
npm install jsfullpage_scroll
```

## Usage

```javascript
import FullPageScroll, { installFullPageScroll } from "jsfullpage_scroll";

const fullPage = installFullPageScroll({ 
  container: "#fullpage-container",
  animationDuration: 1000, 
  easing: "ease-in-out", 
  direction: "vertical" // or "horizontal"
});
```

### CDN

Or, you can use this package via a CDN:

```html
<!-- Include the script -->
<script src="https://cdn.jsdelivr.net/npm/jsfullpage_scroll@latest"></script>

<!-- Initialize -->
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const fullPage = installFullPageScroll({ 
      container: "#fullpage-container", 
      animationDuration: 1000, 
      easing: "ease-in-out", 
      direction: "vertical" // or "horizontal"
    });

    // Example usage
    document.getElementById("next").addEventListener("click", () => fullPage.scrollNext());
  });
</script>
```

### Add Sections to Your HTML

```html
<div id="fullpage-container">
  <div class="section">Section 1</div>
  <div class="section">Section 2</div>
  <div class="section">Section 3</div>
</div>
```

### Navigate with Exposed Functions

```javascript
fullPage.scrollNext(); // Scroll to the next section
fullPage.scrollPrev(); // Scroll to the previous section
fullPage.scrollTo(2);  // Scroll to a specific section
```

## Features
- **Supports vertical and horizontal scrolling**
- **Customizable animation duration and easing**
- **Easily navigable via exposed functions**
- **ES6 compliant**

## License

MIT License

```
MIT License

Copyright (c) 2025 Ankit Arora

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```