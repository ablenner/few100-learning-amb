describe('declaring variables', () => {
    it('implicit declaration', () => {
        let name = 'Joe';
        name = 'Joseph';
        let x;
        x = 'Joe';
        // x intellisence knows it is a string
        x = 1137;
        // x intellisence knows it is a number
    });

    it('union types', () => {
        let x: string | number;

        x = 'Joe';
        x = 1137;

        // not a number or string, won't work.
        // x = ['dog'];
        // x = () => 2+2;

        let seatType: 'aisle' | 'window' | 'middle';
        seatType = 'middle';
        // seatType = 'another';
    });

    it('a bit about const', () => {
        const PI = 3.14;
        // PI = 3; const can't be on left hand side of an =

        const friends = ['Sean', 'Ed', 'Billy'];
        // friends = [];
        friends[2] = 'William'; // okay because only the array itself is const, not the values in the array.

        const movie = {
            title: 'Rise of Skywalker',
            director: 'Abrams'
        };

        // movie = {};
        movie.director = 'JJ Abrams'; // same as the array example. the object is const, but the values in it are not.
    });

    it('has a var keyword, but it is broke and bad and you are a bad person if you use it.', () => {
        const age = 22;
        if (age > 21) {
            // tslint:disable-next-line: no-var-keyword
            var message = 'Old enough';
        }
        expect(message).toBe('Old enough'); // this works but is BAD
    });
});

describe('type literals', () => {
    describe('string literals', () => {
        it('can be single quote', () => {
            const name = 'joe';
            expect(typeof (name)).toBe('string');
            // tslint:disable-next-line: quotemark
            expect(name).toEqual("joe");

            const quote = 'One of my favorite authors is Flannery O\'Conner';
        });

        it('template strings', () => {
            const story = `Chapter 1.
It was a dark and stormy night.

The end.`;
            console.log(story);

            const customer = 'Bob';
            const creditLimit = 3000;
            const s1 = 'The Customer is ' + customer + ' and the credit limit is ' + creditLimit + ' Dollars';
            const s2 = `The Customer is ${customer} and the credit limit is ${creditLimit} Dollars`;
            expect(s1).toEqual(s2);
        });
    });
});
