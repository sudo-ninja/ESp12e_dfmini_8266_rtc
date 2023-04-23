// here options define same as modal in node where value names are same key field of modal
var options = {
  valueNames: [ 'name', 'number' ],
  item: '<li><span class="number"></span><span class="name"></span></li>'
};

// this is array for values to make user list
var values = [];

// user data input list is made using values input number and link with options.
var userList = new List('users', options, values);



function hello(paran) {
  // this is same as find data array in node and use .length to know the number of object got return 
  // object.key in passed param will return the array iterator ("iterating" is the technical term for looping) positions of tune maintianed in array name of hymns.json
  // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_object_keys
  let hymnLength = Object.keys(paran).length;
  for(const key in paran) {
     console.log(key + "" + paran[key])
      userList.add({
          name: key,
          number: paran[key]
      });
  }
}

let hymns, stat;
// here table made in hymns .json is called
fetch("./hymns.json")
.then(response => {
  stat = response.ok;
   return response.json();
})
.then(data =>{
  // call a function
  if(stat) {
      hymns = data;
      //call function
      // here data is passed to hello function as parameter is and this 
      // hello function will search key 
      hello(hymns);
  }
})


  
