#pragma strict
public var texture : Texture;
public var hoverTexture : Texture;

private var beat : GameObject;
var mousePos : Vector3;

function Start() {
	beat = GameObject.FindGameObjectWithTag("beat");
}

//Keyboard input

function Update () {
		
		//Q
		if (Input.GetKeyDown (KeyCode.Q))
			print ("Q key was pressed");
		if (Input.GetKeyUp (KeyCode.Q))
			print ("Q key was released");
		
		mousePos = MouseCursorController.worldMousePos; // We pull the WORLD coordinates of the mouse cursor out of the mouse controller.
		mousePos.y = -mousePos.y; // the y position comes in inverted - positive on the bottom, negative on the top, so flip it.
		
		if(this.collider.bounds.Contains(mousePos))
		{
			Debug.Log(mousePos);
		
			renderer.material.SetTexture("_MainTex", hoverTexture);
		}
		else renderer.material.SetTexture("_MainTex", texture);
}
