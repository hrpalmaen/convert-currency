// 1 UE --
const changeCOUS = 3623
const changeUSCO = 0.00028

const CO = 'CO'
const US = 'US'

const loadDocument = () => {
    const $form = document.getElementById('form')
    const $input = document.querySelector('#value-input')
    const $fromChange = document.querySelector('#fromChange')
    const $toChange = document.querySelector('#toChange')

    $form.addEventListener('submit', handleSubmit)
    $input.addEventListener('input', getDataConvert)
    $fromChange.addEventListener('change', getDataConvert)
    $toChange.addEventListener('change', getDataConvert)
    window.addEventListener('offline', () => handleAlerts('block', "Sin conexión"))
    window.addEventListener('online', () => handleAlerts('none', ''))
}

const getDataConvert = () => {
    const $input = document.querySelector('#value-input')
    const $fromChange = document.querySelector('#fromChange')
    const $toChange = document.querySelector('#toChange')
    const $containerResult = document.querySelectorAll('.container-result')[0]

    console.log('parseInt($input.value): ', $input)
    setText(
        $containerResult,
        convert(
            parseInt($input.value),
            $fromChange.value,
            $toChange.value
        )
    )
}

const handleSubmit = (event) => {
    event.preventDefault()
    getDataConvert()
}

/**
 * Convierte valor
 * @param {*} value base de cambio
 * @param {*} from cambio desde
 * @param {*} to cambio a
 * @returns 
 */
const convert = (value, from, to) => {
    switch (from) {
        case CO:
            if (to === CO) return `$ ${value}`
            return `US ${value * changeUSCO}`
        case US:
            if (to === US) return `US ${value}`
            return `$ ${value * changeCOUS}`
        default:
            return 0
    }

}

const setText = ($element, text) => {
    $element.innerHTML = text
}

const handleAlerts = (display, message) => {
    console.log('message: ', message);
    document.querySelector('.container-alert').style.display = display
    document.querySelector('.alert').innerHTML = message
}