import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import RatingStar from "./RatingStar";


describe("Rating Star", () => {
    it("renders correctly based on rating prop value", async () => {
            const {container, rerender} = render(<RatingStar rating={3}/>);
            let numGoldStar = 0;
            container.querySelectorAll('.gold-star').forEach(function () {
                numGoldStar = numGoldStar + 1;
            })
            expect(numGoldStar).toBe(3);

            numGoldStar = 0;
            rerender(<RatingStar rating={5}/>);
            container.querySelectorAll('.gold-star').forEach(function () {
                numGoldStar = numGoldStar + 1;
            })
            expect(numGoldStar).toBe(5);
        }
    )
})