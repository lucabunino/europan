import { EMAIL } from "$env/static/private";
import transporter from "$lib/utils/emailSetup.server.js";
import { getSupportUs } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const supportUs = await getSupportUs();
	
	if (supportUs) {
		return {
			supportUs,
		};
	}
  throw error(404, 'Not found');
}

export const actions = {
  create: async ({ request }) => {
    try {
      const formData = await request.formData()

      const name = formData.get('name');
      const company = formData.get('company');
      const adress = formData.get('adress');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const membership = formData.get('membership');
      const message = formData.get('message');
      
      var emptyFields = []
      if (!name) {
        emptyFields.push('name')
      }
      if (!company) {
        emptyFields.push('company')
      }
      if (!adress) {
        emptyFields.push('adress')
      }
      if (!email) {
        emptyFields.push('email')
      }
      if (!phone) {
        emptyFields.push('phone')
      }
      if (!membership) {
        emptyFields.push('membership')
      }
      if (!message) {
        emptyFields.push('message')
      }
      if (!name || !company || !adress || !email || !phone || !membership || !message) {
        return {
          success: false,
          empty: true,
          emptyFields: emptyFields,
        };
      }

      const body = "Europan Suisse | New member subscription request from: " + name + ", email: " + email + ", message: " + message
      const html = `
      <p>You received a new member subscription request from: ${name} - <a href="mailto:${email}">${email}</a></p>
			<p>Company: ${company}</p>
			<p>Adress: ${adress}</p>
			<p>Phone: ${phone}</p>
			<p>Membership: ${membership}</p>
      <p>Message: ${message}</p>
      `
      
      const mail = {
        from: EMAIL,
        // to: "bureau@europan.swiss",
        to: "hello@lucabunino.com",
        subject: `Europan Suisse | New member subscription request from ${email}`,
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