# HTML/CSS Vanilla/Flexbox/Grid & Responsive Design Lecture Demo Site

Demo for the Codemsith HTML/CSS advanced topics lecture. This demo is intended to be used in addition to the slides.

It provides 3 pages of the same layout - a "Vanilla" CSS version, a Flexbox version, and a CSS Grid + Flexbox version. You can navigate between pages with the links at the bottom. The focus of the demo should be on each of the 3 .css files. The comments in each file should help guide you through. Some of the details of the page change between versions, like the layout of items within containers, to demonstrate what's possible with each toolset. 

Make use of Chrome's developer tools to display responsiveness. I suggest using iPhone 6/7/8, iPad, and iPad Pro in both portrait and landscape mode. These are only a small subset of devices; be sure to note that "universal" responsiveness requires many more rulesets.

<b>Quick tip</b>: Switch the iPad Pro to landscape and you'll essentially be seeing the desktop version. 

A <code>client/dev.css</code> file is also included, the intent of which is to abstract away the minor formatting/coloring of the page so that the 3 other css files can focus purely on layout and @media queries. Those kinds of changes, should you want any, should be made here.

Refer to <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS-Tricks for Flexbox</a> or <a href="https://css-tricks.com/snippets/css/complete-guide-grid/">CSS-Tricks for Grid</a> for help with unfamiliar properties, or simply for a refresher on Flexbox & Grid.

## Setup
Run <code>npm install</code> and <code>npm start</code> and navigate browser to <code>localhost:5555/</code>. If you'd like to see changes to your CSS happen live, I recommend the <b>Live Server</b> VSCode extension.

## Pages

### Vanilla CSS
<code>client/vanilla.css</code>

This page is intended to demonstrate the difficulty of responsive design without advanced CSS tools. It employs such vanilla tactics as floats, inline blocks, text-align, margin: 0 auto, etc. While it works for specific device sizes, it is intentionally sloppy -- elements are often misaligned, wrapping is an issue, and many things which would ideally be relatively sized are hardcoded pixels.

It was also built first for desktop, then tablet and mobile were "added on" -- breaking the mobile-first design principle. This is reflected in the order of rulesets in the file.

Note however that the Big Ad element spans over the Navigation element. This will not be the case in the Flexbox edition, however it will return in Grid!

### Flexbox
<code>client/flex.css</code>

This page is arguably the best implementation for the content. Focus should be on the flex properties and what each one does.

### CSS Grid & Flexbox
<code>client/grid.css</code>

This page is meant to demonstrate the most common and useful grid properties. It achieves the overlapping Big Ad in a remarkably simple way, demonstrating the true advantage of grid over pure flexbox when page structure is complex.

Because grid is ideal for more complex layouts, it is not fully implemented here until the page has scaled up to desktop size.