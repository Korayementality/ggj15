using UnityEngine;
using System.Collections;

public class texturechanger : MonoBehaviour {
	public GameObject x;
	public Texture y;

	void OnTriggerEnter(Collider other)
	{
		if (other.gameObject.tag=="Player")
			x.renderer.material.mainTexture= y;
	}

}
