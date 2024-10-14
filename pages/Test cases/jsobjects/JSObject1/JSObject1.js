export default {
	myVar1: [],
	myVar2: {},

	async	queryTransform(a = []) {
		
		if (a.length == 0 )
			
		{		return "'0'"
		
		FetchTCs.run()
		}
		
		else 
		{

			const originalArray = a
			const stringWithSingleQuotes = originalArray.map(item => `'${item}'`).join(', ')
			return stringWithSingleQuotes 



		}
	}
}