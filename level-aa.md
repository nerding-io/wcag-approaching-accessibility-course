# Level AA Checklist 
Level AA of the Web Content Accessibility Guidelines (WCAG) sets a standard for creating accessible web content. Here's a checklist with code examples to help learners understand and implement Level AA accessibility requirements:

### Provide Alternative Text for Images:

Ensure all images have descriptive alternative text.

Example: 
``` html
<img src="image.jpg" alt="A person using a wheelchair in a park">
```

### Use Semantic HTML:

Use proper HTML elements to structure the content.

Example: 
``` html
<header>, <main>, <footer>
<nav>, <section>, <article>, <aside>
```

### Provide Sufficient Color Contrast:

Ensure text and other content have enough contrast against the background.

Example: 
``` css
color: #000; 
background-color: #fff;
```

### Use Keyboard Accessible Controls:

Make sure all interactive elements are accessible using the keyboard alone.

Example: 
``` html
<button onclick="handleClick()" onkeydown="handleKeydown(event)">Click Me</button>
```

### Ensure Forms are Accessible:

Add labels to form elements and provide helpful instructions.

Example: 
``` html
<label for="name">Name:</label> <input type="text" id="name" name="name">
```

### Provide Synchronized Media Captions:

Include captions for audio and video content.

Example: 
``` html
<video controls><track kind="captions" src="captions.vtt" label="English" srclang="en"></video>
```

### Make Links Descriptive:

Use meaningful link text that provides information about the destination.

Example: 
``` html
<a href="https://www.example.com">Visit Example Website</a>
```

### Ensure Proper Heading Structure:

Use headings in a logical order to structure content.

Example: 
``` html
<h1>Main Heading</h1> <h2>Subheading</h2>
```

### Provide Visible Focus Indicators:

Make sure interactive elements have a visible focus indicator.

Example: 
``` css
:focus { outline: 2px solid blue; }
```

### Ensure Readable Text:

Use legible fonts and appropriate font sizes.

Example: 
``` css
font-family: Arial, sans-serif; font-size: 16px;
```

### Avoid Automatic Timeouts:
Allow users to control the timing of any time-based content.

Example: 
``` html
<meta http-equiv="refresh" content="300">
```

### Provide Clear Error Messages:

Display clear and concise error messages when users encounter form validation issues.

Example: 
``` html
<div role="alert" aria-live="assertive">
    Please enter a valid email address.
</div>
```
Remember, this checklist is not exhaustive, but it covers some essential accessibility requirements at Level AA.