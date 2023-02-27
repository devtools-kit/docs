import React, { useState } from 'react';
import { alpha, createStyles, withStyles } from '@material-ui/core/styles';
import { Button, InputBase, MenuItem, Select } from '@material-ui/core';
import styled from 'styled-components';
import ReconTable from './ReconTable';

const Label = styled.label`
  margin-right: 10px;
`;

const FieldsContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 400px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-flow: row;
  & > * {
    display: flex;
    flex: 1;
    justify-content: right;
    align-items: center;
  }
  margin-bottom: 10px;
`;

const TextField = withStyles((theme) =>
  createStyles({
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  })
)(InputBase);

const SubmitBtn = withStyles(() => ({
  root: {
    background: 'green',
    color: 'white',
  },
}))(Button);

const ActionsContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 10px 0px;
  & > :last-child {
    position: absolute;
    right: 10px;
  }
  & > :first-child {
    position: absolute;
    left: 10px;
  }
`;

const PanelTypes = {
  PARTY_ID: 'Party ID',
  SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH:
    'Social Security Number and Date of Birth',
  CONSUMER_ID: 'Consumer ID',
  FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID:
    'First Name, Last Name, Date of Birth and Contract ID',
  CONTRACT_ID_AND_PERSON_NUMBER: 'Contract ID and Person Number',
  FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH:
    'First Name, Last Name, Group Number and Date of Birth (Only for BA Search)',
};

const defaultFormValue = {
  partyId: '',
  ssn: '',
  dob: '',
  consumerId: '',
  firstName: '',
  lastName: '',
  contractId: '',
  personNumber: '',
  groupNumber: '',
  workEmail: '',
  workPhone: '',
};

export default function SearchOptions() {
  const [formValue, setFormValue] = useState({ ...defaultFormValue });
  const [value, setValue] = React.useState(PanelTypes.PARTY_ID);
  const [showTable, setShowTable] = useState(false);

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const reset = () => {
    setFormValue({ ...defaultFormValue });
    setShowTable(false);
  };

  const submit = () => {
    console.log(formValue);
    setShowTable(true);
  };

  return (
    <div style={{ padding: '10px 10px' }}>
      <div>
        <FieldsContainer>
          <FieldContainer>
            <Label>Category:</Label>
            <Select value={value} onChange={handleChange} displayEmpty>
              <MenuItem value="" disabled>
                Placeholder
              </MenuItem>
              <MenuItem value={PanelTypes.PARTY_ID}>
                {PanelTypes.PARTY_ID}
              </MenuItem>
              <MenuItem
                value={PanelTypes.SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH}
              >
                {PanelTypes.SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH}
              </MenuItem>
              <MenuItem value={PanelTypes.CONSUMER_ID}>
                {PanelTypes.CONSUMER_ID}
              </MenuItem>
              <MenuItem
                value={
                  PanelTypes.FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID
                }
              >
                {PanelTypes.FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID}
              </MenuItem>
              <MenuItem value={PanelTypes.CONTRACT_ID_AND_PERSON_NUMBER}>
                {PanelTypes.CONTRACT_ID_AND_PERSON_NUMBER}
              </MenuItem>
              <MenuItem
                value={
                  PanelTypes.FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH
                }
              >
                {PanelTypes.FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH}
              </MenuItem>
            </Select>
          </FieldContainer>
        </FieldsContainer>
        {value === PanelTypes.PARTY_ID && (
          <SearchForm
            type={PanelTypes.PARTY_ID}
            formValue={formValue}
            setFormValue={setFormValue}
          />
        )}
        {value === PanelTypes.SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH && (
          <SearchForm
            type={PanelTypes.SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH}
            formValue={formValue}
            setFormValue={setFormValue}
          />
        )}
        {value === PanelTypes.CONSUMER_ID && (
          <SearchForm
            type={PanelTypes.CONSUMER_ID}
            formValue={formValue}
            setFormValue={setFormValue}
          />
        )}
        {value ===
          PanelTypes.FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID && (
          <SearchForm
            type={PanelTypes.FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID}
            formValue={formValue}
            setFormValue={setFormValue}
          />
        )}
        {value === PanelTypes.CONTRACT_ID_AND_PERSON_NUMBER && (
          <SearchForm
            type={PanelTypes.CONTRACT_ID_AND_PERSON_NUMBER}
            formValue={formValue}
            setFormValue={setFormValue}
          />
        )}
        {value ===
          PanelTypes.FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH && (
          <SearchForm
            type={
              PanelTypes.FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH
            }
            formValue={formValue}
            setFormValue={setFormValue}
          />
        )}
      </div>
      <ActionsContainer>
        <Button variant="contained" onClick={(e) => reset()}>
          Reset
        </Button>
        <SubmitBtn variant="contained" onClick={(e) => submit()}>
          Submit
        </SubmitBtn>
      </ActionsContainer>
      {showTable && (
        <div style={{'marginTop': '100px'}}>
            <ReconTable />
        </div>
      )}
    </div>
  );
}

export function SearchForm({ type, formValue, setFormValue }) {
  return (
    <div>
      {type === PanelTypes.PARTY_ID && (
        <FieldsContainer>
          <FieldContainer>
            <Label>Party ID:</Label>
            <TextField
              value={formValue.partyId}
              onChange={(e) => {
                setFormValue({ ...formValue, partyId: e.target.value });
              }}
            />
          </FieldContainer>
        </FieldsContainer>
      )}
      {type === PanelTypes.SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH && (
        <FieldsContainer>
          <FieldContainer>
            <Label>Social Securiy Number:</Label>
            <TextField
              value={formValue.ssn}
              onChange={(e) => {
                setFormValue({ ...formValue, ssn: e.target.value });
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Date of Birth:</Label>
            <TextField
              value={formValue.dob}
              onChange={(e) => {
                setFormValue({ ...formValue, dob: e.target.value });
              }}
            />
          </FieldContainer>
        </FieldsContainer>
      )}
      {type === PanelTypes.CONSUMER_ID && (
        <FieldsContainer>
          <FieldContainer>
            <Label>Consumer ID:</Label>
            <TextField
              value={formValue.consumerId}
              onChange={(e) => {
                setFormValue({ ...formValue, consumerId: e.target.value });
              }}
            />
          </FieldContainer>
        </FieldsContainer>
      )}
      {type ===
        PanelTypes.FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID && (
        <FieldsContainer>
          <FieldContainer>
            <Label>First Name:</Label>
            <TextField
              value={formValue.firstName}
              onChange={(e) => {
                setFormValue({ ...formValue, firstName: e.target.value });
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Last Name:</Label>
            <TextField
              value={formValue.lastName}
              onChange={(e) => {
                setFormValue({ ...formValue, lastName: e.target.value });
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Date of Birth:</Label>
            <TextField
              value={formValue.dob}
              onChange={(e) => {
                setFormValue({ ...formValue, dob: e.target.value });
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Contract ID:</Label>
            <TextField
              value={formValue.contractId}
              onChange={(e) => {
                setFormValue({ ...formValue, contractId: e.target.value });
              }}
            />
          </FieldContainer>
        </FieldsContainer>
      )}
      {type === PanelTypes.CONTRACT_ID_AND_PERSON_NUMBER && (
        <FieldsContainer>
          <FieldContainer>
            <Label>Contract ID:</Label>
            <TextField
              value={formValue.contractId}
              onChange={(e) => {
                setFormValue({ ...formValue, contractId: e.target.value });
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Person Number:</Label>
            <TextField
              value={formValue.personNumber}
              onChange={(e) => {
                setFormValue({ ...formValue, personNumber: e.target.value });
              }}
            />
          </FieldContainer>
        </FieldsContainer>
      )}
      {type ===
        PanelTypes.FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH && (
        <FieldsContainer>
          <FieldContainer>
            <Label>First Name:</Label>
            <TextField
              value={formValue.firstName}
              onChange={(e) => {
                setFormValue({ ...formValue, firstName: e.target.value });
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Last Name:</Label>
            <TextField
              value={formValue.lastName}
              onChange={(e) => {
                setFormValue({ ...formValue, lastName: e.target.value });
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Date of Birth:</Label>
            <TextField
              value={formValue.dob}
              onChange={(e) => {
                setFormValue({ ...formValue, dob: e.target.value });
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Group Number:</Label>
            <TextField
              value={formValue.groupNumber}
              onChange={(e) => {
                setFormValue({ ...formValue, groupNumber: e.target.value });
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Work Email:</Label>
            <TextField
              value={formValue.workEmail}
              onChange={(e) => {
                setFormValue({ ...formValue, workEmail: e.target.value });
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>Work Phone:</Label>
            <TextField
              value={formValue.workPhone}
              onChange={(e) => {
                setFormValue({ ...formValue, workPhone: e.target.value });
              }}
            />
          </FieldContainer>
        </FieldsContainer>
      )}
    </div>
  );
}
