// All the Axios Code Will be in the functions
// Every API is differernt so the responses returned may be different
// Axios return Promise

// Axios Global 
// By using the Custom header we can protect one route but if we have to protect several routes
// We can pass token as a parameter to all the header
axios.defaults.headers.common['X-Auth-Token'] = 'some token'; // So we will get protected routes
// Due to the above code we will get X-Auth-Token in every route

// GET REQUEST
function getTodos() {

  axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5') // We can also pass timeout for the get Request
       .then(res => showOutput(res))
       .catch(err => console.log(err.message));

    // Alternate syntax for get with params
    // Params is what is there in Query String xyz.com?search=5
    // axios({
    //     methos : 'get',
    //     url : 'https://jsonplaceholder.typicode.com/photos',
    //     params : {
    //         _limit : 5
    //     }
    // })
    // .then(res => showOutput(res))
    // .catch(err => console.log(err.message));

}

// POST REQUEST
function addTodo() {

  //1.  One method same as above instead of params -> data will be there

  //2. Post will return the newly added item
  axios.post('https://jsonplaceholder.typicode.com/photos',{  // In the Axios Post request 2 Arg is Data
    title: 'Ranu mondal',
    'url': 'ranu@mondal',
    'thumbnailUrl': 'ranu@ranu@ranu'
  })
  .then(res => showOutput(res))
  .catch(err => console.log(err.message));

}

// PUT/PATCH REQUEST
function updateTodo() {

  // Put removes the PreExisting Data OR completely overwrites the data
  // 1st method is same as 2nd in GET

  //2. The below will change the Post 1 title and returns the patched post
  axios.patch('https://jsonplaceholder.typicode.com/photos/1',{
        title:'Ranu Mahan Hai'
  })
  .then(res => showOutput(res))
  .catch(err => console.log(err.message));

}

// DELETE REQUEST
function removeTodo() {
   
    // Delets the particluar post and returns it In this case returned post will be empty
    axios.delete('https://jsonplaceholder.typicode.com/photos/1')
    .then(res => showOutput(res))
    .catch(err => console.log(err.message));
}

// SIMULTANEOUS DATA
function getData() {
   
    // Very Essential Used when we have to fetch multiple request Asynchronously
    axios.all([        // Axios will take array of all request
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10'),
        axios.get('https://jsonplaceholder.typicode.com/comments?_limit=10')
    ])
    .then(               // This will be executed only if above requests gets completely fetched
         // It will return array of res
         //res => console.log(res[0],res[1]) // res[0] is of photos
        axios.spread((photo,comment) => showOutput(photo)) 
        // axios.spread() takes a function as a argument
    )
    .catch(err => console.log(err.message));
}

// CUSTOM HEADERS
function customHeaders() {
  
    // Used in the case of Authentiation tokens JWT
    const config  = {
        header :{
            'Content-Type' : 'application/json',
            Authorisation : 'sometokenvalue'
        }
    }

    // Whenever you make a post request it will check for that Config OR Authorisation
    // 3 arg is of config
    axios.post('https://jsonplaceholder.typicode.com/comments',{
        name : 'Jaguar',
        'email' : 'jagua@gmial.com',
        'body' : 'Jagaur is a nice car'
    },config)
    .then(res => showOutput(res))
    .catch(err => console.log(err.message));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
   
    // Not that Useful see traversy media video
    console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then(res => showOutput(res))
    .catch(err => {
        if (err.response)
        // Sever responded with status other than 200
        console.log(err.res.data);
        console.log(err.response.status);
        console.log(err.response.header);

        if (err.response.status === 404)console.log('Page not found');

        // And many more error handling ...............
    })
}

// CANCEL TOKEN
function cancelToken() {
  // when you have to cancel the request ....

}

// INTERCEPTING REQUESTS & RESPONSES
// Kind of a Logger that logs for every Request...
// See YT video

// AXIOS INSTANCES
// Call axios instantly with some modfied request
// See B channel YT 

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);