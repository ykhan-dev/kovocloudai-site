export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        color: "#0f172a",
        scrollBehavior: "smooth",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Styles */}
      <style>{`
        .btn-primary:hover { 
          background-color: #0d9488 !important; 
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(15, 118, 110, 0.25);
        }

        .card:hover { 
          border-color: #0f766e !important; 
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.06);
        }

        .linkedin-btn:hover {
          background-color: #004182 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(10, 102, 194, 0.35);
        }
      `}</style>

      {/* NAV */}
      <header
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: 800, fontSize: "18px" }}>
            kovo<span style={{ color: "#0f766e" }}>cloudai</span>
          </div>

          <nav style={{ display: "flex", gap: "18px", fontSize: "14px" }}>
            <a href="#who" style={{ textDecoration: "none", color: "#475569" }}>
              Who It’s For
            </a>
            <a
              href="#approach"
              style={{ textDecoration: "none", color: "#475569" }}
            >
              Approach
            </a>
            <a
              href="#services"
              style={{ textDecoration: "none", color: "#475569" }}
            >
              Focus Areas
            </a>
            <a
              href="#about"
              style={{ textDecoration: "none", color: "#475569" }}
            >
              About
            </a>
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                color: "#0f766e",
                fontWeight: 600,
              }}
            >
              Book Call
            </a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main
        style={{
          maxWidth: "950px",
          margin: "0 auto",
          padding: "50px 24px",
        }}
      >
        {/* HERO */}
        <section style={{ padding: "60px 0 40px 0" }}>
          <h1
            style={{
              fontSize: "clamp(34px, 5vw, 52px)",
              lineHeight: "1.1",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            Reduce AWS Costs, Strengthen Cloud Security, and Simplify Your
            Infrastructure for Small and Medium-Sized Enterprises (SMEs)
          </h1>

          <p
            style={{
              marginTop: "18px",
              fontSize: "18px",
              color: "#475569",
              lineHeight: "1.6",
              maxWidth: "780px",
            }}
          >
            I help Small and Medium-Sized Enterprises (SMEs) running AWS
            environments reduce unnecessary cloud spending, secure their digital
            assets and business systems, and simplify complex infrastructure
            through practical, engineering-led reviews.
          </p>

          <div
            style={{
              marginTop: "28px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://calendly.com/kovocloud/30min"
              target="_blank"
              className="btn-primary"
              style={{
                padding: "14px 20px",
                backgroundColor: "#0f766e",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                display: "inline-block",
              }}
            >
              Book Free AWS Review
            </a>

            <a
              href="https://www.linkedin.com/in/yousuf-k-618b486/"
              target="_blank"
              className="linkedin-btn"
              style={{
                padding: "14px 20px",
                backgroundColor: "#0a66c2",
                color: "#ffffff",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid #0a66c2",
                display: "inline-block",
                boxShadow: "0 3px 10px rgba(10, 102, 194, 0.35)",
              }}
            >
              View LinkedIn Profile
            </a>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section id="who" style={{ padding: "50px 0" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700 }}>Who This Is For</h2>

          <p
            style={{
              marginTop: "10px",
              color: "#475569",
              lineHeight: "1.6",
              maxWidth: "780px",
            }}
          >
            This is for Small and Medium-Sized Enterprises (SMEs) where AWS is
            already in use, but cloud costs are increasing, systems are becoming
            harder to manage, and there may be hidden security risks that are
            not yet fully visible.
          </p>

          <div style={{ marginTop: "18px", display: "grid", gap: "12px" }}>
            {[
              "SMEs using AWS without dedicated cloud or security specialists",
              "Systems where user access and permissions have grown over time without structured review",
              "Businesses concerned about protecting sensitive data and cloud resources",
              "Organizations experiencing rising AWS costs without clear understanding of what is driving them",
              "Companies wanting to simplify their cloud setup before it becomes expensive and difficult to manage",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "14px 16px",
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </section>

        {/* APPROACH */}
        <section id="approach" style={{ padding: "50px 0" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700 }}>
            How the Free AWS Review Works
          </h2>

          <div style={{ marginTop: "18px", display: "grid", gap: "12px" }}>
            {[
              "Understand your AWS setup and current usage",
              "Identify areas of unnecessary cost and inefficiency",
              "Review how your cloud environment is secured and accessed",
              "Highlight structural and architectural improvements",
              "Discuss practical next steps based on your business priorities",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "14px 16px",
                }}
              >
                → {item}
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" style={{ padding: "50px 0" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700 }}>Focus Areas</h2>

          <div
            style={{
              marginTop: "18px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                title: "Cloud Security Review",
                desc: "Protect your AWS environment and sensitive business data",
              },
              {
                title: "Cost Optimization",
                desc: "Reduce unnecessary cloud spending and improve efficiency",
              },
              {
                title: "Architecture Simplification",
                desc: "Remove unnecessary complexity in your cloud setup",
              },
              {
                title: "Operational Stability",
                desc: "Improve reliability, visibility, and control",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "10px",
                  padding: "18px",
                  transition: "0.2s",
                }}
              >
                <h3 style={{ color: "#0f766e", fontSize: "16px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#475569", fontSize: "14px" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ padding: "60px 0" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 700 }}>About</h2>

          <p
            style={{
              marginTop: "12px",
              color: "#475569",
              lineHeight: "1.6",
              maxWidth: "780px",
            }}
          >
            I work with Small and Medium-Sized Enterprises (SMEs) to help them
            run AWS environments in a more cost-efficient, secure, and
            manageable way without unnecessary technical complexity.
          </p>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          style={{
            backgroundColor: "#0f172a",
            color: "#fff",
            padding: "40px",
            borderRadius: "12px",
            marginTop: "30px",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Book Your Free AWS Review</h2>

          <p style={{ color: "#94a3b8" }}>
            A focused conversation to understand your AWS setup and identify
            improvement opportunities.
          </p>

          <div style={{ marginTop: "15px" }}>
            <a
              href="https://calendly.com/kovocloud/30min"
              target="_blank"
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "12px 18px",
                backgroundColor: "#0f766e",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Schedule on Calendly
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
