const nodemailer = require("nodemailer");
const config = require("config");

module.exports.sendMail = function sendMail(userEmail, body) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pursharth01@gmail.com",
      pass: "pARASVOHRA", // has to hidden in env variable
    },
  });

  const clientUrl = config.get("clientEndPoint");

  let mailOptions = {
    from: "pursharth01@gmail.com",
    to: userEmail,
    subject: "Testing",
    text: `
    Click on below link to reset your password http://localhost:3000/resetPassword/${body} 
    Password Reset link
    `,

    html: ` 
   <div style="float:left; width:200px; height: 100%; background-color:yellow; ">Click on below link to reset your passwords</div>
          
         <div style="float:left; width:500px; height: 100%; background-color:pink; ><a href="${clientUrl}/resetPassword/${body}" target="_blank"> 
        <button id="red"> Password Reset Link</button>
   </a></div>
      
        
    
    `,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("error Occured");
      return err;
    } else {
      console.log("Email sent", data);
      return data;
    }
  });
};
