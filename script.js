jQuery(document).ready(function() {
        $.ajax({
              url:"Data/info.json",
              type:"GET",
              dataType: 'json',
              success:function(result){
                //console.log(result);   
                //console.log(result.infoFromJSON[2].subspeciesNames["sub_1"]);
                //var info = result.infoFromJSON[2].subspeciesNames["sub_1"];
                //makeTable(info);
                var arr = result.infoFromJSON;
                getElFromArr(arr);
                //forInObj(obj);
              }
        });
        console.log( "document loaded" );
    });
$( window ).load(function() {
    console.log( "window loaded" );
});

function makeTable(info) {
    var trOfTable = document.createElement('tr');
    var cell = document.createElement('td');
    trOfTable.appendChild(cell);
    cell.innerHTML = info;
    document.getElementById("theTable").appendChild(trOfTable);
}

function getElFromArr(arr) {
  for(var i = 0; i < arr.length; i++) {
    var obj = arr[i].subspeciesNames;
    for (var key in obj) {
      makeTable(obj[key]);
    }
    //forInObj(obj);
  }
}

/*function forInObj(obj) {
  for (var key in obj) {
    makeTable(obj[key]);
  }
} */