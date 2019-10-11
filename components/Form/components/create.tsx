import React from 'react';
import FormComponent from './Form';

export default function create(id: string, FormElement: any) {
    return function () {
        return (
            <FormComponent id={id}>
                <FormElement/>
            </FormComponent>
        )
    }
}