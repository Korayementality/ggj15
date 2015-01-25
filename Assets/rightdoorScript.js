#pragma strict

var anim : Animator;

function Start () {

}

function Update () {

}

function OnCollisionEnter(col : Collision){
	Debug.Log("col"+col.gameObject.tag);
	var hhh = GameObject.Find("/Character").GetComponent(CharaterController).hammerExists;
	if(col.gameObject.tag == "Player" && hhh ){
		Debug.Log("ham");
		anim.SetBool("fall", true);
	}
	
}