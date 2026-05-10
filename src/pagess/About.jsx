function About() {
    return (
      <div style={styles.container}>
        
        <h1>About Us</h1>
  
        {/* Intro */}
        <p style={styles.text}>
          Welcome to our website! We are a digital marketing agency that helps
          businesses grow online with modern strategies and creative solutions.
        </p>
  
        {/* Mission */}
        <div style={styles.card}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to help brands reach their target audience and increase
            sales using powerful digital marketing techniques.
          </p>
        </div>
  
        {/* Services */}
        <div style={styles.card}>
          <h2>Our Services</h2>
          <ul>
            <li>Facebook & Instagram Ads</li>
            <li>Social Media Management</li>
            <li>Website Design</li>
            <li>Graphic Design</li>
          </ul>
        </div>
  
        {/* Skills */}
        <div style={styles.card}>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>2+ Years Experience</li>
            <li>Client Satisfaction</li>
            <li>Affordable Pricing</li>
            <li>Result Oriented Strategy</li>
          </ul>
        </div>
  
      </div>
    );
  }
  
  // Styling
  const styles = {
    container: {
      width: "600px",
      margin: "auto",
      textAlign: "center",
    },
    text: {
      fontSize: "16px",
      marginBottom: "20px",
    },
    card: {
      background: "#f4f4f4",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px",
    },
  };
  
  export default About;