#pragma strict

var speed : int = 10;

function Start () {

}

function Update () {
}

function FixedUpdate () {
	Debug.Log(transform.forward);
	rigidbody.velocity = transform.forward*Input.GetAxis("Vertical")*speed;
	//rigidbody.velocity.x = Input.GetAxis("Horizontal")*speed;
}