import {fireEvent, render} from "@testing-library/react";
import RatingForm from "./RatingForm";
import {act} from "react-dom/test-utils";
import React from "react";

describe("Rating Form", () => {
    describe("Click Submit button", () => {
        describe("with empty email or no rating", () => {
            it("should display correct error message", async () => {
                const onceDataArrayUpdated = jest.fn();
                const {getByTestId} = render(<RatingForm
                    onceDataArrayUpdated={onceDataArrayUpdated}/>);

                await act(async () => {
                    fireEvent.click(getByTestId('rating-form-submit-button'));
                });

                expect(getByTestId('email-error-message')).toBeTruthy();
                expect(getByTestId('rating-error-message')).toBeTruthy();

            });

            it("does not trigger onceDataArrayUpdated function", async () => {
                    const onceDataArrayUpdated = jest.fn();
                    const {getByTestId, rerender, findByText} = render(<RatingForm
                        onceDataArrayUpdated={onceDataArrayUpdated}/>);

                    expect(onceDataArrayUpdated).toHaveBeenCalledTimes(1);

                    await act(async () => {
                        fireEvent.click(getByTestId('rating-form-submit-button'));
                    });
                    expect(onceDataArrayUpdated).toHaveBeenCalledTimes(1);

                    const ratingInput = getByTestId('rating-input-control');
                    fireEvent.change(ratingInput, {target: {value: "5"}})
                    await act(async () => {
                        fireEvent.click(getByTestId('rating-form-submit-button'));
                    });
                    expect(onceDataArrayUpdated).toHaveBeenCalledTimes(1);
                    fireEvent.change(ratingInput, {target: {value: ""}})


                    const emailInput = getByTestId('email-input-control');
                    fireEvent.change(emailInput, {target: {value: "james@gmail.com"}})
                    await act(async () => {
                        fireEvent.click(getByTestId('rating-form-submit-button'));
                    });


                    expect(onceDataArrayUpdated).toHaveBeenCalledTimes(1);

                }
            );

        });
        describe("with valid email and valid rating", () => {
            it("triggers onceDataArrayUpdated function", async () => {
                    const onceDataArrayUpdated = jest.fn();
                    const {getByTestId} = render(<RatingForm onceDataArrayUpdated={onceDataArrayUpdated}/>);

                    const ratingInput = getByTestId('rating-input-control');
                    const emailInput = getByTestId('email-input-control');

                    fireEvent.change(emailInput, {target: {value: "james@gmail.com"}});
                    fireEvent.change(ratingInput, {target: {value: "5"}});

                    expect(onceDataArrayUpdated).toHaveBeenCalledTimes(1);

                    await act(async () => {
                        fireEvent.click(getByTestId('rating-form-submit-button'));
                    });

                    expect(onceDataArrayUpdated).toHaveBeenCalledTimes(2);
                }
            )
        })
    });


})