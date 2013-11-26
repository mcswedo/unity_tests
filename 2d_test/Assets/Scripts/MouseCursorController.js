#pragma strict

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
	
	mousePos.x = Mathf.Clamp(mousePos.x, beatXMin, beatXMax);
    mousePos.y = Mathf.Clamp(mousePos.y, 0 + cursorSizeY / 2, Screen.height);
    
    worldMousePos = camera.ScreenToWorldPoint(mousePos);
    if(showModifiedCursor == true) {
        GUI.DrawTexture( Rect( mousePos.x - (currentTexture.width),
                           mousePos.y - (currentTexture.height),
                           currentTexture.width,
                           currentTexture.height), currentTexture);
    }
}