export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		
	return	FetchLabels.data.map( (obj) =>{ return  {'label': obj.name, 'value': obj.description } })
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}