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
            AWS Cost & Security Clarity for Small and Mid-Sized Teams
          </h1>

          <p
            style={{
              marginTop: "18px",
              fontSize: "18px",
              color: "#475569",
              lineHeight: "1.6",
              maxWidth: "720px",
            }}
          >
            I help SMEs running AWS environments simplify infrastructure,
            improve security posture, and reduce operational complexity through
            practical engineering-focused reviews.
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

        {/* WHO IT'S FOR (URGENT + RISK + COST FOCUS) */}
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
            This is for teams where AWS is already in use, but visibility, cost
            control, and security posture are becoming harder to manage — and
            small issues could quietly turn into larger operational or security
            risks.
          </p>

          <div style={{ marginTop: "18px", display: "grid", gap: "12px" }}>
            {[
              "SMEs using AWS without dedicated security or cloud engineering oversight",
              "Environments where IAM permissions and access control have grown over time without structured review",
              "Teams concerned about potential security exposure or unclear network boundaries",
              "Organizations seeing rising AWS costs but lacking clear visibility into what is driving them",
              "Businesses that want to simplify cloud architecture before complexity becomes a long-term operational risk",
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
              "Understand your current AWS setup at a high level",
              "Identify security and configuration concerns",
              "Highlight cost inefficiencies and unused resources",
              "Review architecture simplicity and operational clarity",
              "Discuss practical next steps based on priorities",
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
                title: "AWS Security Review",
                desc: "IAM, access control, and exposure analysis",
              },
              {
                title: "Cost & Usage Review",
                desc: "Identify inefficiencies and unused resources",
              },
              {
                title: "Architecture Simplification",
                desc: "Reduce unnecessary complexity",
              },
              {
                title: "Operational Stability",
                desc: "Improve visibility and system reliability",
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
            I specialize in AWS security and cloud optimization for SMEs,
            focusing on practical, engineering-led improvements that reduce
            complexity, improve visibility, and strengthen cloud environments
            without unnecessary overengineering.
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
            A focused conversation to understand your AWS setup and priorities.
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
