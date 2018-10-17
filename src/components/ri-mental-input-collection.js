import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '../shared-styles.js'
import { setNewLocalstorage } from '../utils/setNewLocalstorage.js'
import { getLocalstorageValue } from '../utils/getLocalstorageValue.js'
import { generatePercentage } from '../utils/generatePercentage.js'

class MentalInputCollection extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                legend {
                    padding-top: 24px;
                    border-bottom: 2px solid black;
                }

                fieldset {
                    border: 0;
                    padding: 24px 12px;
                }
            </style>

            <fieldset>
                <legend>
                    Geestelijke gezondheid
                </legend>

                <div class="row">
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

    onChange (event) {
        const { target } = event
        const { options, name: inputName } = target
        const selectedValue = options[target.selectedIndex].value

        setNewLocalstorage(inputName, selectedValue, 'mental')

        if (selectedValue === 'yes') {
            window.factorData[window.factorData.findIndex(obj => obj.name === 'known-at-guidance-help')].value = 0.23639124
            console.log(generatePercentage(window.factorData))
        } else {
            window.factorData[window.factorData.findIndex(obj => obj.name === 'known-at-guidance-help')].value = 0
            console.log(generatePercentage(window.factorData))
        }
    }

    ready () {
        super.ready()

        const endPoints = [
            'known-at-guidance-help',
       ]

        endPoints.map(endPoint => {
            const select = this.shadowRoot.getElementById(endPoint)
            const lsv = getLocalstorageValue('mental', endPoint)

            if (lsv) {
                select.value = lsv
            }
        })
    }
}

window.customElements.define('ri-mental-input-collection', MentalInputCollection)