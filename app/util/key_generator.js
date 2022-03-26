const randmonSting = () => {
	return ((new Date().getTime()).toString(36))+'_'+(Date.now() + Math.random().toString()).split('.').join("_")
}

module.exports = {
	randmonSting
}