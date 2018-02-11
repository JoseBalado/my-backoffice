const getRoot = function () {
  fetch('http://localhost:3000/api', {  credentials: "include"
      }).then(function(response) { // Convert to JSON
    return response.json();
  }).then(function(j) {
    // Yay, `j` is a JavaScript object
    console.log(j); 
  });
}

const getToken = function () {
  fetch('http://localhost:3000/token').then(function(response) { 
    // Convert to JSON
    return response.json();
  }).then(function(j) {
    // Yay, `j` is a JavaScript object
    console.log(j); 
  });
}

