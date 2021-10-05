const TrainDataSchema = {
  "string": {
    "firstName": "Hello",
    "lastName": "World",
    "upload": "",
    "bio": "<p>Hello</p><p><strong>World</strong></p><p><em><strong><u>Test</u></strong></em></p>",
    "password": "noneed",
    "telephone": "0909091231",
    "select": "Yes",
    "react-select": "No",
    "auto-complete": "Yes",
    "date": "2021-07-29T22:39:00+02:00"
  },
  "integer": {
    "age": 75,
    "customRating": 4
  },
  "number": {
    "currency": 1231231132
  },
  "boolean": {
    "default": false,
    "radio": false
  },
  "array": {
    "creatableSelectTest": [
      "teete"
    ],
    "selectTest": [
      "No"
    ],
    "multiSelect": [
      "#00ff00",
      "#0000ff"
    ]
  },
  "object": {
    "customComponent": {
      "startDate": "2021-09-20T22:00:00.000Z",
      "endDate": "2021-09-23T22:00:00.000Z"
    }
  }
}

export default TrainDataSchema
