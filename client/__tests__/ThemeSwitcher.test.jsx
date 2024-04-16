import { expect, it, describe } from "vitest";
import { renderHook } from '@testing-library/react-hooks'
import useDarkMode from "use-dark-mode";


beforeEach(async () => {
    window.HTMLElement.prototype.scrollIntoView = function () { };
})


describe('useDarkMode', () => {
    it('should return a default search term and original items', () => {
        // const items = [{ title: 'Star Wars' }];



        const { result } = renderHook(() => useDarkMode());

        // expect(result.current.searchTerm).toBe('');
        // expect(result.current.filteredItems).toEqual(items);
    });
});