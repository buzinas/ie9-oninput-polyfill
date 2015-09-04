# ie9-input-event-polyfill
Forces IE9 to trigger the INPUT event when the user deletes/cuts text from the input - making the event works as it should (and as it does in all the modern browsers)

## Usage
Insert the script anywhere in your webpage, and the input event will start working properly on IE9.
`<script src="ie9-input-event-polyfill.js"></script>`

You can even use the conditional tags:
`<!--[if IE 9]><script src="ie9-input-event-polyfill.js"></script><![endif]-->`
