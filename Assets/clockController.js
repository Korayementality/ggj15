#pragma strict

var portal : GameObject;
var illusion : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "Player"){
		portal.GetComponent(PortalScript).alive = true;
		portal.GetComponent(textureChange).alive = true;
		illusion.SetActive(true);
	}
}