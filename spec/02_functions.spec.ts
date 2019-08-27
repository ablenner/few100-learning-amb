import { isEven } from './utils';

describe('writing functions', () => {
    describe('three ways of creating them', () => {
        it('the syntax', () => {

            // only add can be used up here, the others aren't defined yet

            // "Named Function"
            function add(a: number, b: number) {
                return a + b;
            }

            // Anonymous functions (two ways)
            const subtract = function (a: number, b: number) {
                return a - b;
            };

            // "Arrow" function (expression bodied)
            const multiply = (a: number, b: number) => a * b;

            // "arrow" function (block body)
            const divide = (a: number, b: number) => {
                if (b == 0) { // always use a === so javascript doesn't automatically type convert
                    throw new Error('Are you trying to open a black hole?');
                }
                return a / b;
            };

            expect(add(2, 2)).toBe(4);
            expect(subtract(10, 2)).toBe(8);
            expect(multiply(3, 3)).toBe(9);
            expect(divide(20, 2)).toBe(10);
        });
    });

    describe('array methods', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        it('you can take a look at each one of them', () => {
            numbers.forEach(n => console.log(n)); // foreach arguments e,i,c. element, index, collection
        });

        describe('that return other arrays', () => {
            it('has filter', () => {
                const evens = numbers.filter(isEven);
                expect(evens).toEqual([2, 4, 6, 8]);
            });

            it('has a map', () => {
                const doubled = numbers.map(n => n * 2);
                expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);

                const doubledEvens = numbers
                    .filter(isEven)
                    .map(n => n * 2);
                expect(doubledEvens).toEqual([4, 8, 12, 16]);
            });
        });
    });
});
