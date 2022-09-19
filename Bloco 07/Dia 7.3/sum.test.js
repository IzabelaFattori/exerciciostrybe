const sum = require('./sum')

describe("algo", () => {
    it("Soma 4 + 5 = 9", () => {
        expect(sum(4,5)).toBe(9)
    })
    it("Soma 0 + 0 = 0", () => {
        expect(sum(0,0)).toBe(0)
    })
    it("Espera o erro", () => {
        expect( () => sum (4,"5")).toThrowError();
    })
    it("Espera a Mensagem do erro", () => {
        expect( () => sum (4,"5")).toThrowError('parameters must be numbers');
    })
})