#pragma strict

@script RequireComponent(AudioSource)

public var beatsPerMinute = 120.0;

private var startTime:double;
private var secondsPerBeat = 60.0 / beatsPerMinute;
private var i = 0;

private var notes = [
	0,0,0,0,
	1,1,1,1,
	0,0,1,1,
	0,1,0,1];

private var redCubeRenderer:Renderer;
private var blueCubeRenderer:Renderer;

function Start () {
	redCubeRenderer = GameObject.FindGameObjectWithTag("redCube").renderer;
	blueCubeRenderer = GameObject.FindGameObjectWithTag("blueCube").renderer;
	
	redCubeRenderer.enabled = false;
	
	audio.Play();
	startTime = AudioSettings.dspTime;
	Debug.Log("Start Time: " + startTime);
	
}

function Update () {
	var currentTime = AudioSettings.dspTime;
	var elapsedTime = currentTime - startTime;
	
	if (elapsedTime >= secondsPerBeat) {
		i = (i+1) % notes.Length;
		startTime = startTime + secondsPerBeat;
		
		if(notes[i] == 0) {
			redCubeRenderer.enabled = false;
			blueCubeRenderer.enabled = true;
		}
		
		else if(notes[i] == 1) {
			blueCubeRenderer.enabled = false;
			redCubeRenderer.enabled = true;
		}
		
		Debug.Log("Current Time: " + startTime);
	}
}