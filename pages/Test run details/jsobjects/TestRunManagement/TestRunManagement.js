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

		const updatedTC = (Table1.updatedRows)

		//return updatedTC[0].allFields
		for (let i=0 ; i < updatedTC.length ;i++)

		{
		await	UpdateTestRunCases.run({tcstatus:updatedTC[i].allFields.tc_status , trid: updatedTC[i].allFields.trc_id})
		} 

	},
	async getTRprogress2(runid = appsmith.URL.queryParams.trid) {
  // Fetch total number of test cases for the given test run
  await FetchTCsforIndividualTR.run();

  // Get total number of test cases
  const totalcount = FetchTCsforIndividualTR.data.length;

  // Fetch the passed test cases data for the given runid
  const data = await Total_Passed_cases_in_a_run.run({ runid });

  // Handle the case where no passed cases are returned
  if (!data || data.length === 0 || data[0].passedcount === null) {
    return 0;
  } else {
    // Extract passed count
    const passedcount = data[0].passedcount;

    // Calculate progress percentage
    const progress = (passedcount / totalcount) * 100;

    // Return the floored progress if greater than 0, otherwise 0
    return progress > 0 ? Math.floor(progress) : 0;
  }
},
	async getTRprogess1 (runid = '31')
	{
		//const passcount =  await Total_Passed_cases_in_a_run.run(runid)
		//await FetchTCsforIndividualTR.run()
		/// 	const totalcount = FetchTCsforIndividualTR.data.length

		 await Total_Passed_cases_in_a_run.run({runid})
		//const passedcount= Total_Passed_cases_in_a_run.data[0].passedcount
		// return passedcount
		//return (passedcount/totalcount )*100
		//Total_Passed_cases_in_a_run.data[0].passedcount


	}
}