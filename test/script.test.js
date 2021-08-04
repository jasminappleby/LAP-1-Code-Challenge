const { test, expect } = require('@jest/globals')
const script = require('../practiseClient/script')
global.fetch = require('jest-fetch-mock')

describe("getListings", () => {
    

    test("has fetch been called", () => {
        script.getListings();
        expect(fetch).toHaveBeenCalled();
    })

    test("has fetch returns listings", () => {
    
        fetch.mockResponse(JSON.stringify({ id: 1, url: 'https://en.wikipedia.org/wiki/Cheese', pageTitle: 'Cheese - Wikipedia', text: 'Cheese is a dairy product, derived from milk and produced in wide ranges of flavors, textures and forms by coagulation of the milk protein casein.' }))
        expect(script.getListings()).toEqual('')
    })

})
