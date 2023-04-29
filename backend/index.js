const express = require("express");
const app = express();
const oracledb = require("oracledb");
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.autoCommit = true;
const cors = require("cors");

app.use(cors());

app.get("/customer", (req, res) => {
  async  function fetchData() {
    try {
      const connection = await oracledb.getConnection({
        user: "system",
        password: "Vkapoor#786",
        servicename: "orcl",
      });
      const result = await connection.execute(`SELECT * FROM STUDENT where STU_ID=911`);
      return result.rows;
    } catch (err) {
      return err;
    }
  }
  fetchData()
    .then((dbRes) => {
      res.send(dbRes);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.get("/books", (req, res) => {
  async  function fetchData() {
    try {
      const connection = await oracledb.getConnection({
        user: "system",
        password: "Vkapoor#786",
        servicename: "orcl",
      });
      const result = await connection.execute(`select * from issues inner join books on issues.ISU_BOOK_ID = books.BOOK_ID where issues.ISU_STU_ID=911`);
      console.log(result);
      return result.rows;
    } catch (err) {
      return err;
    }
  }
  fetchData()
    .then((dbRes) => {
      res.send(dbRes);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/course", (req, res) => {
  async  function fetchData() {
    try {
      const connection = await oracledb.getConnection({
        user: "system",
        password: "Vkapoor#786",
        servicename: "orcl",
      });
      const result = await connection.execute(`SELECT STUDENT_COURSES.STU_ID,COURSES.CR_NAME,COURSES.CR_BRN_ID,COURSES.CR_CODE FROM STUDENT_COURSES NATURAL JOIN COURSES WHERE STUDENT_COURSES.STU_ID=911`);
      console.log(result);
      return result.rows;
    } catch (err) {
      return err;
    }
  }
  fetchData()
    .then((dbRes) => {
      res.send(dbRes);
    })
    .catch((err) => {
      res.send(err);
    });
});


app.listen(5000, () => {
  console.log("listen to port");
});
