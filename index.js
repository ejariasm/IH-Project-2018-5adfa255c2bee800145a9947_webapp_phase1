const BOOUGHT_NY_URL= ("https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD");

var map;

var BOROUGHT_NY=[];

function getDataFromURL(URL) {
    var data = $.get(BOOUGHT_NY_URL, function () {
        var posLen = data.responseJSON.data.length;
        for (i=0; i<posLen;i++) {
            var posicion = data.responseJSON.data[i][9];
            console.log(posicion);
            BOROUGHT_NY.push(posicion);
        }
    })
}

function updateTable() {
    var tableRef = document.getElementById('posTable').getElementsByTagName('tbody')[0];
    for (j=0; j<BOROUGHT_NY.length;j++){
        // Insert a row in the table at the last row
        var newRow   = tableRef.insertRow(tableRef.rows.length);

// Insert a cell in the row at index 0
        var newCell  = newRow.insertCell(0);

// Append a text node to the cell
        var newText  = document.createTextNode(BOROUGHT_NY[j]);

        newCell.appendChild(newText);
    }


}


function initMap() {
    var myLatLng = {lat: 40.7290549, lng: -73.9965233};
    map = new google.maps.Map(document.getElementById('googleMapContainer'), {
        center : myLatLng,
        zoom: 18
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'NYU Stern School of Business'
    });
}