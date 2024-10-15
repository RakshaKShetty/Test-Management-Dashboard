export default {
	myVar1: [],
	myVar2: {},

	async	queryTransform(a = FilterTags.selectedOptionLabels) {

		if (a.length == 0 )

		{		return "'0'"

		 FetchTC.run()
		}

		else 
		{

			const originalArray = a
			const stringWithSingleQuotes = originalArray.map(item => `'${item}'`).join(', ')
			return stringWithSingleQuotes 



		}
	},
	async fetchAllCases()
	{
		await this.queryTransform()
		const allCases = await FetchTC.run({ limit: TestCase.pageSize , offset : TestCase.pageOffset} )

		return allCases
	},
	async fetchAllTRCases()
	{
		await this.queryTransform()
		const allCases = await FetchTC.run({ limit: TestCaseCopy.pageSize , offset : TestCaseCopy.pageOffset} )

		return allCases
	},
	
}