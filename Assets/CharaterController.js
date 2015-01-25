#pragma strict

var speed : int = 10;
private var isHammer : boolean = false;
var hammer : GameObject;

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.E) && isHammer){
		hammer.transform.SetParent(gameObject.transform);
	}

}

function FixedUpdate () {
	if(Input.GetAxis("Horizontal")){
		rigidbody.velocity = transform.right*Input.GetAxis("Horizontal")*speed;
	}
	
	if(Input.GetAxis("Vertical")){
		rigidbody.velocity = transform.forward*Input.GetAxis("Vertical")*speed;	
	}	
	
}

function OnTriggerEnter(col : Collider){
Debug.Log("ha");
	if(col.gameObject.tag == "hammer"){
		isHammer = true;
			Debug.Log("ha1");
	}else{
		isHammer = false;
		Debug.Log("ha2");
	}

}