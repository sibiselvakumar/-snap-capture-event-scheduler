const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Console, log } = require("console");

app.use(cors());
app.use(express.json());
app.use(express.static("./images1"));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "manam",
});

const stripe = require("stripe")(
  "sk_test_51PBvuKSJXmEF31NGlEKe7FTegkxIAO6S2iOsG37zH5qGNHkWQW23p69vpAqSNKbZexgURPx114jUkQnDYGYboolV00mC9qNo5i"
);

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "manamphotography01@gmail.com",
    pass: "oyvs xhwu vmas qdir",
  },
});

// --------------date--------------------
function getdate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

//-----------------image upload------------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images1");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});
// -----------------------------------------------------

// ------------------------image delete-----------------
// fs.unlink("images1/"+result[0].image, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('File deleted successfully');
//   });
// -----------------------------------------------------

// ------------User Register------------
app.post("/UserRegister", (req, res) => {
  db.query(
    "select * from register where email= ? or phone = ?",
    [req.body.remail, req.body.rphone],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send("Alreadyexist");
      } else {
        db.query(
          "INSERT INTO register (name,phone,email,password) VALUES (?,?,?,?)",
          [
            req.body.ruser,
            req.body.rphone,
            req.body.remail,
            req.body.rpassword,
          ],
          (err, result) => {
            if (err) {
              res.send("error");
              console.log(err);
            } else {
              // ---------------------------------

              transporter
                .sendMail({
                  from: '"Manam Photography" <manamphotography01@gmail.com>',
                  to: req.body.remail,
                  subject: "Congratulations on Your Successful Registration!",
                  text: "Welcome to Manam Photography. We're excited to have you join our community of photography enthusiasts. Get ready to explore, learn, and showcase your photography skills with us! ",
                  // html: "<b>There is a new article. It's about sending emails, check it out!</b>",
                })
                .then((info) => {
                  // console.log({info});
                })
                .catch(console.error);
              // ---------------------------------

              res.send("Success");
            }
          }
        );
      }
    }
  );
});
// -------------------------------------

//-----------------------user login----------------------------------
app.post("/UserLogin", (req, res) => {
  db.query(
    "select * from register where email= ? and password = ?",
    [req.body.lemail, req.body.lpassword],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {
          res.send([
            "success",
            result[0].name,
            result[0].user_id,
            result[0].email,
          ]);
        } else {
          res.send("failed");
        }
      }
    }
  );
});
// ------------------------------------------------------------------

// ----------------------------------Update Password-----------------
//user change password
app.post("/UserPassword", (req, res) => {
  db.query(
    "select * from register where email= ?",
    [req.body.upemail],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {
          ////////////
          db.query(
            "update register set password=? where email=?",
            [req.body.uppassword, req.body.upemail],
            (err, result) => {
              if (err) {
                console.log(err);
                res.send("failed");
              } else {
                res.send("success");
              }
            }
          );
          ////////////////
        } else {
          res.send("failed");
        }
      }
    }
  );
});
// ------------------------------------------------------------------

// ------------Admin Register------------
app.post("/AdminRegister", (req, res) => {
  db.query("select * from admindetails", (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      res.send("Alreadyexist");
    } else {
      db.query(
        "INSERT INTO admindetails (name,phone,email,password) VALUES (?,?,?,?)",
        [req.body.ruser, req.body.rphone, req.body.remail, req.body.rpassword],
        (err, result) => {
          if (err) {
            res.send("error");
            console.log(err);
          } else {
            res.send("Success");
          }
        }
      );
    }
  });
});
// -------------------------------------

//-----------------------admin login----------------------------------
app.post("/AdminLogin", (req, res) => {
  db.query(
    "select * from admindetails where email= ? and password = ?",
    [req.body.lemail, req.body.lpassword],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {
          res.send("success");
        } else {
          res.send("failed");
        }
      }
    }
  );
});
// ------------------------------------------------------------------

// ----------------------------------Update Password-----------------
//user change password
app.post("/AdminPassword", (req, res) => {
  db.query(
    "select * from admindetails where email= ?",
    [req.body.upemail],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {
          ////////////
          db.query(
            "update admindetails set password=? where email=?",
            [req.body.uppassword, req.body.upemail],
            (err, result) => {
              if (err) {
                console.log(err);
                res.send("failed");
              } else {
                res.send("success");
              }
            }
          );
          ////////////////
        } else {
          res.send("failed");
        }
      }
    }
  );
});
// ------------------------------------------------------------------

//-----------------------add wedding package----------------------------------
app.post("/AddMenu", (req, res) => {
  db.query(
    "select * from wdpkg where pname= ?",
    [req.body.addmenuname],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send("Alreadyexist");
      } else {
        db.query(
          "INSERT INTO wdpkg (pname) VALUES (?)",
          [req.body.addmenuname],
          (err, result) => {
            if (err) {
              res.send("error");
              console.log(err);
            } else {
              res.send("Success");
            }
          }
        );
      }
    }
  );
});

// ----------------------view wedding package---------------------------------
app.get("/ViewMenu", (req, res) => {
  db.query("select * from wdpkg", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//-----------------------add event----------------------------------
app.post("/AddEvent", (req, res) => {
  db.query(
    "select * from eventbooking where ename= ?",
    [req.body.addeventname],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send("Alreadyexist");
      } else {
        db.query(
          "INSERT INTO eventbooking (ename) VALUES (?)",
          [req.body.addeventname],
          (err, result) => {
            if (err) {
              res.send("error");
              console.log(err);
            } else {
              res.send("Success");
            }
          }
        );
      }
    }
  );
});

// ----------------------view event---------------------------------
app.get("/ViewEvent", (req, res) => {
  db.query("select * from eventbooking", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//-----------------------add eventdetails----------------------------------
app.post("/AddEventdetails", upload.single("eimage"), (req, res) => {
  const eimage = req.file.filename;
  db.query(
    "INSERT INTO eventbookingdetails (eid,ename,planname,desc1,desc2,price,eimage) VALUES (?,?,?,?,?,?,?)",
    [
      req.body.eid,
      req.body.ename,
      req.body.epn,
      req.body.ed1,
      req.body.ed2,
      req.body.eprice,
      eimage,
    ],
    (err, result) => {
      if (err) {
        res.send("error");
        console.log(err);
      } else {
        res.send("Success");
      }
    }
  );
});

// ----------------------view eventdetails---------------------------------
app.get("/ViewEventdetails", (req, res) => {
  db.query("select * from eventbookingdetails", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//-----------------------add wdpkgdetails----------------------------------
app.post("/AddWdpkgdetails", (req, res) => {
  db.query(
    "INSERT INTO weddingpackagedetails (pid,pname,recwed,dele,price,dprice) VALUES (?,?,?,?,?,?)",
    [
      req.body.pid,
      req.body.pname,
      req.body.recwed,
      req.body.dele,
      req.body.price,
      req.body.dprice,
    ],
    (err, result) => {
      if (err) {
        res.send("error");
        console.log(err);
      } else {
        res.send("Success");
      }
    }
  );
});

// ----------------------view wdpkgdetails---------------------------------
app.get("/ViewWdpkgdetails", (req, res) => {
  db.query("select * from weddingpackagedetails", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------view eventlist by eid | eventlist.js---------------------------------
app.post("/eventDetailseventlist", (req, res) => {
  db.query(
    "select * from eventbookingdetails where eid=?",
    [req.body.eid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// ----------------------bookOrderel | eventlist.js---------------------------------
app.post("/bookOrderel", (req, res) => {
  const datep = getdate();

  return stripe.customers
    .create({
      email: req.body.token.email,
      source: req.body.token.id,
    })
    .then((customer) => {
      stripe.paymentIntents
        .create({
          amount: req.body.tp * 100,
          currency: "inr",
          customer: customer.id,
          receipt_email: req.body.token.email,
          description: `uid : ${req.body.uid}
      email : ${req.body.email}
      Name : ${req.body.name}
      Event Date : ${req.body.d1} - ${req.body.d2}`,
        })
        .then(() => {
          // ----------------------------------------------
          db.query(
            "INSERT INTO ebbill (uid,eid,edit,planname,price,fromdate,todate,tprice,datep) VALUES (?,?,?,?,?,?,?,?,?)",
            [
              req.body.uid,
              req.body.eid1,
              req.body.edit,
              req.body.planname,
              req.body.price,
              req.body.d1,
              req.body.d2,
              req.body.tp,
              datep,
            ],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                // ---------------------------------

                transporter
                  .sendMail({
                    from: '"Manam Photography" <manamphotography01@gmail.com>',
                    to: req.body.email,
                    subject: "Event Booked Successfully!",
                    text: `Hi, ${req.body.name}
          ${req.body.planname} Booked Successfully
          Event Date : ${req.body.d1} - ${req.body.d2}`,
                    // html: "<b>There is a new article. It's about sending emails, check it out!</b>",
                  })
                  .then((info) => {
                    // console.log({info});
                  })
                  .catch(console.error);
                // ---------------------------------

                res.send("success");
              }
            }
          );
          // ---------------------------------------------
        })
        .catch((err) => {
          res.send("error");
        });
    });
});

// check booked dates
app.post("/ckdt", (req, res) => {
  db.query(
    "select * from ebbill where todate>=? and fromdate<= ?",
    [req.body.d1, req.body.d2],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length === 0) {
        res.send("success");
      } else {
        res.send("error");
      }
    }
  );
});

// ----------------------event billings---------------------------------
app.post("/eventbilling12", (req, res) => {
  db.query(
    "select * from ebbill where uid=?",
    [req.body.uid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// ----------------------event billings---------------------------------
app.post("/eventbilling1212", (req, res) => {
  db.query(
    "select * from ebbill1 where uid=?",
    [req.body.uid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// ----------------------view eventlist1 by eid | eventlist1.js---------------------------------
app.post("/eventDetailseventlistone", (req, res) => {
  db.query(
    "select * from weddingpackagedetails where pid=?",
    [req.body.pid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// check booked dates
app.post("/ckdtone", (req, res) => {
  db.query(
    "select * from ebbill1 where todate>=? and fromdate<= ?",
    [req.body.d1, req.body.d2],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length === 0) {
        res.send("success");
      } else {
        res.send("error");
      }
    }
  );
});

// ----------------------bookOrderel | eventlist.js---------------------------------
app.post("/bookOrderelone", (req, res) => {
  const datep = getdate();

  return stripe.customers
    .create({
      email: req.body.token.email,
      source: req.body.token.id,
    })
    .then((customer) => {
      stripe.paymentIntents
        .create({
          amount: req.body.tp * 100,
          currency: "inr",
          customer: customer.id,
          receipt_email: req.body.token.email,
          description: `uid : ${req.body.uid}
      email : ${req.body.email}
      Name : ${req.body.name}
      Event Date : ${req.body.d1} - ${req.body.d2}`,
        })
        .then(() => {
          // ----------------------------------------------------------------------
          db.query(
            "INSERT INTO ebbill1 (uid,pid,pid12,pname,price,fromdate,todate,tprice,datep) VALUES (?,?,?,?,?,?,?,?,?)",
            [
              req.body.uid,
              req.body.pid1,
              req.body.pid12,
              req.body.pname1,
              req.body.price,
              req.body.d1,
              req.body.d2,
              req.body.tp,
              datep,
            ],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                // ---------------------------------

                transporter
                  .sendMail({
                    from: '"Manam Photography" <manamphotography01@gmail.com>',
                    to: req.body.email,
                    subject: "Event Booked Successfully!",
                    text: `Hi, ${req.body.name}
        ${req.body.pname1} Booked Successfully
        Event Date : ${req.body.d1} - ${req.body.d2}`,
                    // html: "<b>There is a new article. It's about sending emails, check it out!</b>",
                  })
                  .then((info) => {
                    // console.log({info});
                  })
                  .catch(console.error);
                // ---------------------------------
                res.send("success");
              }
            }
          );
          // --------------------------------------------------------------------
        })
        .catch((err) => {
          res.send("error");
        });
    });
});

//-----------------------add eventdetails12----------------------------------
app.post("/AddEventdetails12", upload.single("eimageu"), (req, res) => {
  const eimageu = req.file.filename;
  db.query(
    "update eventbookingdetails set planname=?,desc1=?,desc2=?,price=?,eimage=? where edit=?",
    [
      req.body.plannameu,
      req.body.ed1u,
      req.body.ed2u,
      req.body.epriceu,
      eimageu,
      req.body.editu,
    ],
    (err, result) => {
      if (err) {
        res.send("error");
        console.log(err);
      } else {
        res.send("Success");
      }
    }
  );
});

//-----------------------add wdpkgdetails12----------------------------------
app.post("/AddWdpkgdetails12", (req, res) => {
  db.query(
    "update weddingpackagedetails set recwed=?,dele=?,price=?,dprice=? where pid12=?",
    [
      req.body.recwed1,
      req.body.dele1,
      req.body.price1,
      req.body.dprice1,
      req.body.pid12,
    ],
    (err, result) => {
      if (err) {
        res.send("error");
        console.log(err);
      } else {
        res.send("Success");
      }
    }
  );
});

// ----------------------event billings admin for   event---------------------------------
app.get("/eventbilling12adall", (req, res) => {
  db.query("select * from ebbill", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------event billings admin for   event---------------------------------
app.get("/eventbilling12adnc", (req, res) => {
  db.query("select * from ebbill where status=0", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------event billings admin for   event---------------------------------
app.get("/eventbilling12adc", (req, res) => {
  db.query("select * from ebbill where status=1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------event billings admin for   event---------------------------------
app.get("/eventbilling12adall1", (req, res) => {
  db.query("select * from ebbill1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------event billings admin for   event---------------------------------
app.get("/eventbilling12adnc1", (req, res) => {
  db.query("select * from ebbill1 where status=0", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------event billings admin for   event---------------------------------
app.get("/eventbilling12adc1", (req, res) => {
  db.query("select * from ebbill1 where status=1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------event billings admin for   event---------------------------------
app.post("/eventbilling12adallup", (req, res) => {
  db.query(
    "update ebbill set status=1 where billno=?",
    [req.body.billno],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("success");
      }
    }
  );
});

// ----------------------event billings admin for   event---------------------------------
app.post("/eventbilling12adallup1", (req, res) => {
  db.query(
    "update ebbill1 set status=1 where billno=?",
    [req.body.billno],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("success");
      }
    }
  );
});

// ----------------------user details---------------------------------
app.get("/userdetailsadmin", (req, res) => {
  db.query("select * from register", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------admin gallery---------------------------------
app.post("/eventdt", (req, res) => {
  db.query("select * from gl where eid= ?", [req.body.eid1], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------user gallery---------------------------------
app.post("/eventdtuser", (req, res) => {
  db.query("select * from gl where eid= ?", [req.body.eid], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------user gallery---------------------------------
app.get("/eventdtuser1", (req, res) => {
  db.query("select * from gl", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//-----------------------admin gallery----------------------------------
app.post("/eventdt1", upload.single("eimagegl"), (req, res) => {
  const eimagegl = req.file.filename;
  db.query(
    "INSERT INTO gl (eid,ename,eimage) VALUES (?,?,?)",
    [req.body.eid, req.body.ename, eimagegl],
    (err, result) => {
      if (err) {
        res.send("error");
        console.log(err);
      } else {
        res.send("success");
      }
    }
  );
});

// ----------------------delete gallery---------------------------------
app.post("/deletegl", (req, res) => {
  db.query("delete from gl where id=?", [req.body.id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("success");
    }
  });
});

// ----------------------user details---------------------------------
app.post("/userdetails1", (req, res) => {
  db.query(
    "select * from register where user_id=?",
    [req.body.uid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// ----------------------geteventdt1212---------------------------------
app.post("/geteventdt1212", (req, res) => {
  db.query(
    "select * from ebbill where fromdate<=? and todate>=?",
    [req.body.dt, req.body.dt],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// ----------------------geteventdt1212---------------------------------
app.post("/geteventdt12121", (req, res) => {
  db.query(
    "select * from ebbill1 where fromdate<=? and todate>=?",
    [req.body.dt, req.body.dt],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// ----------------------event booked date---------------------------------
app.get("/eventbookeddate", (req, res) => {
  db.query("select * from ebbill", [req.body.uid], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------event booked date1---------------------------------
app.get("/eventbookeddate1", (req, res) => {
  db.query("select * from ebbill1", [req.body.uid], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------event booked date1---------------------------------
app.post("/sendotp", (req, res) => {
  const otp = req.body.otp1;
  const email = req.body.upemail;
  // ---------------------------------

  transporter
    .sendMail({
      from: '"Manam Photography" <manamphotography01@gmail.com>',
      to: email,
      subject: "otp for password change",
      text: `OTP : ${otp}`,
      // html: "<b>There is a new article. It's about sending emails, check it out!</b>",
    })
    .then((info) => {
      // console.log({info});
      res.send("success");
    })
    .catch(() => {
      res.send("error");
    });
  // ---------------------------------
});

app.listen(8081, () => {
  console.log("your server is running");
});
