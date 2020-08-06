document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField() {
	const fieldContainer = document.querySelector('.schedule-item').cloneNode(true);

	const newFieldClear = fieldContainer.querySelectorAll('input')

	newFieldClear.forEach(function(field) {
		field.value = ""
	})


	document.querySelector('#schedule-items').appendChild(fieldContainer)
}