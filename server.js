// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

 // GET /api
 {
   documentation_url : 'https://github.com/mwiley322/PersonalAPI',
   base_url : 'Coming soon',
   - endpoints : [
     - {
         method : 'GET',
         path : '/api',
         description : 'Describes all available endpoints.'
       },
     - {
         method : 'GET',
         path : '/api/profile',
         description : 'Who I am and where I\'m from.'
       },
     - {
         method : 'GET',
         path : '/api/pizzas',
         description : 'Index of all pizza recipes.'
       },
     - {
         method : 'CREATE',
         path : '/api/pizzas',
         description : 'Post a new pizza recipe.'
       },
     - {
         method : 'PUT',
         path : '/api/pizzas/:id',
         description : 'Update an existing pizza recipe by ID.'
       },
     - {
         method : 'Delete',
         path : '/api/pizza/:id',
         description : 'Destroy an existing pizza recipe with ID'
       }
    ]
 }

 // GET /api/profile

 {
   name : 'Megan Wiley',
   githubLink : 'https://github.com/mwiley322',
   githubProfileImage :'https://avatars3.githubusercontent.com/u/22504093?v=3&s=460',
   personalSiteLink : 'https://mwiley322.github.io',
   education : 'B.A. Psychology & B.S. Human Development from UC Davis 2014',
   currentCity : 'Oakland, CA',
   pets : [
     {name : 'Love', type : 'cat', breed : 'Tabby', color : 'orange'}
     ],
   favoriteFood : 'Pepperoni pizza'
 }

 // GET /api/pizzas


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 *
 * The comments below give you an idea of the expected functionality
 * that you need to build. These are basic descriptions, for more
 * specifications, see the todosTest.js file and the outputs of running
 * the tests to see the exact details. BUILD THE FUNCTIONALITY IN THE
 * ORDER THAT THE TESTS DICTATE.
 */

// app.get('/api/todos/search', function search(req, res) {
//   var query = req.query.q;
//   var resultArray = todos.filter(function find(todo) {
//     return todo.task.includes(query);
//   }); //closes forEach function
//   res.json({data : resultArray});
// }); //closes get search function
//
//
// app.get('/api/todos', function index(req, res) {
//   res.json({data:todos});
// }); //closes get index function
//
//
// var counter = todos.length;
// app.post('/api/todos', function create(req, res) {
//   var newTask = req.body.task;
//   var newDesc = req.body.description;
//   counter++;
//   var newTodo = {_id : counter, task : newTask, description: newDesc};
//   todos.push(newTodo);
//   res.json(newTodo);
// });
//
//
// app.get('/api/todos/:id', function show(req, res) {
//   var itemToShow = parseInt(req.params.id);
//   todos.forEach(function(todo) {
//     if (todo._id === itemToShow) {
//       res.json(todo);
//     }; //closes if statement
//   }); // closes forEach function
// }); //closes get show function
//
//
// app.put('/api/todos/:id', function update(req, res) {
//   var itemToUpdate = parseInt(req.params.id);
//   var updateTask = req.body.task;
//   var updateDesc = req.body.description;
//   todos.forEach(function(todo) {
//     if (todo._id === itemToUpdate) {
//       todo.task = updateTask;
//       todo.description = updateDesc;
//       res.json(todo); //send updated object back to user
//     }; //closes if statement
//   }); // closes forEach function
// }); //closes update function
//
//
// app.delete('/api/todos/:id', function destroy(req, res) {
//   var itemToDelete = parseInt(req.params.id);
//   todos.forEach(function deleteToDo(todo, i) {
//     if (todo._id === itemToDelete) {
//       //make a copy of the marked todo
//       var deletedToDo = todo;
//       todos.splice(i, 1);
//       res.json(deletedToDo);
//     }; //closes if statement
//   }); // closes forEach function
//   res.send(204); //sends a 204 "no Content" message if the ID they searched for cannot be found
// }); //closes delete destroy function
//

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(3000, function() {
  console.log('Pizzas are being served on Port 3000!');
});
