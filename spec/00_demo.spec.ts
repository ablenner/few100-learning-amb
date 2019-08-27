describe('writing a basic spec', () => {
    it('allows you to expect stuff', () => {
        expect('JOE').toBe('joe'.toUpperCase());
    });
});

describe('writing another one', () => {
    it('is fun', () => {
        expect(35).toEqual(20 + 15);
    });
});
