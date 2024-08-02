import {
  Button,
  ConfigProvider,
  Empty,
  Form,
  FormProps,
  Input,
  InputNumber,
  Table,
  type FormListFieldData,
  type FormListOperation,
} from 'antd';
import React from 'react';

import { mergecellswithRender } from '@/utils/tool';
import { ProForm, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { useMount } from 'ahooks';
import { type ColumnProps } from 'antd/es/table';

const FormListAndTable: React.FC = () => {
  const columns: ColumnProps<{
    field: FormListFieldData;
    operation: FormListOperation;
  }>[] = [
    {
      title: 'a',
      dataIndex: 'a',
      render(value, record, index) {
        // console.log(record);

        const { field } = record;
        const item = <ProFormText name={[field.name, 'a']} readonly />;
        return mergecellswithRender(record['merge'], form.getFieldValue('users'), 'merge', index, item);
      },
      // shouldCellUpdate(record, prevRecord) {
      //   console.log(record, prevRecord);
      //   return true;
      // },
    },
    {
      title: 'b',
      dataIndex: 'b',
      render(value, { field }) {
        return <ProFormText name={[field.name, 'b']} readonly />;
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render(value, { field }) {
        return (
          <ProForm.Item name={[field.name, 'name']} rules={[{ required: true, message: 'required' }]}>
            <Input />
          </ProForm.Item>
        );
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      render(value, { field }) {
        return (
          <ProForm.Item name={[field.name, 'age']}>
            <InputNumber />
          </ProForm.Item>
        );
      },
    },
    {
      title: 'Sex',
      dataIndex: 'sex',
      render(value, { field }) {
        return (
          <ProFormSelect
            name={[field.name, 'sex']}
            options={[
              { label: '男', value: 0 },
              { label: '女', value: 1 },
            ]}
          />
        );
      },
    },
    {
      title: 'Sex',
      dataIndex: 'sex',
      render(value, { field }) {
        return (
          <ProFormSelect
            name={[field.name, 'sex']}
            options={[
              { label: '男', value: 0 },
              { label: '女', value: 1 },
            ]}
          />
        );
      },
    },
    {
      title: 'Sex',
      dataIndex: 'sex',
      render(value, { field }) {
        return (
          <ProFormSelect
            name={[field.name, 'sex']}
            options={[
              { label: '男', value: 0 },
              { label: '女', value: 1 },
            ]}
          />
        );
      },
    },
    {
      title: 'Sex',
      dataIndex: 'sex',
      render(value, { field }) {
        return (
          <ProFormSelect
            name={[field.name, 'sex']}
            options={[
              { label: '男', value: 0 },
              { label: '女', value: 1 },
            ]}
          />
        );
      },
    },
    // {
    //   title: 'Action',
    //   dataIndex: 'action',
    //   render(value, { operation, field }) {
    //     return (
    //       <Space>
    //         <Button type="primary" shape="circle" onClick={() => operation.add()}>
    //           +
    //         </Button>
    //         <Button danger shape="circle" onClick={() => operation.remove(field.name)}>
    //           -
    //         </Button>
    //       </Space>
    //     );
    //   },
    // },
  ];

  const [form] = ProForm.useForm();
  const onFinish: FormProps<FormData>['onFinish'] = (values) => {
    console.log(values);
  };

  useMount(() => {
    form.setFieldsValue({
      users: Array.from({ length: 200 }, (_, i) => ({
        a: i,
        b: i,
        merge: i < 3 ? 0 : 1,
        name: i * i,
        age: i,
        sex: i % 2 ? 0 : 1,
      })),
    });
  });

  return (
    <ProForm layout="vertical" onFinish={onFinish} form={form}>
      <ProForm.Item label="Users">
        <Form.List name="users">
          {(fields, operation) => {
            const dataSources = fields.map((field) => ({
              field,
              operation,
            }));
            // console.log('dataSources', dataSources);
            return (
              <ConfigProvider
                renderEmpty={() => (
                  <Empty description={false}>
                    <Button type="primary" ghost onClick={() => operation.add()}>
                      Add
                    </Button>
                  </Empty>
                )}
              >
                <Table
                  size="small"
                  bordered
                  rowKey={(row) => row.field.key}
                  dataSource={dataSources}
                  columns={columns}
                  pagination={false}
                />
              </ConfigProvider>
            );
          }}
        </Form.List>
      </ProForm.Item>

      <ProForm.Item>
        <Button type="primary" htmlType="submit">
          获取值
        </Button>
        <Button
          type="primary"
          onClick={() => form.setFieldValue('users', [{ name: 'hello' }, { name: '111' }, { name: '222' }])}
        >
          设置值
        </Button>
        <Button
          type="primary"
          onClick={() => form.setFieldValue('users', [...form.getFieldValue('users'), { name: Math.random() }])}
        >
          添加值
        </Button>
      </ProForm.Item>
    </ProForm>
  );
};

export default FormListAndTable;
