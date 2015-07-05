
var W = {}

W.vars = {
	year: 0
};


W.init = function() {
}

function pullDataAccordingToOptions() {
  var chosenYear = W.vars.year;
  switch(chosenYear) {
    case 0: migrationMap.arc( path1996 ); break;
    case 1: migrationMap.arc( path2001 ); break;
    case 2: migrationMap.arc( path2006 ); break;
    case 3: migrationMap.arc( path2011 ); break;
  }
}

//CONFIG
var arcWidth = [3,2,5,7];
var arcColor = null;
var migrationMap;


$(document).ready(function() {

  migrationMap = new Datamap({
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
        y1996: 8291471284,
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
          return '<div class="hoverinfo">' + geo.properties.name + '<br/><br/>' +
            '1996 : ' +  data.y1996 + '<br/>' +
            '2001 : ' +  data.y2001 + '<br/>' +
            '2006 : ' +  data.y2006 + '<br/>' +
            '2011 : ' +  data.y2011 + '<br/>' +
            ' </div>'
        } else {
          return '<div class="hoverinfo">' + geo.properties.name + '</div>'
        }
      },
      highlightBorderWidth: 1
    }

  });

  window.addEventListener('resize', function() {
      migrationMap.resize();
  });

  pullDataAccordingToOptions();

  window.setInterval(function() {
    //migrationMap.arc (path2001);
    var min = $("#year_slider_ion").data().ionRangeSlider.options.min;
    var max = $("#year_slider_ion").data().ionRangeSlider.options.max;
    var fromToSet = $("#year_slider_ion").data().ionRangeSlider.options.from;
    if(fromToSet >= max) {
      fromToSet = min;
    } else {
      fromToSet++;
    }
    $("#year_slider_ion").data().ionRangeSlider.update({
      from: fromToSet
    });
  }, 2000);

});
