## aframe-crease-component

A crease component for [A-Frame](https://aframe.io). Providing the component switches the type of shading to flat giving a geometry a creased appearance.
Removing the component or setting it to false switches back to smooth shading.

This differs from material='shading: flat' and only works with shading: standard (and other THREE materials). 

### Properties

This is a single true/false property component. Its default value is true. 

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/andreasplesch/aframe-crease-component/master/dist/aframe-crease-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity crease geometry='primitive: sphere' material></a-entity>
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-example-component
```

Then register and use.

```js
require('aframe');
require('aframe-example-component');
```
