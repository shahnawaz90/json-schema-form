import React, { useEffect, useState } from 'react';
import Form from '@rjsf/material-ui';
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui';
import {
  Stepper,
  Step,
  StepLabel
} from '@material-ui/core';
import BasicSchema from './schemas/BasicSchema';
import TrainDataSchema from './schemas/TrainDataSchema';
import uiSchema from './schemas/uiSchema';
import xhrSchema from './schemas/xhrSchema';

const steps = ['Basic', 'Train Data']

const StepForm = () => {
  const [previousDisable, setPreviousDisable] = useState(true);
  const [nextText, setNextText] = useState('Next');
  const [currentTab, setCurrentTab] = useState(0);
  const [currentSchema, setCurrentSchema] = useState(BasicSchema);
  const isLastStep = currentTab === steps.length - 1;
  const isFirstStep = currentTab === 0;

  const setActiveTab = () => {
    setCurrentTab(currentTab + 1);
  }

  useEffect(() => {

  },[currentSchema]);

  useEffect(() => {
    if (isLastStep) {
      setNextText('Submit');
      setCurrentSchema(TrainDataSchema);
    }
    if(isFirstStep) {
      setPreviousDisable(true);
    }
  }, [currentTab]);

  const est = {
    "title": "A single-field form",
    "type": "string"
  }

  return (
    <div>
      <Stepper activeStep={currentTab}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Form schema={BasicSchema} xhrSchema={xhrSchema} />
    </div>
  )
}
export default StepForm
