export default {
	myVar1: [],
	myVar2: {},

	async	queryTransform(a = Select_Tag.selectedOptionLabels) {

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
		const allCases = await FetchTC.run({limit: data_table.pageSize , offset : data_table.pageOffset} )

		return allCases
	}
}