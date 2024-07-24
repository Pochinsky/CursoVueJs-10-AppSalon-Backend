import { createTransport } from "../config/nodemailer.js";

export const sendEmailVerification = async ({ name, email, token }) => {
  const transporter = createTransport(
    process.env.EMAIL_HOST,
    process.env.EMAIL_PORT,
    process.env.EMAIL_USER,
    process.env.EMAIL_PASS
  );
  // send email
  const info = await transporter.sendMail({
    from: "AppSalon <cuentas@appsalon.com>",
    to: email,
    subject: "AppSalon - Confirma tu cuenta",
    text: "AppSalon - Confirma tu cuenta",
    html: `<p>¡Hola ${name}!</p>
	<p>Tu cuenta está casi lista, solo debes confirmarla en el siguiente enlace</p>
	<a href="${process.env.FRONTEND_URL}/auth/confirmar-cuenta/${token}">Confirmar Cuenta</a>
	<p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
	`,
  });
};