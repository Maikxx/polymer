import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import { setNewLocalstorage } from '../utils/setNewLocalstorage.js'
import { getLocalstorageValue } from '../utils/getLocalstorageValue.js'
import { setFactorValue } from '../utils/setFactorValue.js'
import { triggerRegenerateEvent } from '../utils/triggerRegenerateEvent.js'

class MentalInputCollection extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles"></style>

            <fieldset>
                <legend>
                    Geestelijke gezondheid
                </legend>

                <div class="field">
                    <label for="known-at-guidance-help">
                        Als slachtoffer bekend bij slachtofferhulp
                    </label>
                    <select on-change="onChange" name="known-at-guidance-help" id="known-at-guidance-help">
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
            'known-at-guidance-help',
       ]

        inputNames.map(inputName => {
            const select = this.shadowRoot.getElementById(inputName)
            const localStorageValue = getLocalstorageValue('mental', inputName)

            if (localStorageValue) {
                select.value = localStorageValue
            }
        })
    }

    onChange(event) {
        const { target } = event
        const { options, name: inputName } = target
        const selectedValue = options[target.selectedIndex].value

        setNewLocalstorage(inputName, selectedValue, 'mental')

        if (selectedValue === 'yes') {
            setFactorValue(inputName, 0.23639124)
        } else {
            setFactorValue(inputName, 0)
        }

        triggerRegenerateEvent()
    }
}

window.customElements.define('ri-mental-input-collection', MentalInputCollection)