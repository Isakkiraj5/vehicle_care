const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const app = express();

app.use(cors());
app.use(express.json());

const url = 'mongodb+srv://isakkiraj:Esscooty%407300@cluster0.fdsuknk.mongodb.net/vehiclecare';
const usermodel = require('./model/user');
const serviceAppointment = require('./model/appointment');
const vehicle = require('./model/vehicle');
const port = 3000;

mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    usermodel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    console.log('Login successful for:', user.email);
                    res.json({ success: true, userId: user._id });
                } else {
                    console.log('Password is Incorrect for:', user.email);
                    res.json({ success: false, message: "Password is Incorrect" });
                }
            } else {
                console.log('No user exists with email:', email);
                res.json({ success: false, message: "No user exists" });
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        });
});

app.post('/api/register', (req, res) => {
    usermodel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.post('/api/vehicle', (req, res) => {
    vehicle.create(req.body)
        .then(vehicle => res.json(vehicle))
        .catch(err => res.json(err));
});

app.post('/api/appointment', (req, res) => {
    serviceAppointment.create(req.body)
        .then(appointment => res.json(appointment))
        .catch(err => res.json(err));
});

app.get('/api/user/:id', async (req, res) => {
    const { id: userId } = req.params;
    console.log("userId:", userId);

    try {
        const userDetail = await usermodel.findById(userId);
        console.log("userDetail", userDetail);
        res.json({ userDetail });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

app.get('/api/vehicle/:id', async (req, res) => {
    const { id: userId } = req.params;
    console.log("id", userId);
    try {
        const userDetail = await vehicle.find({ user_Id: userId });
        console.log("userDetail", userDetail);
        res.json({ userDetail });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

app.get('/api/appointments/:id', async (req, res) => {
    const { id: userId } = req.params;
    try {
        const serviceDetail = await serviceAppointment.find({ user_Id: userId });
        console.log("serviceDetail", serviceDetail);
        res.json({ serviceDetail });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});


app.get('/api/appointments/expenses/:id', async (req, res) => {
  const { id: userId } = req.params;
  try {
      const appointments = await serviceAppointment.find({ user_Id: userId });
      const expenses = {};

      // Aggregate expenses for each vehicle
      appointments.forEach(appointment => {
          const vehicleNumber = appointment.vehicle;
          const total = appointment.total;
          expenses[vehicleNumber] = (expenses[vehicleNumber] || 0) + total;
      });

      console.log("Expenses:", expenses);
      res.json({ expenses });
  } catch (error) {
      console.error('Error fetching appointments:', error);
      res.status(500).json({ message: 'Internal Server Error', error });
  }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vehiclecare77@gmail.com', // Your email address
        pass: 'sgmw mjku fzks orwu'  // Your email password
    }
});

async function sendReminderEmail(email, serviceDate) {
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Service Appointment Reminder',
        text: `This is a reminder that you have previously received service on ${serviceDate}, which was one month ago.`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Reminder email sent to ' + email);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
}

async function checkAppointments() {
    try {
        let today = new Date(); // Get current date
        let thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000); // Subtract 30 days (in milliseconds)
        console.log("30 days before",thirtyDaysAgo)
        const targetDate = today.toISOString().split('T')[0];

        console.log('Checking appointments for date:', targetDate);

        const appointments = await serviceAppointment.find({
            date: targetDate
        }).populate('user_Id');

        console.log('Appointments found:', appointments);

        for (const appointment of appointments) {
            if (appointment.user_Id && appointment.user_Id.email) {
                console.log('Sending reminder email to:', appointment.user_Id.email);
                await sendReminderEmail(appointment.user_Id.email, targetDate);
            }
        }
    } catch (error) {
        console.error('Error checking appointments:', error);
    }
}

cron.schedule('0 0 * * *', () => {
    console.log('Running cron job...');
    checkAppointments().catch(console.error);
});

async function sendTestEmailNow() {
    const testEmail = 'rajisakki7@gmail.com';
    const testDate = new Date().toISOString().split('T')[0];
    //await sendReminderEmail(testEmail, testDate);
}

// let transporter = nodemailer.createTransport({
//     service: 'gmail', // Use your email service, e.g., 'gmail'
//     auth: {
//         user: 'vehiclecare77@gmail.com', // Your email address
//         pass: 'sgmw mjku fzks orwu'  // Your email password
//     }
// });


// let mailOptions = {
//     from: '"Your Name" vehiclecare77@gmail.com', // Sender address
//     to: 'rajisakki7@gmail.com', // List of receivers
//     subject: 'Email Testing', // Subject line
//     text: 'Email send', // Plain text body
//     html: '<b>Email Testing</b>' // HTML body
// };

// Send mail with defined transport object




app.listen(port, "localhost", async () => {
    console.log(`Server started on http://localhost:${port}`);
  
   //checkAppointments()
    // checkAppointments().catch(console.error);
});
