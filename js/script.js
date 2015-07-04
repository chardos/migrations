
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
    responsive: true,
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
      },
      GBR: {
        fillKey: 'MEDIUM',
        numberOfThings: 10381
      }
    },


    geographyConfig: {
      popupTemplate: function(geo, data) {
          if(data){
            return ['<div>' + data.numberOfThings + '</div>'].join('');
          }
      }
    }

  });


  var migrationArcs = [
      {
          origin: {
              latitude: ctry.gb[0],
              longitude: ctry.gb[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      },
      {
          origin: {
              latitude: ctry.nz[0],
              longitude: ctry.nz[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      },
      {
          origin: {
              latitude: ctry.cn[0],
              longitude: ctry.cn[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      },
      {
          origin: {
              latitude: ctry.it[0],
              longitude: ctry.it[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      },
      {
          origin: {
              latitude: ctry.vn[0],
              longitude: ctry.vn[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      },
      {
          origin: {
              latitude: ctry.in[0],
              longitude: ctry.in[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      },
      {
          origin: {
              //phillipines
              latitude: ctry.ph[0],
              longitude: ctry.ph[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      },
      {
          origin: {
              //greece
              latitude: ctry.gr[0],
              longitude: ctry.gr[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      },
      {
          origin: {
              latitude: ctry.de[0],
              longitude: ctry.de[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      },
      {
          origin: {
              latitude: ctry.za[0],
              longitude: ctry.za[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      },
      {
          origin: {
              latitude: ctry.my[0],
              longitude: ctry.my[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      },
      {
          origin: {
              latitude: ctry.in[0],
              longitude: ctry.in[1]
          },
          destination: {
              latitude: ctry.au[0],
              longitude: ctry.au[1]
          }
      }
  ];

  migrationMap.arc( migrationArcs, {strokeWidth: arcWidth});


  window.addEventListener('resize', function() {
      migrationMap.resize();
  });




	
});
