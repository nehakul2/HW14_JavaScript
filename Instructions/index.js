// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#dateTime');
var $stateInput = document.querySelector('#state');
var $cityInput = document.querySelector('#city');
var $searchBtn = document.querySelector('#search');
var $searchBtn1 = document.querySelector('#state');
var $searchBtn2 = document.querySelector('#city');
var $searchBtn3 = document.querySelector('#country');
var $searchBtn4 = document.querySelector('#shape');

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked

//$searchBtn.addEventListener('click', handleSearchButtonClick);
//$searchBtn1.addEventListener('click', handleStateSearchButtonClick);
//$searchBtn2.addEventListener('click', handleCitySearchlick);


// Set filteredDate to the DataSet initially
// dataset comes from the Data.js file
var filteredDate = dataSet;

// renderTable renders the filteredDate to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filteredDate.length; i++) {
    // Get get the current address object and its fields
    var address = filteredDate[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}


function handleSearchButtonClick() {
  // lets read the users inout criteria
  var filterDate = $dateInput.value;
  console.log("date to search is" ,filterDate);

  // Set filteredDate to an array of all datetime matches "filterDate" matches the filter
  filteredDate = dataSet.filter(function(finddate) {
  var searchDate = finddate.datetime;
    //.log("data found is" , searchDate)
    
    // If true, addd the datetime to the filteredDate, otherwise don't add it to filteredDate
    return searchDate === filterDate;
  });
  renderTable();

}


function handleStateSearchButtonClick() {
  // lets read the users inout criteria
  var filterState = $stateInput.value;
  console.log("state to search is" ,filterState);

  // Set filteredDate to an array of all datetime matches "filterDate" matches the filter
  filteredDate = dataSet.filter(function(findstate) {
  var searchState = findstate.state;
    //.log("data found is" , searchDate)
    
    // If true, addd the datetime to the filteredDate, otherwise don't add it to filteredDate
    return searchState === filterState;
  });
  renderTable();

}

function handleCitySearchlick() {
  // lets read the users inout criteria
  var filterCity = $cityInput.value;
  console.log("city to search is" ,filterCity);

  // Set filteredDate to an array of all datetime matches "filterDate" matches the filter
  filteredDate = dataSet.filter(function(findcity) {
  var searchCity = findcity.cityInput;
    //.log("data found is" , searchDate)
    
    // If true, addd the datetime to the filteredDate, otherwise don't add it to filteredDate
    return searchCity === filterCity;
  });
  renderTable();

};



  function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myCity");
  //console.log(input);
  filter = input.value.toUpperCase();
  //console.log(filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

 function myDateFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myDate");
  //console.log(input);
  filter = input.value.toUpperCase();
  //console.log(filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

 function myStateFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myState");
  //console.log(input);
  filter = input.value.toUpperCase();
  //console.log(filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

 function myShapeFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myShape");
  //console.log(input);
  filter = input.value.toUpperCase();
  //console.log(filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

 function myCountryFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myCountry");
  //console.log(input);
  filter = input.value.toUpperCase();
  //console.log(filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

function myTimeFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myTime");
  //console.log(input);
  filter = input.value.toUpperCase();
  //console.log(filter);
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

var Pagination = {

    code: '',

    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    Extend: function(data) {
        data = myTable || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;

    },

    // add pages by number (from [s] to [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },

    // add last page with separator
    Last: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },

    // add first page with separator
    First: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },



    // --------------------
    // Handlers
    // --------------------

    // change page
    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },

    // previous page
    Prev: function() {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    // next page
    Next: function() {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },



    // --------------------
    // Script
    // --------------------

    // binding pages
    Bind: function() {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    // write pagination
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    // find pagination type
    Start: function() {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },



    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function(e) {

        var html = [
            '<a>&#9668;</a>', // previous button
            '<span></span>',  // pagination container
            '<a>&#9658;</a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('a')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};



/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */

var init = function() {
    Pagination.Init(document.getElementById('pagination'), {
        size: 30, // pages size
        page: 1,  // selected page
        step: 3   // pages before and after current
    });
};

document.addEventListener('DOMContentLoaded', init, false);



// Render the table for the first time on page load
renderTable();





