#pragma strict

public var cursorTexture : Texture2D; 
 
var cursorSizeX: int = 41;  // set to width of your cursor texture
var cursorSizeY: int = 64;  // set to height of your cursor texture

static var showModifiedCursor : boolean = true;
 
var beatTransform : Transform;

function Start() {
	beatTransform = GameObject.FindGameObjectWithTag("beat").GetComponent(Transform);
	Screen.showCursor = false;
}

function Update() {
	
}

function OnGUI() {
	
	var mousePos = Event.current.mousePosition;
	mousePos.x = Mathf.Clamp(mousePos.x, beatTransform.position.x + 200, beatTransform.position.x + 200);
    mousePos.y = Mathf.Clamp(mousePos.y, 0 + cursorSizeY / 2, Screen.height);
    
    if(showModifiedCursor == true) {
        GUI.DrawTexture( Rect( mousePos.x - (cursorTexture.width),
                           mousePos.y - (cursorTexture.height),
                           cursorTexture.width,
                           cursorTexture.height), cursorTexture);
    }
}