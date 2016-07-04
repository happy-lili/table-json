$( document ).ready(function() {
	console.log( "document loaded" );
});
$( window ).load(function() {
    console.log( "window loaded" );
});

var sizeOfTable = 3;
for(var i = 0; i < sizeOfTable; i++)
{
	var trOfTable = document.createElement('tr');
	trOfTable.innerHTML = i;
    document.getElementById("theTable").appendChild(trOfTable);
	for(var j = 0; j < 4; j++)
	{
		var cell = document.createElement('td');
		cell.innerHTML = j;
    	document.getElementById("theTable").appendChild(cell);
	}
}
//    $("#theTable")
