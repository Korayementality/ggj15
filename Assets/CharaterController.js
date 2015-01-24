#pragma strict

var speed : int = 10;

function Start () {

}

function Update () {
	//rigidbody.velocity = new Vector3(0, 0, Input.GetAxis("Vertical")*speed);
	rigidbody.AddForce(Input.GetAxis("Vertical")*speed*gameObject.transform.up);
}