import React, { Dispatch, SetStateAction, useState } from 'react';
import { alpha, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Button, InputBase } from '@material-ui/core';
import styled from 'styled-components';

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

const TextField = withStyles((theme: Theme) =>
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
            // Use the system font instead of the default Roboto font.
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
    }),
)(InputBase);

const Accordion = styled(withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion))`
    & > .MuiAccordionSummary-root {
        border: ${props => props.expanded ? '2px solid #ffc107' : 'inherit'};
    }
`;

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        '& > .MuiInputBase-formControl': {
            borderRadius: '0px'
        }
    },
}))(MuiAccordionDetails);

const SubmitBtn = withStyles((theme) => ({
    root: {
        background: 'green',
        color: 'white'
    }
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
    SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH: 'Social Security Number and Date of Birth',
    CONSUMER_ID: 'Consumer ID',
    FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID: 'First Name, Last Name, Date of Birth and Contract ID',
    CONTRACT_ID_AND_PERSON_NUMBER: 'Contract ID and Person Number',
    FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH: 'First Name, Last Name, Group Number and Date of Birth (Only for BA Search)'
};

type FormData = {
    partyId?: string;
    ssn?: string;
    dob?: string;
    consumerId?: string;
    firstName?: string;
    lastName?: string;
    contractId?: string;
    personNumber?: string;
    groupNumber?: string;
    workEmail?: string;
    workPhone?: string;
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
    workPhone: ''
};

export default function SearchOptions() {
    const [expandedPanel, setExpandedPanel] = React.useState(PanelTypes.PARTY_ID);

    const [formValue, setFormValue] = useState<FormData>({ ...defaultFormValue });

    const reset = () => {
        setFormValue({ ...defaultFormValue });
    };

    const submit = () => {
        console.log(formValue);
    };

    return (
        <div>
            <Accordion
                square
                expanded={expandedPanel === PanelTypes.PARTY_ID}
                onChange={() => {
                    setExpandedPanel(PanelTypes.PARTY_ID)
                }}
            >
                <AccordionSummary>
                    <Typography>{PanelTypes.PARTY_ID}</Typography>
                    {
                        (
                            expandedPanel === PanelTypes.PARTY_ID
                        )  ? (
                            <RemoveCircleIcon style={{position: 'absolute', right: '5px'}} />
                        ) : (
                            <AddCircleIcon style={{position: 'absolute', right: '5px'}} />
                        )
                    }
                </AccordionSummary>
                <AccordionDetails>
                    <SearchForm
                        type={PanelTypes.PARTY_ID}
                        formValue={formValue}
                        setFormValue={setFormValue}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                square
                expanded={expandedPanel === PanelTypes.SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH}
                onChange={() => {
                    setExpandedPanel(PanelTypes.SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH);
                }}
            >
                <AccordionSummary>
                    <Typography>{PanelTypes.SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH}</Typography>
                    {
                        (
                            expandedPanel === PanelTypes.SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH
                        ) ? (
                            <RemoveCircleIcon style={{ position: 'absolute', right: '5px' }} />
                        ) : (
                            <AddCircleIcon style={{ position: 'absolute', right: '5px' }} />
                        )
                    }
                </AccordionSummary>
                <AccordionDetails>
                    <SearchForm
                        type={PanelTypes.SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH}
                        formValue={formValue}
                        setFormValue={setFormValue}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                square
                expanded={expandedPanel === PanelTypes.CONSUMER_ID}
                onChange={() => {
                    setExpandedPanel(PanelTypes.CONSUMER_ID);
                }}
            >
                <AccordionSummary>
                    <Typography>{PanelTypes.CONSUMER_ID}</Typography>
                    {
                        (
                            expandedPanel === PanelTypes.CONSUMER_ID
                        ) ? (
                            <RemoveCircleIcon style={{ position: 'absolute', right: '5px' }} />
                        ) : (
                            <AddCircleIcon style={{ position: 'absolute', right: '5px' }} />
                        )
                    }
                </AccordionSummary>
                <AccordionDetails>
                    <SearchForm
                        type={PanelTypes.CONSUMER_ID}
                        formValue={formValue}
                        setFormValue={setFormValue}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                square
                expanded={expandedPanel === PanelTypes.FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID}
                onChange={() => {
                    setExpandedPanel(PanelTypes.FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID);
                }}
            >
                <AccordionSummary>
                    <Typography>{PanelTypes.FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID}</Typography>
                    {
                        (
                            expandedPanel === PanelTypes.FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID
                        ) ? (
                            <RemoveCircleIcon style={{ position: 'absolute', right: '5px' }} />
                        ) : (
                            <AddCircleIcon style={{ position: 'absolute', right: '5px' }} />
                        )
                    }
                </AccordionSummary>
                <AccordionDetails>
                    <SearchForm
                        type={PanelTypes.FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID}
                        formValue={formValue}
                        setFormValue={setFormValue}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                square
                expanded={expandedPanel === PanelTypes.CONTRACT_ID_AND_PERSON_NUMBER}
                onChange={() => {
                    setExpandedPanel(PanelTypes.CONTRACT_ID_AND_PERSON_NUMBER);
                }}
            >
                <AccordionSummary>
                    <Typography>{PanelTypes.CONTRACT_ID_AND_PERSON_NUMBER}</Typography>
                    {
                        (
                            expandedPanel === PanelTypes.CONTRACT_ID_AND_PERSON_NUMBER
                        ) ? (
                            <RemoveCircleIcon style={{ position: 'absolute', right: '5px' }} />
                        ) : (
                            <AddCircleIcon style={{ position: 'absolute', right: '5px' }} />
                        )
                    }
                </AccordionSummary>
                <AccordionDetails>
                    <SearchForm
                        type={PanelTypes.CONTRACT_ID_AND_PERSON_NUMBER}
                        formValue={formValue}
                        setFormValue={setFormValue}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                square
                expanded={expandedPanel === PanelTypes.FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH}
                onChange={() => {
                    setExpandedPanel(PanelTypes.FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH);
                }}
            >
                <AccordionSummary>
                    <Typography>{PanelTypes.FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH}</Typography>
                    {
                        (
                            expandedPanel === PanelTypes.FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH
                        ) ? (
                            <RemoveCircleIcon style={{ position: 'absolute', right: '5px' }} />
                        ) : (
                            <AddCircleIcon style={{ position: 'absolute', right: '5px' }} />
                        )
                    }
                </AccordionSummary>
                <AccordionDetails>
                    <SearchForm
                        type={PanelTypes.FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH}
                        formValue={formValue}
                        setFormValue={setFormValue}
                    />
                </AccordionDetails>
            </Accordion>
            <ActionsContainer>
                <Button variant="contained" onClick={e => reset()}>Reset</Button>
                <SubmitBtn variant="contained" onClick={e => submit()}>Submit</SubmitBtn>
            </ActionsContainer>
        </div>
    );
}

type SearchFormProps = {
    type: string;
    formValue: FormData;
    setFormValue: Dispatch<SetStateAction<FormData>>;
};

export function SearchForm({
    type,
    formValue,
    setFormValue
}: SearchFormProps) {

    return (
        <div>
            {
                type === PanelTypes.PARTY_ID && (
                    <FieldContainer>
                        <Label>Party ID:</Label>
                        <TextField
                            value={formValue.partyId}
                            onChange={e => {
                                setFormValue({ ...formValue, partyId: e.target.value });
                            }}
                        />
                    </FieldContainer>
                )
            }
            {
                type === PanelTypes.SOCIAL_SECURITY_NUMBER_AND_DATE_OF_BIRTH && (
                    <FieldsContainer>
                        <FieldContainer>
                            <Label>Social Securiy Number:</Label>
                            <TextField
                                value={formValue.ssn}
                                onChange={e => {
                                    setFormValue({ ...formValue, ssn: e.target.value });
                                }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>Date of Birth:</Label>
                            <TextField
                                value={formValue.dob}
                                onChange={e => {
                                    setFormValue({ ...formValue, dob: e.target.value });
                                }}
                            />
                        </FieldContainer>
                    </FieldsContainer>
                )
            }
            {
                type === PanelTypes.CONSUMER_ID && (
                    <FieldContainer>
                        <Label>Consumer ID:</Label>
                        <TextField
                            value={formValue.consumerId}
                            onChange={e => {
                                setFormValue({ ...formValue, consumerId: e.target.value });
                            }}
                        />
                    </FieldContainer>
                )
            }
            {
                type === PanelTypes.FIRST_NAME_LAST_NAME_DATE_OF_BIRTH_AND_CONTRACT_ID && (
                    <FieldsContainer>
                        <FieldContainer>
                            <Label>First Name:</Label>
                            <TextField
                                value={formValue.firstName}
                                onChange={e => {
                                    setFormValue({ ...formValue, firstName: e.target.value });
                                }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>Last Name:</Label>
                            <TextField
                                value={formValue.lastName}
                                onChange={e => {
                                    setFormValue({ ...formValue, lastName: e.target.value });
                                }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>Date of Birth:</Label>
                            <TextField
                                value={formValue.dob}
                                onChange={e => {
                                    setFormValue({ ...formValue, dob: e.target.value });
                                }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>Contract ID:</Label>
                            <TextField
                                value={formValue.contractId}
                                onChange={e => {
                                    setFormValue({ ...formValue, contractId: e.target.value });
                                }}
                            />
                        </FieldContainer>
                    </FieldsContainer>
                )
            }
            {
                type === PanelTypes.CONTRACT_ID_AND_PERSON_NUMBER && (
                    <FieldsContainer>
                        <FieldContainer>
                            <Label>Contract ID:</Label>
                            <TextField
                                value={formValue.contractId}
                                onChange={e => {
                                    setFormValue({ ...formValue, contractId: e.target.value });
                                }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>Person Number:</Label>
                            <TextField
                                value={formValue.personNumber}
                                onChange={e => {
                                    setFormValue({ ...formValue, personNumber: e.target.value });
                                }}
                            />
                        </FieldContainer>
                    </FieldsContainer>
                )
            }
            {
                type === PanelTypes.FIRST_NAME_LAST_NAME_GROUP_NUMBER_AND_DATE_OF_BIRTH && (
                    <FieldsContainer>
                        <FieldContainer>
                            <Label>First Name:</Label>
                            <TextField
                                value={formValue.firstName}
                                onChange={e => {
                                    setFormValue({ ...formValue, firstName: e.target.value });
                                }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>Last Name:</Label>
                            <TextField
                                value={formValue.lastName}
                                onChange={e => {
                                    setFormValue({ ...formValue, lastName: e.target.value });
                                }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>Date of Birth:</Label>
                            <TextField
                                value={formValue.dob}
                                onChange={e => {
                                    setFormValue({ ...formValue, dob: e.target.value });
                                }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>Group Number:</Label>
                            <TextField
                                value={formValue.groupNumber}
                                onChange={e => {
                                    setFormValue({ ...formValue, groupNumber: e.target.value });
                                }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>Work Email:</Label>
                            <TextField
                                value={formValue.workEmail}
                                onChange={e => {
                                    setFormValue({ ...formValue, workEmail: e.target.value });
                                }}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <Label>Work Phone:</Label>
                            <TextField
                                value={formValue.workPhone}
                                onChange={e => {
                                    setFormValue({ ...formValue, workPhone: e.target.value });
                                }}
                            />
                        </FieldContainer>
                    </FieldsContainer>
                )
            }
        </div>
    )
}
