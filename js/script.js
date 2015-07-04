
var W = {}

W.vars = {
	
};


W.init = function() {
}


//CONFIG
var arcWidth = 3;
var arcColor = null;


$(document).ready(function() {

  var migrationMap = new Datamap({
    scope: 'world',
    element: document.getElementById('map'),
    projection: 'mercator',


    data: {
      AUS: {
        fillKey: 'LOW',
        numberOfThings: 2002
      },
      USA: {
        fillKey: 'MEDIUM',
        numberOfThings: 10381
      }
    },


    geographyConfig: {
      popupTemplate: function(geo, data) {
          return ['<div>' + data.numberOfThings + '</div>'].join('');
      }
    }

  });


  var migrationArcs = [
      {
          origin: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          },
          destination: {
              latitude: 32.066667,
              longitude: 34.783333 
          }
      },
      {
          origin: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          },
          destination: {
              latitude: 19.433333,
              longitude: -99.133333
          }
      },
      {
          origin: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          },
          destination: {
              latitude: 9.933333,
              longitude: -84.083333
          }
      },
      {
          origin: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          },
          destination: {
              latitude: 54.597 ,
              longitude: -5.93
          }
      },
      {
          origin: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          },
          destination: {
              latitude: 52.516667,
              longitude: 13.383333 
          }
      },
      {
          origin: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          },
          destination: {
              latitude: 14.692778,
              longitude: -17.446667
          }
      },
      {
          origin: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          },
          destination: {
              latitude: -26.204444,
              longitude: 28.045556
          }
      },
              {
          origin: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          },
          destination: {
              latitude: -6.8,
              longitude: 39.283333 
          }
      },
              {
          origin: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          },
          destination: {
              latitude: 59.329444,
              longitude: 18.068611
          }
      },
              {
          origin: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          },
          destination: {
              latitude: 59.95 ,
              longitude: 30.3
          }
      }
  ];

  migrationMap.arc( migrationArcs, {strokeWidth: arcWidth});




	
});
