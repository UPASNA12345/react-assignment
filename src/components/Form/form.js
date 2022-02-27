import React, { useContext } from 'react'
import { Form, Button, Space } from 'antd';
import FormElements from './FormElements'
import { MainContext } from '../../context/MainContext';




const FormComponent = () => {
  const { formSchema, setFormData, setShowModal } = useContext(MainContext);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setFormData(values);
    form.resetFields();
  };

  const onCancel = () => {
    setShowModal(false);
  };




  return (
    <div>
      <Form form={form} name="event-form" onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}

        autoComplete="off" >
        {formSchema ? formSchema.map((item, index) => {
          return (
            <FormElements
              comonentType={item.component}
              id={index}
              name={item.name}
              label={item.label}
              required={item.required}
              selectOptions={item.options || []} />
          )
        }) : ''}

        <Form.Item >
          <Space>
            <Button htmlType="button" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>

          </Space>
        </Form.Item>

      </Form>
    </div>
  );
};

export default FormComponent;