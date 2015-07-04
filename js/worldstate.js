
var W = {}

W.vars = {
    
};


W.init = function() {
}


//CONFIG
var arcWidth = [3,2,5,7];
var arcColor = null;

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


  var pathVIC = [
    {
      origin: { latitude: ctry.afg[0], longitude: ctry.afg[1] },
      destination: { latitude: state.vic[0], longitude: state.vic[1] },
      options: { strokeWidth: 2, strokeColor: "rgba(255,0,0,1)"}
    },
    {
      origin: { latitude: ctry.and[0], longitude: ctry.and[1] },
      destination: { latitude: state.vic[0], longitude: state.vic[1] },
      options: { strokeWidth: 2, strokeColor: "rgba(255,0,0,1)"}
    },
    {
      origin: { latitude: ctry.are[0], longitude: ctry.are[1] },
      destination: { latitude: state.vic[0], longitude: state.vic[1] },
      options: { strokeWidth: 2, strokeColor: "rgba(255,0,0,1)"}
    },
    {
      origin: { latitude: ctry.atg[0], longitude: ctry.atg[1] },
      destination: { latitude: state.vic[0], longitude: state.vic[1] },
      options: { strokeWidth: 2, strokeColor: "rgba(255,0,0,1)"}
    },
    {
      origin: { latitude: ctry.arm[0], longitude: ctry.arm[1] },
      destination: { latitude: state.vic[0], longitude: state.vic[1] },
      options: { strokeWidth: 2, strokeColor: "rgba(255,0,0,1)"}
    },
  ];

  var pathWA = [
    {
      origin: { latitude: ctry.afg[0], longitude: ctry.afg[1] },
      destination: { latitude: state.wa[0], longitude: state.wa[1] },
      options: { strokeWidth: 2, strokeColor: "rgba(255,0,0,1)"}
    },
    {
      origin: { latitude: ctry.and[0], longitude: ctry.and[1] },
      destination: { latitude: state.wa[0], longitude: state.wa[1] },
      options: { strokeWidth: 3, strokeColor: "rgba(255,0,0,1)"}
    },
    {
      origin: { latitude: ctry.are[0], longitude: ctry.are[1] },
      destination: { latitude: state.wa[0], longitude: state.wa[1] },
      options: { strokeWidth: 4, strokeColor: "rgba(255,0,0,1)"}
    },
    {
      origin: { latitude: ctry.atg[0], longitude: ctry.atg[1] },
      destination: { latitude: state.wa[0], longitude: state.wa[1] },
      options: { strokeWidth: 5, strokeColor: "rgba(255,0,0,1)"}
    },
    {
      origin: { latitude: ctry.arm[0], longitude: ctry.arm[1] },
      destination: { latitude: state.wa[0], longitude: state.wa[1] },
      options: { strokeWidth: 2, strokeColor: "rgba(255,0,0,1)"}
    },
  ];

  // migrationMap.arc( pathVIC );
  migrationMap.arc (pathWA);


  window.addEventListener('resize', function() {
      migrationMap.resize();
  });

  window.setInterval(function() {
    migrationMap.arc( migrationArcs, {strokeWidth: arcWidth});
  }, 1000);




    
});
