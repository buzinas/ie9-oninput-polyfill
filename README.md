# IE9 oninput (input event) polyfill
Forces IE9 to trigger the INPUT event when the user deletes/cuts text from the input - making the event works as it should (and as it does in all the modern browsers)

## Usage
Insert the script anywhere in your webpage, and the input event will start working properly on IE9.

```html
<script src="ie9-oninput-polyfill.js"></script>
```

You can even use the conditional tags:

```html
<!--[if IE 9]><script src="ie9-oninput-polyfill.js"></script><![endif]-->
```

## NPM
You can install it from NPM also:

```shell
npm install --save ie9-oninput-polyfill
```

Then, if using some bundler like webpack/browserify, you only need to import it:

```javascript
require('ie9-oninput-polyfill');
```
