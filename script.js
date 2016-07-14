jQuery(document).ready(function() {
        $.ajax({
              url:"Data/info.json",
              type:"GET",
              dataType: 'json',
              success:function(result){
              var arr = result.infoFromJSON;
              makeTable_1();
              getElFromArr(arr);
              }
        });
        console.log( "document loaded" );
    });
$( window ).load(function() {
    console.log( "window loaded" );
});

function makeTable_1() {
  var trOfTable = document.createElement('tr');
  for(var i = 0; i <= 110; i+=10)
  {
    if(i == 0) {
      var cell = document.createElement('td');
      trOfTable.appendChild(cell);
    } else if(i == 110) {
      var cell = document.createElement('td');
      trOfTable.appendChild(cell);
      cell.innerHTML = "Total:";
    } else {
      var cell = document.createElement('td');
      trOfTable.appendChild(cell);
      cell.innerHTML = i + "%";
    }
  }
  document.getElementById("theTable").appendChild(trOfTable);
}

function makeTable(info, percentage) {
  var trOfTable = document.createElement('tr');
  var cell = document.createElement('td');
  trOfTable.appendChild(cell);
  cell.innerHTML = info;
  for(var i = 10; i < 120; i+=10)
  {
    var count = i + "%";
    if(i == 11) {
      var cell = document.createElement('td');
      trOfTable.appendChild(cell);
    } else {
        var cell = document.createElement('td');
        trOfTable.appendChild(cell);
      if(percentage == count) {
        cell.innerHTML = "v";
      }
    }
  }
  document.getElementById("theTable").appendChild(trOfTable);
}

function getElFromArr(arr) {
  for(var i = 0; i < arr.length; i++) {
    makeTable(arr[i].mainFeatureName);
    var obj = arr[i].subspeciesDoneInPercnt;
    for (var key in obj) {
      var percentage = obj[key];
      makeTable(key, percentage);
    }
  }
}
