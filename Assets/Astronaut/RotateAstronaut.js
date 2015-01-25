#pragma strict

var tumble : float;
var object : Transform;
var speed : int;

function Start () : void {
    rigidbody.angularVelocity = Random.insideUnitSphere * tumble;

}


function Update() {
   transform.RotateAround (Vector3.zero, Vector3.up, speed * Time.deltaTime);
}

