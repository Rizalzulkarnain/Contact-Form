const transporter = require('../utils/mail');

exports.postEmail = async (req, res) => {
  try {
    const mail = {
      from: process.env.EMAIL,
      to: 'resetdariawal@gmail.com',
      subject: req.body.subject,
      text: `
      name: ${req.body.name} 
      email: ${req.body.email}
      subject: ${req.body.subject}
      message: ${req.body.message}`,
    };

    const sendEmail = await transporter.sendMail(mail);

    if (!sendEmail) {
      return res.status(404).json({
        success: false,
        error: error.message || 'your email is trouble...',
      });
    }

    res.status(200).json({
      success: true,
      data: sendEmail,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || 'server internal error',
    });
  }
};
