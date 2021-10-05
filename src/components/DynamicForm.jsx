import React, { useEffect, useState } from 'react'
import Form from '@rjsf/core'
import LayoutGridField from 'react-jsonschema-form-layout-grid'
import Button from '@restart/ui/esm/Button'

const DynamicForm = () => {
  const fields = {
    layout_grid: LayoutGridField,
  }

  const schema = {
    "title": "Todo",
    "type": "object",
    "properties": {
        "password": {
            "type": "string",
            "title": "Password"
        },
        "lastName": {
            "type": "string",
            "title": "Last name"
        },
        "bio": {
            "type": "string",
            "title": "Bio"
        },
        "firstName": {
            "type": "string",
            "title": "First name"
        },
        "age": {
            "type": "integer",
            "title": "Age"
        },
        
    }
}

  const uiSchema = {
    'ui:field': 'layout_grid',
    'ui:layout_grid': {
      'ui:row': [
        {
          'ui:col': {
            md: 12,
            children: [
              {
                'ui:group': 'Name',
                'ui:row': [
                  { 'ui:col': { md: 6, children: ['firstName'] } },
                  { 'ui:col': { md: 6, children: ['lastName'] } },
                ],
              },
              {
                'ui:row': [
                  { 'ui:col': { md: 6, children: ['password'] } },
                  { 'ui:col': { md: 6, children: ['age'] } },
                ],
              },
              { 'ui:row': [{ 'ui:col': { md: 12, children: ['bio'] } }] },
              { 'ui:row': [{ 'ui:col': { md: 12, children: ['destination'] } }] },
            ],
          },
        },
      ],
    },
  }

  const [formState, setFormState] = useState({})

  const addRow = () => {
    let newFormState = { ...schema }
    newFormState = {
      ...newFormState,
      properties: {
        ...newFormState.properties,
        "destination": {
          "type": "string",
          "title": "Where are you headed?",
          "enum": [
            "canada",
            "usa",
            "international"
          ],
          "enumNames": [
            "Canada",
            "USA"
          ]
        },
      },
    }
    setFormState(newFormState)
  }

  useEffect(() => {
    setFormState(schema)
  },[])

  useEffect(() => {
    console.log(formState);
  }, [formState])

  return (
    <div>
      <Form schema={formState} uiSchema={uiSchema} fields={fields} />
      <button className='btn btn-danger' onClick={addRow}>
        +
      </button>
    </div>
  )
}

export default DynamicForm
