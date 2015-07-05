
var W = {}

W.vars = {
  year: 0,
  state: 0,
  autoplay: false,
  timerInterval: null
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
  var buildVarName = "path";

  switch(chosenState) {
    case 0: buildVarName += "VIC"; break;
    case 1: buildVarName += "NSW"; break;
    case 2: buildVarName += "QLD"; break;
    case 3: buildVarName += "SA"; break;
    case 4: buildVarName += "WA"; break;
    case 5: buildVarName += "ACT"; break;
    case 6: buildVarName += "NT"; break;
    case 7: buildVarName += "TAS"; break;
  }
  if(buildVarName == "path")
    return;

  switch(chosenYear) {
    case 0: buildVarName += "1996"; break;
    case 1: buildVarName += "2001"; break;
    case 2: buildVarName += "2006"; break;
    case 3: buildVarName += "2011"; break;
  }

  migrationMap.arc( window[buildVarName] );
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

function stopAutoplay() {
  window.clearInterval(W.vars.timerInterval);
  W.vars.timerInterval = null;
  W.vars.autoplay = false;
}

function setupAutoplay() {
  W.vars.autoplay = true;
  incrementDataPullByYearly();
  W.vars.timerInterval = window.setInterval(function() {
    incrementDataPullByYearly();
  }, 2000);
}

function incrementDataPullByYearly() {
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
}

var migrationMap;

$(document).ready(function() {
  migrationMap = new Datamap({
    scope: 'world',
    responsive: true,
    element: document.getElementById('map'),
    projection: 'mercator',
    
    fills: {
      defaultFill: "#262626"
    },
    
    // state: [1996, 2001, 2006, 2011]
    data: {
      AUS: {
        vic: [2002,123,14213,512],
        nsw: [53326434,574753,325235,43634634],
        qld: [214124,12412412,4124124,1241412],
        sa: [12312,124123,124421,21412],
        wa: [1231231,1424123,2141231,231213],
        act: [3252352,643634,32525,32523523],
        nt: [4123123,12412312,41241241,241241],
        tas: [325235,23523523,2412312,2352345]
      },
      USA: {
        vic: [2002,123,14213,512],
        nsw: [53326434,574753,325235,43634634],
        qld: [214124,12412412,4124124,1241412],
        sa: [12312,124123,124421,21412],
        wa: [1231231,1424123,2141231,231213],
        act: [3252352,643634,32525,32523523],
        nt: [4123123,12412312,41241241,241241],
        tas: [325235,23523523,2412312,2352345]
      },
      GBR: {
        vic: [2002,123,14213,512],
        nsw: [53326434,574753,325235,43634634],
        qld: [214124,12412412,4124124,1241412],
        sa: [12312,124123,124421,21412],
        wa: [1231231,1424123,2141231,231213],
        act: [3252352,643634,32525,32523523],
        nt: [4123123,12412312,41241241,241241],
        tas: [325235,23523523,2412312,2352345]
      }
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
          var currentState;

          switch(W.vars.state) {
            case 0: currentState = 'vic'; break;
            case 1: currentState = 'nsw'; break;
            case 2: currentState = 'qld'; break;
            case 3: currentState = 'sa'; break;
            case 4: currentState = 'wa'; break;
            case 5: currentState = 'act'; break;
            case 6: currentState = 'nt'; break;
            case 1: currentState = 'tas'; break;
          }


          return '<div class="hoverinfo">' + 'Country of birth: '+geo.properties.name + '<br/><br/>' +
            'Number of people born in this country' + '<br/>' +
            '1996 : ' +  data[currentState][0] + '<br/>' +
            '2001 : ' +  data[currentState][1] + '<br/>' +
            '2006 : ' +  data[currentState][2] + '<br/>' +
            '2011 : ' +  data[currentState][3] + '<br/>' +
            ' </div>';
        } else {
          return '<div class="hoverinfo">' + geo.properties.name + '</div>'
        }
      },
      highlightBorderWidth: 1
    }

  });

  setupStateButtonActivation();
  $('a.btn', $($('#states_selection')[0].children[0])).click();

  window.addEventListener('resize', function() {
      migrationMap.resize();
  });

  $('#autoplaybtn').on("click", function(){
    $(this).toggleClass('button-active');
    if($(this).hasClass('button-active')) {
      // play
      setupAutoplay();
    } else {
      // stop
      stopAutoplay();
    }
  });
});
