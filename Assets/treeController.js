#pragma strict

var cube : GameObject;
var clock : GameObject;

function Start () {

}

function Update () {

}

function OnCollisionEnter(col : Collision){
	if(cube.activeInHierarchy){
		cube.SetActive(false);
		clock.SetActive(true);
	}
	
}