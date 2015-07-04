
var W = {}

W.vars = {
    
};


W.init = function() {
}


function setupStateButtonActivation() {
  $('#states_selection > li > a.btn').click(function(){
    var selectedButton = $(this);
    selectedButton.toggleClass( "active" );
    $('#states_selection').each(function () { 
      var listitem = $(this);
      var thechild = $('a.btn', listitem); // get the button link
      if(thechild == selectedButton)
        return true;

      selectedButton.toggleClass( "active" );
    });
  });
}

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
