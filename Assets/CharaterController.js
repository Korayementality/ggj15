#pragma strict

var speed : int = 10;

function Start () {

}

function Update () {
}

function FixedUpdate () {
	if(Input.GetAxis("Horizontal")){
		rigidbody.velocity = transform.right*Input.GetAxis("Horizontal")*speed;
	}
	
	if(Input.GetAxis("Vertical")){
		rigidbody.velocity = transform.forward*Input.GetAxis("Vertical")*speed;	
	}
	/*
	if(Input.GetAxis("Vertical") > 0){
	
	
	}else if(Input.GetAxis("Vertical") < 0){
	
	
	}
	
	if(Input.GetAxis("Horizontal") > 0){
	
	
	}else if(Input.GetAxis("Horizontal") < 0){
	
	
	}*/
	
}