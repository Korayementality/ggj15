#pragma strict

var sequenceStarted : boolean;
var hasRotated : boolean;
var textureCube : GameObject;
var destroyedQuad : GameObject;
var tree : GameObject;

function Start () {

	sequenceStarted = false;
	hasRotated = false;
}

function Update () {

	if(GameObject.Find("/Character").transform.eulerAngles.y >= 180 && sequenceStarted && !hasRotated)
	{
		MoveTree();
		hasRotated = true;
		Destroy(tree, 2);
	}

}

function OnTriggerEnter (col : Collider) {

	if(col.gameObject.tag == "Player" && !sequenceStarted){
		textureCube.SetActive(true);
		Destroy(destroyedQuad, 2);
		sequenceStarted = true;
	}
}	


function MoveTree() {

	tree.transform.position = Vector3(tree.transform.position.x, tree.transform.position.y, tree.transform.position.z - 6);

}