#pragma strict

var textureChangeObj : GameObject ;
var textTexture : Texture;
var blankTexture : Texture;
private var isBlank : boolean = true;
var alive : boolean = false;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){
	if (other.gameObject.tag == "Player" && alive) {
		if(isBlank){
			textureChangeObj.renderer.material.mainTexture= textTexture;
		}else{
			textureChangeObj.renderer.material.mainTexture= blankTexture;
		}
		isBlank = !isBlank;

	}
		
}