using UnityEngine;
using System.Collections;

public class texturechanger : MonoBehaviour {
	public GameObject textureChangeObj;
	public Texture textTexture, blankTexture;
	private bool isBlank = true;

	void OnTriggerEnter(Collider other)
	{
		if (other.gameObject.tag == "Player") {
			if(isBlank){
				textureChangeObj.renderer.material.mainTexture= textTexture;
			}else{
				textureChangeObj.renderer.material.mainTexture= blankTexture;
			}
			isBlank = !isBlank;

		}
			
	}

}
