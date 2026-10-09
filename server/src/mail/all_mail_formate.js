import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
}); 


export const user_otp_verification = async (name, email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Nexora - OTP Verification",
            text: `Hello ${name}, your Nexora verification OTP is ${otp}.`,
            html: `
                <div style="background:#f3f4f6;padding:30px;font-family:Arial,sans-serif;">
                    <div style="max-width:550px;margin:auto;background:#ffffff;
                        padding:30px;border-radius:12px;border:1px solid #d1d5db;">

                        <h1 style="text-align:center;color:#15803d;">
                            Nexora
                        </h1>

                        <h2 style="color:#111827;">
                            Verify Your Account
                        </h2>

                        <p style="color:#4b5563;">
                            Hello <b>${name}</b>,
                        </p>

                        <p style="color:#4b5563;">
                            Use the OTP below to verify your Nexora account.
                        </p>

                        <div style="
                            background:#f3f4f6;
                            border:2px solid #15803d;
                            padding:18px;
                            text-align:center;
                            border-radius:8px;
                            margin:25px 0;
                        ">
                            <span style="
                                color:#111827;
                                font-size:30px;
                                font-weight:bold;
                                letter-spacing:8px;
                            ">
                                ${otp}
                            </span>
                        </div>

                        <p style="color:#6b7280;">
                            Do not share this OTP with anyone.
                        </p>

                        <hr style="border:0;border-top:1px solid #d1d5db;">

                        <p style="text-align:center;color:#6b7280;font-size:13px;">
                            © Nexora
                        </p>
                    </div>
                </div>
            `
        });

        console.log("Message sent:", info.messageId);

    } catch (err) {
        console.log(err.message);
    }
};


export const admin_login_otp_verification = async (name, email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Nexora - Admin Login Verification",
            text: `Hello ${name}, your admin login OTP is ${otp}.`,
            html: `
                <div style="background:#f3f4f6;padding:30px;font-family:Arial,sans-serif;">
                    <div style="max-width:550px;margin:auto;background:#ffffff;
                        padding:30px;border-radius:12px;border:1px solid #d1d5db;">

                        <h1 style="text-align:center;color:#15803d;">
                            Nexora
                        </h1>

                        <h2 style="color:#111827;">
                            Admin Login Verification
                        </h2>

                        <p style="color:#4b5563;">
                            Hello <b>${name}</b>,
                        </p>

                        <p style="color:#4b5563;">
                            Use the OTP below to complete your admin login.
                        </p>

                        <div style="
                            background:#111827;
                            color:#ffffff;
                            padding:18px;
                            text-align:center;
                            border-radius:8px;
                            margin:25px 0;
                        ">
                            <span style="
                                font-size:30px;
                                font-weight:bold;
                                letter-spacing:8px;
                            ">
                                ${otp}
                            </span>
                        </div>

                        <p style="color:#6b7280;">
                            If you did not request this login, please secure
                            your account.
                        </p>

                        <hr style="border:0;border-top:1px solid #d1d5db;">

                        <p style="text-align:center;color:#6b7280;font-size:13px;">
                            © Nexora
                        </p>
                    </div>
                </div>
            `
        });

        console.log("Message sent:", info.messageId);

    } catch (err) {
        console.log(err.message);
    }
};


export const user_login_detect = async (name, email) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Nexora - New Login Detected",
            text: `Hello ${name}, a new login was detected on your Nexora account.`,
            html: `
                <div style="background:#f3f4f6;padding:30px;font-family:Arial,sans-serif;">
                    <div style="max-width:550px;margin:auto;background:#ffffff;
                        padding:30px;border-radius:12px;border:1px solid #d1d5db;">

                        <h1 style="text-align:center;color:#15803d;">
                            Nexora
                        </h1>

                        <h2 style="color:#111827;">
                            New Login Detected
                        </h2>

                        <p style="color:#4b5563;">
                            Hello <b>${name}</b>,
                        </p>

                        <p style="color:#4b5563;">
                            A new login was detected on your Nexora account.
                        </p>

                        <div style="
                            background:#f3f4f6;
                            border-left:4px solid #15803d;
                            padding:15px;
                            margin:20px 0;
                        ">
                            <b style="color:#111827;">
                                If this was you, no action is required.
                            </b>
                        </div>

                        <p style="color:#6b7280;">
                            If you don't recognize this activity, change your
                            password immediately.
                        </p>

                        <hr style="border:0;border-top:1px solid #d1d5db;">

                        <p style="text-align:center;color:#6b7280;font-size:13px;">
                            © Nexora
                        </p>
                    </div>
                </div>
            `
        });

        console.log("Message sent:", info.messageId);

    } catch (err) {
        console.log(err.message);
    }
};


export const user_delete_account = async (name, email, otp) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: "Nexora - Account Deletion Verification",

            text: `Hello ${name}, your account deletion OTP is ${otp}. This OTP will expire in 5 minutes.`,

            html: `
                <div style="background:#f3f4f6;padding:30px;font-family:Arial,sans-serif;">
                    <div style="max-width:550px;margin:auto;background:#ffffff;padding:30px;border-radius:12px;border:1px solid #d1d5db;">
                        
                        <h1 style="text-align:center;color:#15803d;margin:0 0 25px;">
                            Nexora
                        </h1>

                        <h2 style="color:#111827;margin-bottom:20px;">
                            Account Deletion Request
                        </h2>

                        <p style="color:#4b5563;">
                            Hello <b>${name}</b>,
                        </p>

                        <p style="color:#4b5563;">
                            We received a request to delete your Nexora account.
                        </p>

                        <div style="background:#f3f4f6;border:2px solid #111827;padding:18px;text-align:center;border-radius:8px;margin:25px 0;">
                            <span style="color:#111827;font-size:30px;font-weight:bold;letter-spacing:8px;">
                                ${otp}
                            </span>
                        </div>

                        <p style="color:#6b7280;">
                            This OTP will expire in <b>5 minutes</b>.
                        </p>

                        <p style="color:#6b7280;">
                            If you did not request this, please ignore this email.
                        </p>

                        <hr style="border:0;border-top:1px solid #d1d5db;">

                        <p style="text-align:center;color:#6b7280;font-size:13px;">
                            © Nexora
                        </p>

                    </div>
                </div>
            `
        });

        console.log("Message sent:", info.messageId);

    } catch (err) {
        console.log(err.message);
    }
}; 
