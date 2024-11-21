export default {
	myVar1: [],
	myVar2: {},
async insertdata () {
		
	const allData = Table1.tableData
	
	for(let i=0 ; i<allData.length;i++)
		{
let  currentID =	await 	dataDumpInsert.run({name: allData[i].Name , description : allData[i].Description , link : allData[i].oracle_app_link , testspecname : allData[i].test_spec_name, autostatus : allData[i].automated_status})

		
	const a =  currentID[0].case_id ;
	
	
		InsertLabelswithTC.run({caseID: a , labelname: allData[i].Label}) 
		
	
	
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
		InsertLabelswithTC.run({caseID: a , labelname: labels[i].toString()}) 
		 } 
		JSObject1.fetchAllCases()
	
	
	}
	},
	async UpdatebulkData () {
		
	const allData = Table1.tableData
	
	for(let i=0 ; i<allData.length;i++)
		{
// let  currentID =	

		
	const a =  currentID[0].case_id ;
	
	
		InsertLabelswithTC.run({caseID: a , labelname: allData[i].label_name}) 
		
	
	
	}
		
	},
	
}