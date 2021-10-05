const xhrSchema = {
  "simple": {
    "name": "Randy"
  },
  "conditional": {
    "Do you have any pets?": "No"
  },
  "arrayOfConditionals": [
    {
      "Do you have any pets?": "Yes: One",
      "How old is your pet?": 6
    },
    {
      "Do you have any pets?": "Yes: More than one",
      "Do you want to get rid of any?": false
    }
  ],
  "fixedArrayOfConditionals": [
    {
      "Do you have any pets?": "No"
    },
    {
      "Do you have any pets?": "Yes: One",
      "How old is your pet?": 6
    },
    {
      "Do you have any pets?": "Yes: More than one",
      "Do you want to get rid of any?": true
    }
  ]
}

export default xhrSchema;