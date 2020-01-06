import React from 'react';
import FormComponent from './Form';

export default function create(FormElement: any) {
    return function () {
        return (
            <FormComponent>
                <FormElement />
            </FormComponent>
        )
    }
}