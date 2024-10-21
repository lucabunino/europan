import { EMAIL } from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";

export const actions = {
  create: async ({ request }) => {
    try {
      const formData = await request.formData()

      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      var emptyFields = []
      if (!name) {
        emptyFields.push('name')
      }
      if (!email) {
        emptyFields.push('email')
      }
      if (!message) {
        emptyFields.push('message')
      }
      if (!name || !email || !message) {
        return {
          success: false,
          empty: true,
          emptyFields: emptyFields,
        };
      }

      const body = "Europan Suisse | Message from: " + name + ", email: " + email + ", message: " + message
      const html = `
      <p>You received a message from: ${name} - <a href="mailto:${email}">${email}</a></p>
      <p>${message}</p>
      `
      
      const mail = {
        from: EMAIL,
        to: "bureau@europan.swiss",
        subject: `Europan Suisse | Message from ${email}`,
        text: body,
        html: html,
      };

      const sendEmail = async (mail) => {
        await new Promise((resolve, reject) => {
          transporter.sendMail(mail, (err, info) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(info);
            }
          });
        });
      };

      await sendEmail(mail);
      return {
        success: true,
      };
    } catch (error) {
      console.error(error);
    } return {
      success: false,
    };
  },
};