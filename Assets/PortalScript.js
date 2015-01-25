#pragma strict

var destination : GameObject;
var offset : int = 1;
var alive : boolean = false;
var hammer : GameObject;
var destruction : GameObject;

function Start () {
	var Box : BoxCollider = gameObject.AddComponent("BoxCollider");
	Box.size.x = 2*Box.size.x/3;
	Box.isTrigger = true;
}

function Update () {

}

function OnTriggerEnter(col : Collider){
	
	if(col.gameObject.tag == "Player" && alive){
		var pos : Vector3 = destination.transform.position;
		collider.gameObject.transform.rotation = destination.transform.rotation;
		
		col.gameObject.transform.position = new Vector3(pos.x, pos.y, pos.z+offset);
		if(!hammer.activeInHierarchy){
			hammer.SetActive(true);
			destruction.SetActive(true);
		}
	}

}