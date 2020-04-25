const firstField = '/html/body/section/div/div/form/div[1]/input';
const secondField = '/html/body/section/div/div/form/div[3]/input';
const equalButton = '/html/body/section/div/div/form/div[4]/input';
const answer = '/html/body/section/div/div/form/div[5]/h1';

module.exports = {
	'Calculator test': function (browser) {
		browser
			.url('http://localhost:3000/dev/')
			.maximizeWindow()
			.waitForElementVisible('body')
			.useXpath()
			// Add -->
			.setValue(firstField, '2')
			.setValue(secondField, '41')
			.click(equalButton)
			.pause(500)
			.assert.containsText(answer, '43')
			.pause(2500)
			.refresh()
			// // Substract -->
			.setValue(firstField, '1')
			.click('/html/body/section/div/div/form/div[2]/div/div/select/option[2]')
			.setValue(secondField, '3')
			.click(equalButton)
			.assert.containsText(answer, '-2')
			.pause(2000)
			.refresh()
			// // Multiply -->
			.setValue(firstField, '100')
			.click('/html/body/section/div/div/form/div[2]/div/div/select/option[3]')
			.setValue(secondField, '3')
			.click(equalButton)
			.assert.not.containsText(answer, '3100')
			.pause(2000)
			.refresh()
			// // Substract -->
			.setValue(firstField, '6')
			.click('/html/body/section/div/div/form/div[2]/div/div/select/option[4]')
			.setValue(secondField, '2')
			.click(equalButton)
			.assert.containsText(answer, '3')
			.pause(2000)
			.refresh()
			// Greater Than -->
			.setValue(firstField, '6')
			.click('/html/body/section/div/div/form/div[2]/div/div/select/option[5]')
			.setValue(secondField, '2')
			.click(equalButton)
			.assert.containsText(answer, 'true')
			.pause(2000)
			.refresh()
			// Greater Than Or Equal -->
			.setValue(firstField, '2')
			.click('/html/body/section/div/div/form/div[2]/div/div/select/option[6]')
			.setValue(secondField, '2')
			.click(equalButton)
			.assert.containsText(answer, 'true')
			.pause(2000)
			.refresh()
			// Equal -->
			.setValue(firstField, '100')
			.click('/html/body/section/div/div/form/div[2]/div/div/select/option[7]')
			.setValue(secondField, '100')
			.click(equalButton)
			.assert.containsText(answer, 'true')
			.pause(2000)
			.refresh()
			// Smaller Than Or Equal -->
			.setValue(firstField, '1')
			.click('/html/body/section/div/div/form/div[2]/div/div/select/option[8]')
			.setValue(secondField, '10')
			.click(equalButton)
			.assert.containsText(answer, 'true')
			.pause(2000)
			.refresh()
			// Smaller Than -->
			.setValue(firstField, '1')
			.click('/html/body/section/div/div/form/div[2]/div/div/select/option[9]')
			.setValue(secondField, '6')
			.click(equalButton)
			.assert.containsText(answer, 'true')
			.pause(2000)
			.refresh()
			.end();
	},
};
