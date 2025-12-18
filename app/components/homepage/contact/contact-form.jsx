"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message Sent Successfully ✔ Chak email !");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (error) {
      console.log(error);
      setStatus("Error sending message ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0a0f1f, #000)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      {/* Glass  */}
      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          padding: "40px",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(14px)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 0 25px rgba(0, 255, 255, 0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "32px",
            color: "#00eaff",
            textShadow: "0 0 20px #00eaff",
            fontWeight: 700,
          }}
        >
          Contact Me
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          {/* Input */}
          <input
            name="name"
            type="text"
            placeholder="Your Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              padding: "14px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "12px",
              color: "white",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 12px #00eaff")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: "14px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "12px",
              color: "white",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 12px #00eaff")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />

          {/* Textarea */}
          <textarea
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              padding: "14px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "12px",
              color: "white",
              outline: "none",
              transition: "0.3s",
              resize: "vertical",
            }}
            onFocus={(e) => (e.target.style.boxShadow = "0 0 12px #00eaff")}
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            style={{
              padding: "14px",
              background: "linear-gradient(90deg, #00eaff, #7b2ff7, #00eaff)",
              color: "black",
              fontWeight: "700",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              transition: "0.25s",
              fontSize: "17px",
            }}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 0 20px #00eaff, 0 0 40px #7b2ff7")
            }
            onMouseOut={(e) => (e.target.style.boxShadow = "none")}
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "#00eaff",
              fontWeight: "600",
            }}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
