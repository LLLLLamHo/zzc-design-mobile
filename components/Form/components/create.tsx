import React from 'react';
import FormComponent from './Form';

export default function create(FormElement: any) {
    return function (props) {
        return (
            <FormComponent>
                <FormElement {...props}/>
            </FormComponent>
        )
    }
}