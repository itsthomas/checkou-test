import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Table } from 'react-bootstrap';
import RatingStar from '../RatingStar/RatingStar';
import './RatingForm.css';

const RatingForm = ({ onceDataArrayUpdated, ...other }) => {
    const { register, handleSubmit, errors } = useForm();
    const [dataArray, setDataArray] = useState([]);
    const [newRating, setNewRating] = useState('');

    useEffect(() => {
        onceDataArrayUpdated(dataArray);
    }, [dataArray, onceDataArrayUpdated]);

    const onSubmit = (data, e) => {
        console.log(data);
        setDataArray([...dataArray, data]);

        e.target.reset();
        setNewRating('');
    };

    // This is a method in the parent component
    const onRateClick = (rating) => {
        // do something with value in parent component
        console.log('Rating from RatingForm: ' + rating);
        setNewRating(rating);
    };

    return (
        <div {...other}>
            <Form data-testid="rating-form-dom" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId='formBasicName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter name'
                        name='name'
                        ref={register}
                    />
                </Form.Group>

                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        data-testid="email-input-control"
                        type='email'
                        placeholder='Enter email'
                        name='email'
                        ref={register({
                            required: 'Email is required',
                        })}
                    />
                    {errors.email && <p data-testid="email-error-message" className='error'>{errors.email.message}</p>}
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <RatingStar rating={newRating} onceClicked={onRateClick} />

                <Form.Control
                    data-testid="rating-input-control"
                    type='text'
                    name='rating'
                    ref={register({
                        required: 'Rating is required',
                    })}
                    defaultValue={newRating}
                    hidden
                />
                {errors.rating && <p data-testid="rating-error-message" className='error'>{errors.rating.message}</p>}

                <Form.Group controlId='comment.Textarea'>
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as='textarea' rows='3' name='comment' ref={register} />
                </Form.Group>

                <Button className='submitBtn' data-testid="rating-form-submit-button" variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
            <Table striped bordered>
                <tbody>
                {dataArray.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                {item.name} |<a href={item.email}>{item.email}</a> | Rating:{' '}
                                {item.rating}
                                <p>{item.comment}</p>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    );
};

export default RatingForm;
