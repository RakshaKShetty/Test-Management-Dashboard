export default {
	myVar1: ["a","b"],
	myVar2: {},
	
	async insertTR () {
		
	let  currentID = 	await Insert_TRs.run()
	const a =  currentID[0].run_id ;
	
	const selectedTC = paginationLogic.UpdateDataInList.data
	 for (let i = 0 ; i < selectedTC.length ; i++){
		 
		 {
			InsertTCinTR.run({runID: a , caseID:selectedTC[i].test_case_id }) 
		 }
	 
	
	}
	},
	async updateTCsinTR () {
		
		const updatedTC = (Table1.updatedRows)
		
	//return updatedTC[0].allFields
		for (let i=0 ; i < updatedTC.length ;i++)
			
			{
				UpdateTestRunCases.run({tcstatus:updatedTC[i].allFields.tc_status , trid: updatedTC[i].allFields.trc_id})
			} 
		
	},
	async getTRprogess (runid)
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
	
		async updateTR () {
	//	await DeleteTCsforIndividualTR.run()
		await UpdateTRs.run()
			
	const a = data_tableCopy.selectedRow.run_id
	
	//const selectedTC = (TestCaseCopy.selectedRows)
	 for (let i = 0 ; i < a.length ; i++){
		 
		 {
	InsertTCinTR.run({runID: a , caseID:a[i].test_case_id }) 
		 }
	 Fetch_TRs.run()
	//	 FetchTCsforIndividualTR.run()
	// FetchTCCopy.run()
		 FetchTCsforIndividualTR.run().then(() => {
 FetchTC.run();
});
 
	
	}
	}
}