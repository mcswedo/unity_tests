#pragma strict

@script RequireComponent(AudioSource)

public var beatsPerMinute:float;
public var startTime:double;
public var elapsedTime:double;

private var secondsPerBeat = 60.0 / beatsPerMinute;
private var noteChart;
//private var i = 0;
//var notes = [];


function Start () {
	noteChart = GameObject.FindGameObjectWithTag("noteChart");
	
	audio.Play();
	startTime = AudioSettings.dspTime;
	Debug.Log("Start Time: " + startTime);
	
}

function Update () {
	var currentTime = AudioSettings.dspTime;
	elapsedTime = currentTime - startTime;
	
	if (elapsedTime >= secondsPerBeat) {
		
		startTime = startTime + secondsPerBeat;
		
		Debug.Log("Current Time: " + startTime);
	}
}