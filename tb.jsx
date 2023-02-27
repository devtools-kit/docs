import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: document.body.clientWidth
  },
  sticky: {
    position: "sticky",
    left: 0,
    background: "white",
    boxShadow: "5px 2px 5px grey",
    borderRight: "2px solid black"
  }
});

const data = [
  [
    "SSN",
    "21124144",
    "23234234",
    "43534534534",
    "21124144",
    "23234234",
    "43534534534"
  ],
  [
    "Update TS",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46"
  ],
  [
    "DOB",
    "10/13/1992",
    "10/13/1992",
    "10/13/1992",
    "10/13/1992",
    "10/13/1992",
    "10/13/1992"
  ],
  [
    "Update TS",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46"
  ],
  [
    "System ID",
    "342343242342342",
    "asdfsadfafds",
    "14123124125",
    "342343242342342",
    "asdfsadfafds",
    "14123124125"
  ],
  [
    "Update TS",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46"
  ],
  ["First Name", "KAREN", "JOE", "JHON", "KAREN", "JOE", "JHON"],
  [
    "Update TS",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46"
  ],
  ["Last Name", "KING MC", "MC LEE", "DOE", "KING MC", "MC LEE", "DOE"],
  [
    "Update TS",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46"
  ],
  ["Gender", "F", "F", "M", "F", "F", "M"],
  [
    "Update TS",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46"
  ],
  ["Home E-mail", "KAREN@MSN.COM", "", "", "KAREN@MSN.COM", "", ""],
  ["Update TS", "02/02/2021 00:55:46", "", "", "02/02/2021 00:55:46", "", ""],
  ["Home E-mail Verification Indicator", "", "", "", "", "", ""],
  ["Work E-mail", "", "", "", "", "", ""],
  ["Update TS", "02/02/2021 00:55:46", "", "", "02/02/2021 00:55:46", "", ""],
  ["Work E-mail Verification Indicator", "", "", "", "", "", ""],
  ["Home Phone", "(1)3454534324", "", ""],
  [
    "Home Phone TS",
    "02/02/2021 00:55:46",
    "",
    "",
    "02/02/2021 00:55:46",
    "",
    ""
  ],
  ["Cell Phone", "(1)3454534324", "", "", "(1)3454534324", "", ""],
  [
    "Cell Phone TS",
    "02/02/2021 00:55:46",
    "",
    "",
    "02/02/2021 00:55:46",
    "",
    ""
  ],
  ["PHI Address Flag", "N", "", "", "N", "", ""],
  [
    "Registration Timestamp",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46",
    "02/02/2021 00:55:46"
  ],
  [
    "Consumer ID",
    "7234623634",
    "897987832432",
    "43534534534",
    "7234623634",
    "897987832432",
    "43534534534"
  ],
  ["Party ID", "", "23234234", "43534534534", "", "23234234", "43534534534"]
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <>
      <TableContainer
        style={{
          maxWidth: document.body.clientWidth - 100,
          border: "1px solid black"
        }}
      >
        <Table
          className={classes.table}
          aria-label="simple table"
          style={{ tableLayout: "fixed" }}
        >
          <TableBody>
            {data.map((item) => (
              <TableRow key={item[0]}>
                {item.map((entry, i) => {
                  if (i === 0) {
                    return (
                      <TableCell
                        className={classes.sticky}
                        component="th"
                        scope="row"
                        key={entry}
                      >
                        {entry}
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell key={entry} align="right">
                        {entry}
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
