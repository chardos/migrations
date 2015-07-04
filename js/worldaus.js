
var W = {}

W.vars = {
	
};


W.init = function() {
}


//CONFIG
var arcWidth = [3,2,5,7];
var arcColor = null;


$(document).ready(function() {

  var migrationMap = new Datamap({
    scope: 'world',
    responsive: true,
    element: document.getElementById('map'),
    projection: 'mercator',
    
    fills: {
      defaultFill: "#262626"
    },
    
    data: {
      AUS: {
        fillKey: 'LOW',
        numberOfThings: 2002
      },
      USA: {
        fillKey: 'MEDIUM',
        numberOfThings: 10381
      },
      GBR: {
        fillKey: 'MEDIUM',
        numberOfThings: 10381
      }
    },


    geographyConfig: {
      highlightBorderColor: '#ffffff',
      popupTemplate: function(geo, data) {
        if (data){
          return '<div class="hoverinfo">' + geo.properties.name + '<br/><br/>Immigrants #:' +  data.numberOfThings + ' </div>'
        } else {
          return '<div class="hoverinfo">' + geo.properties.name + '</div>'
        }
      },
      highlightBorderWidth: 1
    }

  });

  migrationMap.arc( path1996 );


  window.addEventListener('resize', function() {
      migrationMap.resize();
  });

});
