#pragma strict

var speed : int = 10;
private var isHammer : boolean = false;
var hammer : GameObject;
var hammerExists : boolean = false;

function Start () {

}

function Update () {

	if(Input.GetKeyDown(KeyCode.E) && isHammer){
		hammer.transform.SetParent(gameObject.transform);
		gameObject.GetComponent(BoxCollider).enabled = false;
		hammerExists = true;
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
	if(col.gameObject.tag == "hammer"){
		isHammer = true;
	}else{
		isHammer = false;
		Debug.Log("ha2");
	}

}