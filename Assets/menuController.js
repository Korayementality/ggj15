#pragma strict

var scene : String = "Mostafa";
var anim : Animator;
var startTime : float;

function Start () {
	anim.SetBool("intro", true);
	startTime = Time.realtimeSinceStartup;
}

function Update () {
	if((startTime+.5) < Time.realtimeSinceStartup)
		anim.SetBool("intro", false);
		
	if(Input.GetKeyDown(KeyCode.Escape)){
		anim.SetBool("options", false);
		anim.SetBool("credits", false);
	}
}

function game() {
	Debug.Log("hahahh");
	//Start a new game
	Application.LoadLevel(scene);
}

function options(){
	anim.SetBool("options", true);

}

function credits(){
	anim.SetBool("credits", true);

}