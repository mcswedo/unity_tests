#pragma strict

public var cursorTexture : Texture2D;

public static var worldMousePos : Vector2;

private var cursorSizeX = 41;
private var cursorSizeY = 64;
private var showModifiedCursor = true;
private var beat : GameObject;
private var mousePos : Vector2;
private var beatXMin : float;
private var beatXMax : float;

function Start()
{
	beat = GameObject.FindGameObjectWithTag("beat");
	Screen.showCursor = false
	beatXMin = camera.WorldToScreenPoint(beat.collider.bounds.min).x;
	beatXMax = camera.WorldToScreenPoint(beat.collider.bounds.max).x;
}

function Update() {
	
}

function OnGUI() {
	
	mousePos = Event.current.mousePosition;
	
	//Debug.Log(mousePos);
	mousePos.x = Mathf.Clamp(mousePos.x, beatXMin, beatXMax);
    mousePos.y = Mathf.Clamp(mousePos.y, 0 + cursorSizeY / 2, Screen.height);
    //Debug.Log(mousePos);
    
    worldMousePos = camera.ScreenToWorldPoint(mousePos);
    if(showModifiedCursor == true) {
        GUI.DrawTexture( Rect( mousePos.x - (cursorTexture.width),
                           mousePos.y - (cursorTexture.height),
                           cursorTexture.width,
                           cursorTexture.height), cursorTexture);
    }
}