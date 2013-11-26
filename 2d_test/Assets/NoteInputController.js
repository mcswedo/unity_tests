#pragma strict
public var texture : Texture;
public var hoverTexture : Texture;

private var beat : GameObject;
<<<<<<< HEAD
private var mousePos : Vector3;

function Start() {
	beat = GameObject.FindGameObjectWithTag("beat");

=======
var mousePos : Vector3;

function Start() {
	beat = GameObject.FindGameObjectWithTag("beat");
>>>>>>> 8c87ac1ac12a74cc79df24dd4868f30187dfddb9
}

//Keyboard input

function Update () {
		
<<<<<<< HEAD
		//Blue Note Control
		if (Input.GetKeyDown(KeyCode.Q))
		{
			if(this.tag == "blue" && (this.collider.bounds.min.x <= beat.collider.bounds.max.x))
			{
				Highlight();
			}
		}	
		if (Input.GetKeyUp(KeyCode.Q))
		{
			if (this.tag == "blue")
			{
				RemoveHighlight();
			}
		}
		if (this.tag == "blue" && (this.collider.bounds.max.x < beat.collider.bounds.min.x))
		{
			RemoveHighlight();
		}
		
		// Red Note Control
		if (Input.GetKeyDown(KeyCode.W))
		{
			if(this.tag == "red" && (this.collider.bounds.min.x <= beat.collider.bounds.max.x))
			{
				Highlight();
			}
		}	
		if (Input.GetKeyUp(KeyCode.W))
		{
			if (this.tag == "red")
			{
				RemoveHighlight();
			}
		}
		if (this.tag == "red" && (this.collider.bounds.max.x < beat.collider.bounds.min.x))
		{
			RemoveHighlight();
		}
		
		// Green Note Control
		if (Input.GetKeyDown(KeyCode.E))
		{
			if(this.tag == "green" && (this.collider.bounds.min.x <= beat.collider.bounds.max.x))
			{
				Highlight();
			}
		}	
		if (Input.GetKeyUp(KeyCode.E))
		{
			if (this.tag == "green")
			{
				RemoveHighlight();
			}
		}
		if (this.tag == "green" && (this.collider.bounds.max.x < beat.collider.bounds.min.x))
		{
			RemoveHighlight();
		}
		
		// Yellow Note Control
		if (Input.GetKeyDown(KeyCode.R))
		{
			if(this.tag == "yellow" && (this.collider.bounds.min.x <= beat.collider.bounds.max.x))
			{
				Highlight();
			}
		}	
		if (Input.GetKeyUp(KeyCode.R))
		{
			if (this.tag == "yellow")
			{
				RemoveHighlight();
			}
		}
		if (this.tag == "yellow" && (this.collider.bounds.max.x < beat.collider.bounds.min.x))
		{
			RemoveHighlight();
		}
		mousePos = MouseCursorController.worldMousePos; // We pull the WORLD coordinates of the mouse cursor out of the mouse controller.
		mousePos.y = -mousePos.y; // the y position comes in inverted - positive on the bottom, negative on the top, so flip it.
		
		/*if(this.collider.bounds.Contains(mousePos))
=======
		//Q
		if (Input.GetKeyDown (KeyCode.Q))
			print ("Q key was pressed");
		if (Input.GetKeyUp (KeyCode.Q))
			print ("Q key was released");
		
		mousePos = MouseCursorController.worldMousePos; // We pull the WORLD coordinates of the mouse cursor out of the mouse controller.
		mousePos.y = -mousePos.y; // the y position comes in inverted - positive on the bottom, negative on the top, so flip it.
		
		if(this.collider.bounds.Contains(mousePos))
>>>>>>> 8c87ac1ac12a74cc79df24dd4868f30187dfddb9
		{
			Debug.Log(mousePos);
		
			renderer.material.SetTexture("_MainTex", hoverTexture);
		}
		else renderer.material.SetTexture("_MainTex", texture);
<<<<<<< HEAD
		*/
		
}

function Highlight() {
	this.renderer.material.SetTexture("_MainTex", hoverTexture);
}

function RemoveHighlight() {
	this.renderer.material.SetTexture("_MainTex", texture);
}
=======
}
>>>>>>> 8c87ac1ac12a74cc79df24dd4868f30187dfddb9
