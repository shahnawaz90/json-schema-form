const uiSchema = {
  "simple": {
    "credit_card": {
      "ui:help": "If you enter anything here then billing_address will be dynamically added to the form."
    }
  },
  "conditional": {
    "Do you want to get rid of any?": {
      "ui:widget": "radio"
    }
  },
  "arrayOfConditionals": {
    "items": {
      "Do you want to get rid of any?": {
        "ui:widget": "radio"
      }
    }
  },
  "fixedArrayOfConditionals": {
    "items": {
      "Do you want to get rid of any?": {
        "ui:widget": "radio"
      }
    },
    "additionalItems": {
      "Do you want to get rid of any?": {
        "ui:widget": "radio"
      }
    }
  }
}

export default uiSchema;