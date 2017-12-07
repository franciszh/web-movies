import { getMoviesFromApiAsync } from './Service';

//the following must fail 
//because it is not a open API and I can't host and test in the same time
describe('The method getMoviesFromApiAsync ',() => {
       test('should have an array as received data', () => {
            return getMoviesFromApiAsync().then(
                data => {
                    expect(Array.isArray(data)).toBeTruthy();
                }
            );
       });

       test('should have the reture array length is equal to 20', () => {
            return getMoviesFromApiAsync().then(
                data => {
                    expect(data.length).toBe(20);
                }
            );
        });
    }
);