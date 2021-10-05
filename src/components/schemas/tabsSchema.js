const TabsSchema = {
  "type": "object",
  "properties": {
    "SelectComponents": {
      "title": "Select Components",
      "$ref": "#/definitions/componentsList"
    },
    "PublishPackage": {
      "title": "Publish your Package",
      "type": "object",
      "required": [
        "packageName",
        "packageVersion"
      ],
      "properties": {
        "packageName": {
          "type": "string",
          "title": "Package Name"
        },
        "packageVersion": {
          "type": "string",
          "title": "Package Version"
        }
      }
    },
    "GettingStarted": {
      "title": "Getting Started",
      "type": "object",
      "properties": {
        "results": {
          "type": "null",
          "title": "Results"
        }
      }
    }
  },
  "definitions": {
    "componentsList": {
      "title": "Select Components",
      "type": "object",
      "properties": {
        "selectTheme": {
          "type": "string",
          "title": "Which  Theme ?",
          "enum": [
            "Material UI",
            "No Theme"
          ],
          "default": "Material UI"
        }
      },
      "required": [
        "selectTheme"
      ],
      "dependencies": {
        "selectTheme": {
          "oneOf": [
            {
              "properties": {
                "selectTheme": {
                  "const": "No Theme"
                }
              }
            },
            {
              "properties": {
                "selectTheme": {
                  "const": "Material UI"
                },
                "listOfComponents": {
                  "type": "array",
                  "title": "A list of components (Material Theme)",
                  "items": {
                    "type": "string",
                    "enum": [
                      {
                        "key": "material-radio-group",
                        "value": "material-radio-group",
                        "onData": {
                          "equals": "material-radio-group",
                          "adds": {
                            "listOfUtils": [
                              "enum-utils"
                            ]
                          }
                        }
                      },
                      {
                        "key": "creatable-react-select",
                        "value": "creatable-react-select",
                        "onData": {
                          "equals": "creatable-react-select",
                          "adds": {
                            "listOfUtils": [
                              "enum-utils"
                            ]
                          }
                        }
                      },
                      {
                        "key": "react-select",
                        "value": "react-select",
                        "onData": {
                          "equals": "react-select",
                          "adds": {
                            "listOfUtils": [
                              "enum-utils",
                              "parse-values"
                            ]
                          }
                        }
                      },
                      {
                        "key": "material-select",
                        "value": "material-select",
                        "disabled": true,
                        "onData": {
                          "equals": "material-select",
                          "adds": {
                            "listOfUtils": [
                              "enum-utils",
                              "parse-values"
                            ]
                          }
                        }
                      },
                      {
                        "key": "material-auto-complete",
                        "value": "material-auto-complete",
                        "onData": {
                          "equals": "material-auto-complete",
                          "adds": {
                            "listOfUtils": [
                              "enum-utils",
                              "parse-values"
                            ]
                          }
                        }
                      },
                      {
                        "key": "material-checkbox",
                        "value": "material-checkbox",
                        "disabled": true,
                        "onData": {
                          "equals": "material-checkbox",
                          "adds": {
                            "listOfUtils": [
                              "enum-utils"
                            ]
                          }
                        }
                      },
                      {
                        "key": "material-switch",
                        "value": "material-switch",
                        "onData": {
                          "equals": "material-switch",
                          "adds": {
                            "listOfUtils": [
                              "enum-utils"
                            ]
                          }
                        }
                      },
                      {
                        "key": "material-picker",
                        "value": "material-picker"
                      },
                      {
                        "key": "upload",
                        "value": "upload"
                      },
                      {
                        "key": "rich-text-editor",
                        "value": "rich-text-editor"
                      },
                      {
                        "key": "material-input",
                        "value": "material-input",
                        "disabled": true,
                        "onData": {
                          "equals": "material-input",
                          "adds": {
                            "listOfUtils": [
                              "enum-utils",
                              "parse-values"
                            ]
                          }
                        }
                      },
                      {
                        "key": "empty-div",
                        "value": "empty-div",
                        "disabled": true
                      },
                      {
                        "key": "ratings",
                        "value": "ratings"
                      }
                    ]
                  }
                },
                "listOfInterceptors": {
                  "type": "array",
                  "title": "A list of Interceptors",
                  "items": {
                    "type": "string",
                    "enum": [
                      {
                        "key": "translate-ratings",
                        "value": "translate-ratings"
                      },
                      {
                        "key": "translate-currency",
                        "value": "translate-currency",
                        "disabled": true
                      },
                      {
                        "key": "translate-range-date",
                        "value": "translate-range-date"
                      }
                    ]
                  }
                },
                "listOfUtils": {
                  "type": "array",
                  "title": "A list of components Utils",
                  "items": {
                    "type": "string",
                    "enum": [
                      {
                        "key": "enum-utils",
                        "value": "enum-utils",
                        "disabled": true
                      },
                      {
                        "key": "parse-values",
                        "value": "parse-values",
                        "disabled": true
                      }
                    ]
                  }
                }
              },
              "required": [
                "selectTheme",
                "listOfComponents"
              ]
            }
          ]
        }
      }
    }
  }
}

export default TabsSchema
