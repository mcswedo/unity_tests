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
	beat = GameObject.FindGameObjectWithTag("beat");
	Screen.showCursor = false;
	beatXMin = camera.WorldToScreenPoint(beat.renderer.bounds.min).x;
	beatXMax = camera.WorldToScreenPoint(beat.renderer.bounds.max).x;
}

function Update() {
	frameCount++;
	
	if(frameCount >= 8)
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
	
	//Debug.Log(mousePos);
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