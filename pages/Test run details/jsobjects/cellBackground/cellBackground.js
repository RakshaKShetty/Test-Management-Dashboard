export default {
	myVar1: ['#ef4444', '#22c55e','#fde047', '#d4d4d8'],

	myFun1 () {

		if (Table1.updatedRow.tc_status == 'Passed')
			return this.myVar1[0]
		else if (Table1.updatedRow.tc_status == 'Failed')
			return this.myVar1[1]
		else if (Table1.updatedRow.tc_status == 'Skipped')
			return this.myVar1[2]
		else return this.myVar1[3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		await FetchTCsforIndividualTR.run()

		let a = FetchTCsforIndividualTR.data

		for(let i=0 ;i< a.length; i++ )
		{ 
			if (a[i].tc_status == 'Passed')
				return this.myVar1[0]
			else if (a[i].tc_status == 'Failed')
				return this.myVar1[1]
			else if (a[i].tc_status == 'Skipped')
				return this.myVar1[2]
			else return this.myVar1[3]
		}
	}
}
