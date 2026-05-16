export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        color: "#0f172a",
      }}
    >
      {/* Tiny embedded style tag to handle interactive button hovers cleanly */}
      <style>{`
        .btn-primary:hover { background-color: #0d9488 !important; transform: translateY(-1px); }
        .service-card:hover { border-color: #cbd5e1 !important; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05); }
      `}</style>

      {/* Navigation Header */}
      <header
        style={{
          borderBottom: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
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
          <nav>
            <a
              href="#services"
              style={{
                color: "#475569",
                textDecoration: "none",
                fontSize: "14px",
                marginRight: "20px",
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
                marginRight: "20px",
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

      {/* Main Container */}
      <main
        style={{
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 24px",
        }}
      >
        {/* Hero Section */}
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
            href="#contact"
            className="btn-primary"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: "#0f766e", // Deep Teal - Represents security and stability
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "600",
              fontSize: "16px",
              transition: "all 0.2s ease",
            }}
          >
            Book a Free Cloud Review
          </a>
        </section>

        {/* Core Capabilities Section */}
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
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                title: "AWS Cost Optimization",
                desc: "Identify underutilized resources and immediately eliminate cloud waste.",
              },
              {
                title: "Cloud Security & IAM",
                desc: "Tighten access control, secure network boundaries, and close vulnerabilities.",
              },
              {
                title: "Architecture Simplification",
                desc: "Strip out unnecessary infrastructure complexity to lower maintenance overhead.",
              },
              {
                title: "Operational Stability",
                desc: "Establish clear visibility, monitoring, and predictable performance.",
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
                  transition: "all 0.2s ease",
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

        {/* About Section */}
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
            specifically tailored for SMEs. My focus is practical, high-impact
            engineering fixes that reduce operational risk and complexity
            without disrupting your ongoing business delivery.
          </p>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          style={{
            padding: "40px",
            backgroundColor: "#0f172a", // Dark Deep Slate Blue for emphasis
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
            style={{ color: "#94a3b8", marginBottom: "24px", fontSize: "15px" }}
          >
            Get in touch to schedule your free diagnostic review.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              fontSize: "16px",
            }}
          >
            <p style={{ margin: "0" }}>
              Email:{" "}
              <a
                href="mailto:yousuf@kovocloudai.com"
                style={{
                  color: "#2dd4bf",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                yousuf@kovocloudai.com
              </a>
            </p>
            <p style={{ margin: "0", color: "#cbd5e1" }}>
              LinkedIn:{" "}
              <span style={{ color: "#ffffff", fontWeight: "500" }}>
                Connect & Message Directly
              </span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
