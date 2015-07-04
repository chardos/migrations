
var W = {}

W.vars = {
	
};

W.initializeDOMVars = function(){

}

W.init = function() {


}
	


$(document).ready(function() {

       var election = new Datamap({
        scope: 'world',
        element: document.getElementById('map'),
        projection: 'mercator'
      });


    var presidentialTrips = [
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

  election.arc( presidentialTrips, {strokeWidth: 2});




	
});
