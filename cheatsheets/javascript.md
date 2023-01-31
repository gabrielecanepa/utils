# JavaScript Basics

## Usage and version

### ES6

The last and most complete JavaScript version is called **ES6**, short for _ECMAScript Edition 6_, sometimes referred as ES2015.

It was published in June 2015 and modern browsers implement 95%+ of it.

### Node.js

**Node.js** is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.

```bash
node foo.js # Will execute the JS code inside `foo.js` (think `ruby foo.rb`)
```

```bash
node        # Gives a REPL to execute JS code
>
# Ctrl-C twice to exit
```

## Events

### preventDefault()

```javascript
document.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
  });
})
```

## AJAX

The modern technique used to make an **AJAX GET request** is `fetch`.

### GET request

An HTTP request containes just an **HTTP method** (aka verb or URL) and **HTTP headers** (containing user-agent, referer, cookies, ...).

```javascript
// GET request
fetch(url).then((response) => {
  // Do something once HTTP response is received, for example
  .then(response => response.json()) // to parse the response
    .then((data) => {
      console.log(data); // `data` is now a JS object
    });
});
```

### POST request

In a POST request there is still an **HTTP method** and **HTTP headers**, but there is also an **HTTP body**, containing 'new' informations sent by the user, usually by a form submission.

The _HTTP headers_ are communicating the server that a JSON object is sent by the user, the _HTTP body_ contains the actual JSON object.

```javascript
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(a_js_object)
})
```





