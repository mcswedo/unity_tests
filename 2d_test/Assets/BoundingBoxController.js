#pragma strict

var target : Transform;
var smoothTime = .1; //in seconds

private var xOffset = .5; //in units - the box is 1x3, measured from the center
private var yOffset = 1.5; 

var velocity = Vector3.zero;

function Start () {
	transform.position.x = target.transform.position.x;
	transform.position.y = target.transform.position.y - yOffset;
	transform.position.z = -1;
}

function move() {
	transform.position = 
			Vector3.SmoothDamp(
				transform.position, 
				target.transform.position, 
				velocity, 
				smoothTime);
}

function Update () {
	// case: moving into a x position greater than the left side of the box
	if (target.transform.position.x > transform.position.x + xOffset) {
		move();
	}
	// case: moving into a x position less than the right side of the box
	if (target.transform.position.x < transform.position.x - xOffset) {
		move();	
	}
	// case: moving into a y position greater than the upper edge of the box
	if (target.transform.position.y > transform.position.y + yOffset) {
		move();
	}
	// case: moving into a y position less than the lower edge of the box
	if (target.transform.position.y < transform.position.y - yOffset) {
		move();
	}
	
	// to show the bounding box behind the player character during testing
	transform.position.z = -1;
}