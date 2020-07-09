import React from 'react';
import ReactDOM from "react-dom";
import {render} from '@testing-library/react';
import App from './App';
import RatingStar from "../RatingStar/RatingStar";

describe("App", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders RatingForm component", () => {
            const {getByTestId} = render(<App/>);
            const ratingFormComponent = getByTestId("rating-form");
            expect(ratingFormComponent).toBeInTheDocument();
        }
    )

    it("renders RatingBarChart component", () => {
            const {getByTestId} = render(<App/>);
            const ratingBarChartComponent = getByTestId("rating-bar-chart");
            expect(ratingBarChartComponent).toBeInTheDocument();
        }
    )
});





//RatingStar
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