function generateRandomString(length) {
 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
 let result = ''
 for (let i = 0; i < length; i++) {
  result += characters.charAt(Math.floor(Math.random() * characters.length))
 }
 return result
}

setInterval(() => {
 const randomString = generateRandomString(50)

 fetch('http://metrics.demo.ru/senddata', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data: randomString })
 })
  
  .catch(error => {
   console.error('Error:', error)
  })
}, 1000);




//import {testFunction} from 'http://metrics.demo.ru/added_from_import.js';

import('http://metrics.demo.ru/added_from_import.js');



(function() {
	var scriptId = 'lib1'
	var scriptUrl = 'http://metrics.demo.ru/lib1.js'

	var existingScript = document.getElementById(scriptId);

	if (!existingScript || existingScript.tagName.toLowerCase() !== "script") {
		var script = document.createElement("script");
		script.id = scriptId; 
		script.src = scriptUrl; 
		document.body.appendChild(script);
	}
})();


(function() {
	var scriptId = 'lib2'
	var scriptUrl = 'http://metrics.demo.ru/lib2.js'

	var existingScript = document.getElementById(scriptId);

	if (!existingScript || existingScript.tagName.toLowerCase() !== "script") {
		var script = document.createElement("script");
		script.id = scriptId; 
		script.src = scriptUrl; 
		document.body.appendChild(script);
	}
})();


(function() {
	var scriptId = 'lib3'
	var scriptUrl = 'http://metrics.demo.ru/lib3.js'

	var existingScript = document.getElementById(scriptId);

	if (!existingScript || existingScript.tagName.toLowerCase() !== "script") {
		var script = document.createElement("script");
		script.id = scriptId; 
		script.src = scriptUrl; 
		document.body.appendChild(script);
	}
})();
