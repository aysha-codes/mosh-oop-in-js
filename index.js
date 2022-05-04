// Stopwatch Object Exercise
// Stopwatch()
// duration, reset, start, stop
// Duration is at 0
// start begins count; calling again throws an error (Stopwatch has already started)
// stop pauses count; calling it again throws an error (Stopwatch is not started)
// reset puts the duration back to 0
// duration is in seconds up to 3rd decimal place

function Stopwatch(){
    this.duration = 0
    let started = 0
    this.start = function(){
        // Begin count in seconds
            if (started === 1)
                    throw new Error('Stopwatch has already started');
                
                started = 1
        startTime = new Date();

    };
    this.stop = function(){
        // Stop count
            if (started === 0)
                    throw new Error('Stopwatch is not started');
                
                started = 0
        
        endTime = new Date();
        var timeDiff = endTime - startTime; //in ms
        // strip the ms
        timeDiff /= 1000;
      
        // get seconds 
        var seconds = Number(timeDiff.toFixed(3));
        this.duration += seconds;
    };
    this.reset = function(){
        this.duration = 0;
    };
}
