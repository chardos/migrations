
var W = {}

W.vars = {
    year: 1996,
    state: 0
};


W.init = function() {
}


function setupStateButtonActivation() {
  $('#states_selection > li > a.btn').click(function(){
    var selectedButton = $(this);
    if(selectedButton.hasClass("active"))
      return true;

    selectedButton.toggleClass( "active" );
    // perform action
    switch(selectedButton.html()) {
      case "VIC": W.vars.state = 0; break;
      case "NSW": W.vars.state = 1; break;
      case "QLD": W.vars.state = 2; break;
      case "SA": W.vars.state = 3; break;
      case "WA": W.vars.state = 4; break;
      case "ACT": W.vars.state = 5; break;
      case "NT": W.vars.state = 6; break;
      case "TAS": W.vars.state = 7; break;
    }

    triggerActive(selectedButton);
    pullDataAccordingToOptions();
  });
}

function pullDataAccordingToOptions() {
  var chosenYear = W.vars.year;
  var chosenState = W.vars.state;
  alert('trigger something');
}

function triggerActive(selectedButton) {
  $('#states_selection').children().each(function ( index, value ) { 
    var listitem = $(value);
    var thechild = $('a.btn', listitem); // get the button link
    if(thechild.html() != selectedButton.html())
    {
      thechild.removeClass( "active" );
    }
  });
}

$(document).ready(function() {
  $("#year_slider_ion").ionRangeSlider({
    onChange: function (data) {
      W.vars.year = data.from;
      pullDataAccordingToOptions();
    }
  });

  setupStateButtonActivation();
  $('a.btn', $($('#states_selection')[0].children[0])).click();
  var migrationMap = new Datamap({
    scope: 'world',
    responsive: true,
    element: document.getElementById('map'),
    projection: 'mercator',
    
    fills: {
      defaultFill: "#262626"
    },
    
    data: {
      
    },

    arcConfig: {
      strokeColor: '#ff0000',
      strokeWidth: 1,
      arcSharpness: 1,
      animationSpeed: 600
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

  // migrationMap.arc( pathVIC );
  migrationMap.arc (pathWA);


  window.addEventListener('resize', function() {
      migrationMap.resize();
  });

  window.setInterval(function() {
    migrationMap.arc( pathVIC );
  }, 2000);




    
});
