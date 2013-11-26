#pragma strict

@script RequireComponent(AudioSource)

public var beatsPerMinute:float = 96;

public var secondsPerBeat:float = 60.0 / beatsPerMinute;
//public var timeSigNum = 6;
//public var timeSigDenom = 8;
//public var transformAmt:float = secondsPerBeat * 2 * (timeSigNum / timeSigDenom) / 10;

private var startTime : double;
private var noteChartTransform : Transform;

function Start () {
	audio.Play();
	startTime = AudioSettings.dspTime;
	Debug.Log("Start Time: " + startTime);	
	noteChartTransform = GameObject.FindGameObjectWithTag("noteChart").GetComponent(Transform);
}

function Update () {
	var currentTime = AudioSettings.dspTime;
	var elapsedTime = currentTime - startTime;
	
	if (elapsedTime >= secondsPerBeat) {
		startTime = startTime + secondsPerBeat;
		//Debug.Log("Current Time: " + startTime);
	}
	
	//  this transform makes zero sense but let me try to explain.
	//  transformAmt = secondsPerBeat * 2 * (timeSigNum / timeSigDenom) / 10 = 0.09375.
	//  Starting with secondsPerBeat, which is .625, the amount of time between beats.
	//  Multiply by 2 because we are working with 8th notes.
	//  Multiply by time signature - 6 beats per 8 notes.
	//  Divide by 10 because our orthographic projection is 10, and we need to keep things small.
	//  Ugh. I don't know why it doesn't work as formula above, but it will not take it. So gogo magic number.
	//  THIS IS DIFFERENT ON EVERY MACHINE MAKE A BETTER SOLUTION PLS
	noteChartTransform.position.x -= .10; 
}