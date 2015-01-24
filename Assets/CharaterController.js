#pragma strict

var speed : int = 10;

function Start () {

}

function Update () {
	rigidbody.velocity = transform.forward*Input.GetAxis("Vertical")*speed;

}