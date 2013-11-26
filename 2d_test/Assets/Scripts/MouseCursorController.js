#pragma strict

<<<<<<< HEAD
public var currentTexture : Texture2D;
public var cursorTextureFrames : Texture2D[];
public var showModifiedCursor = true;
public static var worldMousePos : Vector2;

private var cursorSizeX : int;
private var cursorSizeY : int;
private var beat : GameObject;
private var mousePos : Vector2;
private var beatXMin : float;
private var beatXMax : float;
private var frameCount : int;
private var arrayIndex : int;

function Start()
{
	cursorSizeX = currentTexture.width;
	cursorSizeY = currentTexture.height;
	
	arrayIndex = 0;
	
	beat = GameObject.FindGameObjectWithTag("beat");
	beatXMin = camera.WorldToScreenPoint(beat.collider.bounds.min).x;
	beatXMax = camera.WorldToScreenPoint(beat.collider.bounds.max).x;
	
	if(showModifiedCursor == true) Screen.showCursor = false;
=======
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
>>>>>>> 8c87ac1ac12a74cc79df24dd4868f30187dfddb9
}

function Update() {
	frameCount++;
	
	if(frameCount >= 10)
	{
		arrayIndex++;
		if(arrayIndex >= cursorTextureFrames.Length)
		{
			arrayIndex = 0;
		}
		currentTexture = cursorTextureFrames[arrayIndex];
		frameCount = 0;
	}
}

function OnGUI() {
	
	mousePos = Event.current.mousePosition;
	
<<<<<<< HEAD
=======
	//Debug.Log(mousePos);
>>>>>>> 8c87ac1ac12a74cc79df24dd4868f30187dfddb9
	mousePos.x = Mathf.Clamp(mousePos.x, beatXMin, beatXMax);
    mousePos.y = Mathf.Clamp(mousePos.y, 0 + cursorSizeY / 2, Screen.height);
    //Debug.Log(mousePos);
    
    worldMousePos = camera.ScreenToWorldPoint(mousePos);
    if(showModifiedCursor == true) {
        GUI.DrawTexture( Rect( mousePos.x - (currentTexture.width),
                           mousePos.y - (currentTexture.height),
                           currentTexture.width,
                           currentTexture.height), currentTexture);
    }
}