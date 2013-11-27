#pragma strict

var cameraPosition : Transform;
var targetCameraPosition : Transform;

function OnTriggerEnter() {
	cameraPosition.transform.position = targetCameraPosition.transform.position;
}