import React from 'react';
import { Alert, Form, Select } from 'antd';

import axios from 'axios';

export default class SelectComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            objectData: []
        }
    }

    // TODO: Extract as much of this out into the framework
    // static fetchData = async (objectDataRequest) => {
    //     return axios.post('https://flow.boomi.com/api/run/1/service/data', objectDataRequest, {
    //         headers: {
    //             'ManyWhoTenant': '1e6ba809-b1f7-4118-91c1-a5a6e7092ced'
    //         }
    //     })
    //         .then(response => {
    //             return response.data;
    //         })
    //         .catch(error => {
    //             // TODO
    //             console.error(error);
    //         });
    // }

    // static async getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps', props);
    //
    //     let objectDataRequest = props.component.data.objectDataRequest;
    //     if (objectDataRequest) {
    //         const response = await SelectComponent.fetchData(objectDataRequest);
    //
    //         return {
    //             ...state,
    //             objectData: response
    //         }
    //     } else {
    //         return {
    //             ...state,
    //             objectData: props.component.data.objectData
    //         }
    //     }
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    // }

    render() {
        // console.log(this.props);

        const { component, isLoading, objectData, onChange } = this.props;

        // TODO: ObjectDataRequests
        // TODO: Multiselect
        // TODO: Page conditions (hasEvents: true)

        const rules = [
            {
                required: component.data.isRequired,
                message: 'This field is required'
            }
        ];

        // TODO: isLoading === 'validating'
        const validationStatus = component.data.isValid
            ? null
            : 'error';

        const inputProps = {
            disabled: isLoading,
            loading: isLoading,
            onChange: (value) => onChange({
                objectData: [objectData.find(object => object.internalId === value)]
            }),
            placeholder: component.hintValue,
            required: component.data.isRequired,
            maxLength: component.size
        };

        const labelProperty = this.props.component.columns.find(column => column.isDisplayValue);

        const options = (objectData || []).map(object => {
            const label = object.properties.find(property => property.typeElementPropertyId === labelProperty.typeElementPropertyId);

            return (
                <Select.Option value={ object.internalId }>
                    { label.contentValue }
                </Select.Option>
            )
        });

        return (
            <Form layout="vertical">
                <Form.Item
                    hasFeedback={ !!validationStatus }
                    help={ component.data.validationMessage }
                    label={ component.label }
                    name={ component.id }
                    rules={ rules }
                    validateStatus={ validationStatus }
                >
                    <Select { ...inputProps } style={ { width: 180 } }>
                        { options }
                    </Select>
                </Form.Item>
            </Form>
        )
    }
}
