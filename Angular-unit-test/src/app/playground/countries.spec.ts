import { countries } from './countries'

describe('countries', () => {


    it('Array test. Should contain countries codes.', () => {
       const result = countries();

       expect(result).toContain('RU');
       expect(result).toContain('BY');
       expect(result).toContain('EN');
    })
})