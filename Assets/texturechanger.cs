using UnityEngine;
using System.Collections;

public class texturechanger : MonoBehaviour {
	public GameObject textureChangeObj;
	public Texture textTexture, blankTexture;
	private bool isBlank = true;
	public bool alive = false;

	void OnTriggerEnter(Collider other)
	{
		if (other.gameObject.tag == "Player" && alive) {
			if(isBlank){
				textureChangeObj.renderer.material.mainTexture= textTexture;
			}else{
				textureChangeObj.renderer.material.mainTexture= blankTexture;
			}
			isBlank = !isBlank;

		}
			
	}

}
