export default {
	myVar1: [],
	myVar2: {},
async insertTC () {
		
	let  currentID = 	await InsertTCs.run()
	const a =  currentID[0].case_id ;
	
	const labels = (TCMultiTags.selectedOptionLabels)
	 for (let i = 0 ; i < labels.length ; i++){
		 
		{
		InsertLabelswithTC.run({caseID: a , labelname: labels[i].toString()}) 
		 } 
	
	
	}
	},
	 myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		const labels = (TCMultiTags.selectedOptionLabels)
		
		for (let i = 0 ; i < labels.length ; i++)
			{
			const a = labels[i].toString()
			 return a
			}
		
	},
	
	async FetchAllCases()
	{ 
	await JSObject1.queryTransform()
	const allCases = await FetchTC.run({limit: data_table.pageSize, offset : data_table.pageOffset})
	return allCases
		
	},
	
	onTableSelected ()
	
	{
		
	}
	
}