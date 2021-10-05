const TabsUiSchema = {
  "ui:page": {
    "ui:layout": "steps",
    "props": {
      "includeSkipButton": false,
      "ui:schemaErrors": true
    }
  },
  "SelectComponents": {
    "listOfComponents": {
      "ui:widget": "checkboxes"
    },
    "listOfInterceptors": {
      "ui:widget": "checkboxes"
    },
    "listOfUtils": {
      "ui:widget": "checkboxes"
    }
  },
  "PublishPackage": {
    "packageName": {},
    "packageVersion": {}
  }
}

export default TabsUiSchema;