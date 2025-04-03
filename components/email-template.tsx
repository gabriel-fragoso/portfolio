import * as React from "react";

interface EmailTemplateProps {
  userName: string;
  message: string;
  phoneNumber: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  userName,
  message,
  phoneNumber,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        backgroundColor: "#6d28d9",
        padding: "20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 style={{ margin: "0", fontSize: "24px" }}>Novo Contato - Doveon</h1>
    </div>

    <div style={{ padding: "30px", backgroundColor: "#f9fafb" }}>
      <h2 style={{ color: "#1f2937", fontSize: "20px", marginTop: "0" }}>
        Nova mensagem de contato
      </h2>

      <div
        style={{
          marginBottom: "20px",
          borderLeft: "4px solid #6d28d9",
          paddingLeft: "15px",
        }}
      >
        <p
          style={{
            color: "#4b5563",
            fontSize: "16px",
            lineHeight: "1.6",
            margin: "5px 0",
          }}
        >
          <strong>Nome:</strong> {userName}
        </p>

        <p
          style={{
            color: "#4b5563",
            fontSize: "16px",
            lineHeight: "1.6",
            margin: "5px 0",
          }}
        >
          <strong>Telefone:</strong> {phoneNumber}
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <p style={{ color: "#1f2937", fontSize: "16px", fontWeight: "bold" }}>
          Mensagem:
        </p>
        <div
          style={{
            backgroundColor: "#f3f4f6",
            padding: "20px",
            borderRadius: "4px",
            color: "#4b5563",
            fontSize: "16px",
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#e9d5ff",
          borderRadius: "4px",
        }}
      >
        <p style={{ color: "#1f2937", fontSize: "14px", margin: "0" }}>
          Este email foi enviado automaticamente pelo sistema de contato da
          Doveon.
        </p>
      </div>
    </div>

    <div
      style={{
        backgroundColor: "#1f2937",
        padding: "20px",
        textAlign: "center",
        color: "white",
        fontSize: "14px",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Doveon. Todos os direitos reservados.
      </p>
    </div>
  </div>
);
