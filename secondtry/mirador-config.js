const miradorConfig = {
	id: 'viewer',
	windows: [{
	  loadedManifest: 'your_iiif_manifest_url_here',
	}],
	window: {
	  textOverlay: {
		enabled: true,
		selectable: true,
		visible: true,
	  },
	},
  };
  
  export default miradorConfig;