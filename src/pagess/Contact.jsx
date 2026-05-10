import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (formData.phone.length < 11) {
      newErrors.phone = "Enter valid phone number";
    }

    if (!formData.message) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      console.log(formData);
      setErrors({});
      setSuccess("Message Sent Successfully ✅");

      // Reset
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>

      {success && <p style={styles.success}>{success}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <p style={styles.error}>{errors.name}</p>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <p style={styles.error}>{errors.email}</p>

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
        />
        <p style={styles.error}>{errors.phone}</p>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>
        <p style={styles.error}>{errors.message}</p>

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

// Simple Styling
const styles = {
  container: {
    width: "400px",
    margin: "auto",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    margin: "5px 0",
  },
  textarea: {
    padding: "10px",
    margin: "5px 0",
    height: "100px",
  },
  button: {
    padding: "10px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
  success: {
    color: "green",
  },
};

export default Contact;