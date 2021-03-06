export const startup = () => {
    const prefillData = window.localStorage.getItem('prefillData') || []
    const nameFactorCombinations = window.localStorage.getItem('nameFactorCombinations') || []

    if (!prefillData.length > 0) {
        const startPrefillData = [
            {
                'id': '1',
                'education': {
                    'education-type': '',
                    'education-level': '',
                    'education-change': '',
                    'education-quiter': '',
                    'education-level-father': '',
                    'education-level-mother': '',
                },
                'general': {
                    'first-name': '',
                    'last-name': '',
                    'gender': '',
                    'age-child': '',
                    'age-mother': '',
                    'age-father': '',
                    'age-difference-parents': '',
                    'origin-parents': '',
                    'guidance': '',
                },
                'housing': {
                    'home-type': '',
                    'situational-type': '',
                },
                'justice': {
                    'child-suspected-in-crime': '',
                    'child-in-halt': '',
                    'parents-suspected-in-crime': '',
                    'father-suspected-in-crime': '',
                    'mother-suspected-in-crime': '',
                },
                'relational': {
                    'parents-divorced': '',
                },
                'mental': {
                    'known-at-guidance-help': '',
                },
                'society': {
                    'participation-father': '',
                    'participation-mother': '',
                    'socio-status-father': '',
                    'socio-status-mother': '',
                }
            }
        ]

        window.localStorage.setItem('prefillData', JSON.stringify(startPrefillData))
    }

    if (!nameFactorCombinations.length > 0) {
        window.nameFactorCombinations = [
            {
                name: 'education-type',
                value: 0,
            },
            {
                name: 'education-level',
                value: 0,
            },
            {
                name: 'education-change',
                value: 0,
            },
            {
                name: 'education-quiter',
                value: 0,
            },
            {
                name: 'education-level-father',
                value: 0,
            },
            {
                name: 'education-level-mother',
                value: 0,
            },
            {
                name: 'first-name',
                value: 0,
            },
            {
                name: 'last-name',
                value: 0,
            },
            {
                name: 'gender',
                value: 0,
            },
            {
                name: 'age-child',
                value: 0,
            },
            {
                name: 'age-mother',
                value: 0,
            },
            {
                name: 'age-father',
                value: 0,
            },
            {
                name: 'age-difference-parents',
                value: 0,
            },
            {
                name: 'origin-parents',
                value: 0,
            },
            {
                name: 'guidance',
                value: 0,
            },
            {
                name: 'home-type',
                value: 0,
            },
            {
                name: 'situational-type',
                value: 0,
            },
            {
                name: 'child-suspected-in-crime',
                value: 0,
            },
            {
                name: 'child-in-halt',
                value: 0,
            },
            {
                name: 'parents-suspected-in-crime',
                value: 0,
            },
            {
                name: 'father-suspected-in-crime',
                value: 0,
            },
            {
                name: 'mother-suspected-in-crime',
                value: 0,
            },
            {
                name: 'parents-divorced',
                value: 0,
            },
            {
                name: 'known-at-guidance-help',
                value: 0,
            },
            {
                name: 'participation-father',
                value: 0,
            },
            {
                name: 'participation-mother',
                value: 0,
            },
            {
                name: 'socio-status-father',
                value: 0,
            },
            {
                name: 'socio-status-mother',
                value: 0,
            },
        ]

        try {
            window.localStorage.setItem('nameFactorCombinations', JSON.stringify(window.nameFactorCombinations))
        } catch (error) {
            throw new Error(error)
        }
    } else {
        try {
            window.nameFactorCombinations = JSON.parse(window.localStorage.getItem('nameFactorCombinations'))
        } catch (error) {
            throw new Error(error)
        }
    }
}