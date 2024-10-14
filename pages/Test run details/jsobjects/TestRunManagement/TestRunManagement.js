export default {
	myVar1: [],
	myVar2: {},
	
	/*async insertTR () {
		
	let  currentID = 	await Insert_TRs.run()
	const a =  currentID[0].run_id ;
	
	const selectedTC = (TestCase.selectedRows)
	 for (let i = 0 ; i < selectedTC.length ; i++){
		 
		 {
			InsertTCinTR.run({runID: a , caseID:selectedTC[i].case_id }) 
		 }
	 
	
	}
	},*/
	async updateTCsinTR () {
		 
	//	const updatedTC = (Table1.triggeredRow)
	//	return updatedTC
		
	//return updatedTC[0].allFields
		//for (let i=0 ; i < updatedTC.length ;i++)
			
		///	{
			UpdateTestRunCases.run({tcstatus:Table1.triggeredRow.tc_status , trid: Table1.triggeredRow.trc_id})
			
		
	},
	async getTRprogess (runid=appsmith.URL.queryParams.trid)
	{
	 //const passcount =  await Total_Passed_cases_in_a_run.run(runid)
	await FetchTCsforIndividualTR.run()
	 	const totalcount = FetchTCsforIndividualTR.data.length
		
	await Total_Passed_cases_in_a_run.run({runid})
		 const passedcount= Total_Passed_cases_in_a_run.data[0].passedcount
		 
		 
		 const progress = (passedcount/totalcount )*100
		 
		 if (progress > 0 )
			 return Math.floor(progress)
		
		else return 0
		 
	  
	},
	async getTRprogess1 (runid = '26')
	{
	 //const passcount =  await Total_Passed_cases_in_a_run.run(runid)
	//await FetchTCsforIndividualTR.run()
	/// 	const totalcount = FetchTCsforIndividualTR.data.length
		
	return await Total_Passed_cases_in_a_run.run({runid})
		 //const passedcount= Total_Passed_cases_in_a_run.data[0].passedcount
		// return passedcount
		 //return (passedcount/totalcount )*100
		 
	  
	}
}