export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        color: "#0f172a",
        scrollBehavior: "smooth",
      }}
    >
      <style>{`
        .btn-primary:hover { 
          background-color: #0d9488 !important; 
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(15, 118, 110, 0.2);
        }
        .service-card:hover { 
          border-color: #0f766e !important; 
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05); 
          transform: translateY(-2px);
        }
      `}</style>

      {/* Navigation */}
      <header
        style={{
          borderBottom: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontWeight: "800",
              fontSize: "18px",
              color: "#0f172a",
              letterSpacing: "-0.03em",
            }}
          >
            kovocloud<span style={{ color: "#0f766e" }}>ai</span>
          </span>

          <nav style={{ display: "flex", gap: "20px" }}>
            <a
              href="#services"
              style={{
                color: "#475569",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              Services
            </a>
            <a
              href="#about"
              style={{
                color: "#475569",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              About
            </a>
            <a
              href="#contact"
              style={{
                color: "#0f766e",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main
        style={{
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        {/* Hero */}
        <section style={{ padding: "60px 0 80px 0" }}>
          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 50px)",
              lineHeight: "1.15",
              marginBottom: "24px",
              fontWeight: "800",
              letterSpacing: "-0.03em",
              color: "#0f172a",
            }}
          >
            Stop Overspending on AWS While Strengthening Your Cloud Security
          </h1>

          <p
            style={{
              fontSize: "clamp(17px, 3vw, 20px)",
              color: "#475569",
              lineHeight: "1.6",
              marginBottom: "36px",
              maxWidth: "740px",
            }}
          >
            I help small and mid-sized businesses reduce unnecessary AWS costs,
            fix critical security gaps, and stabilize cloud environments without
            overengineering.
          </p>

          <a
            href="https://calendly.com/kovocloud/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "#0f766e",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "600",
              fontSize: "16px",
              transition: "all 0.2s ease-in-out",
            }}
          >
            Schedule a Free AWS Review
          </a>
        </section>

        {/* Services */}
        <section id="services" style={{ padding: "40px 0" }}>
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "24px",
              fontWeight: "700",
              color: "#1e293b",
            }}
          >
            What I Help With
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              {
                title: "AWS Cost Optimization",
                desc: "Identify underutilized resources and eliminate unnecessary cloud waste.",
              },
              {
                title: "Cloud Security & IAM",
                desc: "Secure access control, IAM permissions, and network exposure.",
              },
              {
                title: "Architecture Simplification",
                desc: "Reduce infrastructure complexity and improve operational clarity.",
              },
              {
                title: "Operational Stability",
                desc: "Improve visibility, monitoring, and reliability across environments.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="service-card"
                style={{
                  backgroundColor: "#ffffff",
                  padding: "24px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    marginBottom: "8px",
                    color: "#0f766e",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    margin: "0",
                    lineHeight: "1.5",
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" style={{ padding: "60px 0 40px 0" }}>
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "16px",
              fontWeight: "700",
              color: "#1e293b",
            }}
          >
            About
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#475569",
              lineHeight: "1.6",
              maxWidth: "720px",
            }}
          >
            I specialize in AWS security frameworks and cloud cost optimization
            tailored for SMEs. My focus is practical, high-impact engineering
            improvements that reduce operational risk, cloud waste, and
            unnecessary complexity.
          </p>
        </section>

        {/* Contact */}
        <section
          id="contact"
          style={{
            padding: "40px 32px",
            backgroundColor: "#0f172a",
            borderRadius: "12px",
            color: "#ffffff",
            marginTop: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              marginBottom: "12px",
              fontWeight: "700",
              color: "#ffffff",
            }}
          >
            Let's Secure & Optimize Your Cloud
          </h2>

          <p
            style={{ color: "#94a3b8", marginBottom: "32px", fontSize: "15px" }}
          >
            Schedule a free AWS review or connect with me on LinkedIn.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "32px",
              fontSize: "16px",
            }}
          >
            <div style={{ margin: "0" }}>
              <span style={{ color: "#94a3b8" }}>Email:</span>
              <a
                href="mailto:yousuf@kovocloudai.com"
                style={{
                  color: "#2dd4bf",
                  fontWeight: "600",
                  textDecoration: "none",
                  marginLeft: "8px",
                }}
              >
                yousuf@kovocloudai.com
              </a>
            </div>

            <div style={{ margin: "0" }}>
              <span style={{ color: "#94a3b8" }}>LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/yousuf-k-618b486/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#2dd4bf",
                  fontWeight: "600",
                  textDecoration: "none",
                  marginLeft: "8px",
                }}
              >
                Connect & Message Directly
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
