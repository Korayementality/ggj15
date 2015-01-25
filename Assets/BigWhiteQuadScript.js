#pragma strict

var character : GameObject;
var EndingTexture : GameObject;

function Start () {

	character = GameObject.Find("/Character");

}

function Update () {

}

function OnTriggerEnter(col : Collider) {

	if(col.gameObject.tag == "Player")
	{
		col.gameObject.GetComponent(CharaterController).enabled = false;
		col.gameObject.GetComponent(MouseOrbit).enabled = false;
		InvokeRepeating("MoveInZ", 0, 0.5);
		InvokeRepeating("RotateInY", 2, 0.5);
		col.gameObject.rigidbody.drag = 0;
		col.gameObject.rigidbody.angularDrag = 0;
		col.gameObject.rigidbody.constraints = RigidbodyConstraints.None;
		col.gameObject.rigidbody.useGravity = false;
		Invoke("Blackout", 10);
	}

}

function MoveInZ() {

	character.rigidbody.velocity.z += 1;

}

function RotateInY() {

	character.rigidbody.angularVelocity.y *= -5*character.rigidbody.angularVelocity.y+5;

}

function Blackout() {

	RenderSettings.ambientlight = Color.black;

}

function ShowEndingTexture() {

	EndingTexture.SetActive(true);

}