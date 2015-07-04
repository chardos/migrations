
var W = {}

W.vars = {
	year: 1996
};


W.init = function() {
}

function pullDataAccordingToOptions() {
  var chosenYear = W.vars.year;
  alert('trigger something');
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
      defaultFill: "RGBA(38, 38, 38, 1)"
    },
    
    data: {
      AUS: {
        y1996: 2002,
        y2001: 221312312,
        y2006: 2312321,
        y2011: 21312412
      },
      USA: {
        y1996: 2002,
        y2001: 221312312,
        y2006: 2312321,
        y2011: 21312412
      },
      GBR: {
        y1996: 2002,
        y2001: 221312312,
        y2006: 2312321,
        y2011: 21312412
      }
    },


    geographyConfig: {
      highlightColor: 'RGBA(252, 99, 51, 1)',
      highlightBorderColor: '#ffffff',
      popupTemplate: function(geo, data) {
        if (data){
          return '<div class="hoverinfo">' + geo.properties.name + '<br/><br/>Immigrants #:' +  data.y1996 + ' </div>'
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

  window.setInterval(function() {
    migrationMap.arc (path2001);
  }, 2000);

});
