if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Crease component for A-Frame.
 */
AFRAME.registerComponent('crease', {
  schema: { type: 'boolean', default: true },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function () {

	var mesh = this.el.getObject3D('mesh');
	mesh.material.shading = THREE.SmoothShading;
  if (this.data) { mesh.material.shading = THREE.FlatShading; }
	mesh.material.needsUpdate = true;
	
	},

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { 
	
	var mesh = this.el.getObject3D('mesh');
	mesh.material.shading = THREE.SmoothShading;
  mesh.material.needsUpdate = true;
	
	}

});
