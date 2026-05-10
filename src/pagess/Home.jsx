function Home() {
    return (
      <div style={styles.container}>
        
        {/* Hero Section */}
        <section style={styles.hero}>
          <h1>Welcome to IA865 Digital Marketing Agency 🚀</h1>
          <p>
            We help businesses grow with powerful Facebook Ads, Instagram Ads,
            and modern digital marketing strategies.
          </p>
  
          <a href="/contact" style={styles.button}>
            Get Started
          </a>
        </section>
  
        {/* Services */}
        <section>
          <h2>Our Services</h2>
  
          <div style={styles.cards}>
            <div style={styles.card}>
              <h3>Facebook Ads</h3>
              <p>Target the right audience and grow your business fast.</p>
            </div>
  
            <div style={styles.card}>
              <h3>Website Design</h3>
              <p>Modern and responsive websites for your brand.</p>
            </div>
  
            <div style={styles.card}>
              <h3>Graphic Design</h3>
              <p>Creative and professional designs for your business.</p>
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section style={styles.cta}>
          <h2>Ready to Grow Your Business?</h2>
          <a href="/contact" style={styles.button}>
            Contact Us
          </a>
        </section>
  
      </div>
    );
  }
  
  // Styling
  const styles = {
    container: {
      width: "80%",
      margin: "auto",
      textAlign: "center",
    },
    hero: {
      padding: "40px",
      background: "#f4f4f4",
      borderRadius: "10px",
      marginBottom: "30px",
    },
    cards: {
      display: "flex",
      gap: "15px",
      justifyContent: "center",
      marginTop: "20px",
    },
    card: {
      background: "#eee",
      padding: "20px",
      width: "200px",
      borderRadius: "10px",
    },
    cta: {
      marginTop: "40px",
      padding: "30px",
      background: "#000",
      color: "#fff",
      borderRadius: "10px",
    },
    button: {
      display: "inline-block",
      marginTop: "15px",
      padding: "10px 20px",
      background: "blue",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
    },
  };
  
  export default Home;