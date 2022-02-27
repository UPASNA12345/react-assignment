import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';


const FormElements = (props) => {
    const { comonentType, id, name, label, required, selectOptions } = props
    const { TextArea } = Input;
    const { RangePicker } = DatePicker;
    const { Option } = Select
    switch (comonentType) {
        case 'text':
            return <Form.Item
                key={id}
                name={name}
                label={label}
                rules={[
                    {
                        required: { required },
                    },
                ]}
            ><Input /></Form.Item>
            break;
        case 'select':
            return (<Form.Item
                key={id}
                name={name}
                label={label}
                rules={[
                    {
                        required: { required },
                    },
                ]}
            >
            <Select > {selectOptions.map((item, i) => {
                return(<Option key={i} value={item.value}>{item.label}</Option>)
            })}
            </Select>
            </Form.Item>)
            break;
        case 'textarea':
            return (<Form.Item
                key={id}
                name={name}
                label={label}
            ><TextArea /></Form.Item>)
            break;

        case 'range_picker':
            return(<Form.Item  key={id}
                name={name}
                label={label}
                rules={[
                    {
                        required: { required },
                    },
                ]}>
               < RangePicker />
            </Form.Item>)    
        default:
            return ''
    }
}

export default FormElements
