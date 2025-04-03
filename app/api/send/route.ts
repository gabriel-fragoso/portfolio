import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { renderToString } from "react-dom/server";

interface RequestEmail {
  userName: string;
  email: string;
  message: string;
  phoneNumber: string;
}

interface CustomError {
  message: string;
}

export async function POST(request: Request) {
  try {
    const { userName, email, message, phoneNumber }: RequestEmail =
      await request.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 422 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: `Contato - Doveon <contato@doveon.com.br>`,
      to: ["contato@doveon.com.br"],
      subject: `Novo contato de ${userName} - ${email}`,
      react: EmailTemplate({ userName, message, phoneNumber }),
      text: `Nome: ${userName}\nEmail: ${email}\nTelefone: ${phoneNumber}\nMensagem: ${message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error: unknown) {
    const customError = error as CustomError;
    console.error("Catch Error:", error);
    return Response.json(
      { error: customError.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
