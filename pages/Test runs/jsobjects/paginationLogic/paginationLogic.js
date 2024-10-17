export default {
  myArray: [],

  store() {
    // Get the value from appsmith store
    const storeValue = appsmith.store.TCs;

    // Function to add a value to the array
    const addValueToArray = (value) => {
      this.myArray.push(value);  // Push each value into the array
      return this.myArray;       // Return the updated array
    };

    // Call the function with the storeValue
    addValueToArray(storeValue);

    // Return the updated array for any future use
    return this.myArray;
  },

async resetStore()
{
	this.myArray = []
	return "Success"
	
},
	
	UpdateDataInList()
	{
		const originalArray = this.myArray; // Example array of integers
		
		if (originalArray.length == 0)
			{
		return FetchTCs.run({list: 999999999999});
			}
		else 
		{
const commaSeparatedString = originalArray.join(','); // Join integers as a string without spaces

return FetchTCs.run({list: commaSeparatedString});
			
			
			
		}
	}
}