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
	async updateTC()
	{
	await DeleteLabelswithTC.run()
	await UpdateTCs.run()
		
	const a = data_table.selectedRow.test_case_id
	const labels = (TCTagsCopy.selectedOptionLabels)
	 for (let i = 0 ; i < labels.length ; i++){
		 
		{
await	InsertLabelswithTC.run({caseID: a , labelname: labels[i].toString()}) 
		 } 	
	}
			JSObject1.fetchAllCases()
	}
	
}