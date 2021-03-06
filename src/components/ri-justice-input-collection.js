import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import { setNewLocalstorage } from '../utils/setNewLocalstorage.js'
import { getLocalstorageValue } from '../utils/getLocalstorageValue.js'
import { setFactorValue } from '../utils/setFactorValue.js'
import { triggerRegenerateEvent } from '../utils/triggerRegenerateEvent.js'

class JusticeInputCollection extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles"></style>

            <fieldset>
                <legend>
                    Justitie
                </legend>

                <div class="field">
                    <label for="child-suspected-in-crime">
                        Kind in het verleden verdacht geweest van een delict
                    </label>
                    <select on-change="onChange" name="child-suspected-in-crime" id="child-suspected-in-crime">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="yes">
                            Ja
                        </option>
                        <option value="no">
                            Nee
                        </option>
                    </select>
                </div>

                <div class="field">
                    <label for="child-in-halt">
                        Kind in aanraking geweest met bureau HALT voor een delict
                    </label>
                    <select on-change="onChange" name="child-in-halt" id="child-in-halt">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="yes">
                            Ja
                        </option>
                        <option value="no">
                            Nee
                        </option>
                    </select>
                </div>

                <div class="field">
                    <label for="parents-suspected-in-crime">
                        Vader of moeder verdacht van delict in het verleden
                    </label>
                    <select on-change="onChange" name="parents-suspected-in-crime" id="parents-suspected-in-crime">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="yes">
                            Ja
                        </option>
                        <option value="no">
                            Nee
                        </option>
                    </select>
                </div>

                <div class="field">
                    <label for="father-suspected-in-crime">
                        Vader verdacht van delict in het verleden
                    </label>
                    <select on-change="onChange" name="father-suspected-in-crime" id="father-suspected-in-crime">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="yes">
                            Ja
                        </option>
                        <option value="no">
                            Nee
                        </option>
                    </select>
                </div>

                <div class="field">
                    <label for="mother-suspected-in-crime">
                        Moeder verdacht van delict in het verleden
                    </label>
                    <select on-change="onChange" name="mother-suspected-in-crime" id="mother-suspected-in-crime">
                        <option disabled="disabled" selected="selected" value>
                            Selecteer
                        </option>
                        <option value="yes">
                            Ja
                        </option>
                        <option value="no">
                            Nee
                        </option>
                    </select>
                </div>
            </fieldset>
        `
    }

    ready() {
        super.ready()

        const inputNames = [
            'child-suspected-in-crime',
            'child-in-halt',
            'parents-suspected-in-crime',
            'father-suspected-in-crime',
            'mother-suspected-in-crime',
        ]

        inputNames.map(inputName => {
            const select = this.shadowRoot.getElementById(inputName)
            const localStorageValue = getLocalstorageValue('justice', inputName)

            if (localStorageValue) {
                select.value = localStorageValue
            }
        })
    }

    onChange(event) {
        const { target } = event
        const { options, name: inputName } = target
        const selectedValue = options[target.selectedIndex].value

        setNewLocalstorage(inputName, selectedValue, 'justice')

        if (inputName === 'child-suspected-in-crime') {
            if (selectedValue === 'yes') {
                setFactorValue(inputName, 0.94737545)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'child-in-halt') {
            if (selectedValue === 'yes') {
                setFactorValue(inputName, 0.36448201)
            } else {
                setFactorValue(inputName, 0)
            }
        } else if (inputName === 'parents-suspected-in-crime') {
            if (selectedValue === 'yes') {
                setFactorValue(inputName, 0.50027131)
            } else {
                setFactorValue(inputName, 0)
            }
        } else {
            // For the other two selects, there are no factors known.
            setFactorValue(inputName, 0)
        }

        triggerRegenerateEvent()
    }
}

window.customElements.define('ri-justice-input-collection', JusticeInputCollection)