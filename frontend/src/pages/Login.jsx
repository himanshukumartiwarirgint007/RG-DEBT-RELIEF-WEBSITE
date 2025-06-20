import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Media/logo.png";
import backgroundImage from "../assets/Media/BackgroundLogin.avif";

// Custom hook to detect mobile screen
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [remember, setRemember] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRemember(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (remember) {
      localStorage.setItem("savedEmail", email);
    } else {
      localStorage.removeItem("savedEmail");
    }
    // Add authentication logic here
    navigate("/");
  };

  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    maxWidth: isMobile ? "100%" : 920,
    width: "100%",
    minHeight: isMobile ? "auto" : 720,
    background: "#fff",
    borderRadius: isMobile ? 0 : 20,
    boxShadow: isMobile ? "none" : "0 8px 32px rgba(0, 0, 0, 0.09)",
    overflow: "hidden",
    border: isMobile ? "none" : "3px solid #002855",
    margin: isMobile ? 0 : "auto",
  };

  const leftPanelStyle = {
    width: isMobile ? "100%" : "50%",
    padding: isMobile ? "32px 24px" : "48px 40px 36px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#fff",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: isMobile ? 20 : 30,
    fontWeight: 700,
    fontSize: isMobile ? "1.8rem" : "2.2rem",
    color: "#002855",
    letterSpacing: 1,
  };

  const logoIconStyle = {
    width: isMobile ? 70 : 90,
    height: isMobile ? 70 : 90,
    marginRight: isMobile ? 16 : 24,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #e4f8e6 0%, #002855 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const logoImgStyle = {
    width: isMobile ? 66 : 86,
    height: isMobile ? 66 : 86,
    borderRadius: "50%",
  };

  const welcomeStyle = {
    fontSize: isMobile ? "1.6rem" : "2rem",
    fontWeight: 700,
    color: "#1a2151",
    marginBottom: 8,
  };

  const subtitleStyle = {
    fontSize: isMobile ? "1rem" : "1.1rem",
    color: "#666",
    marginBottom: 28,
  };

  const socialRowStyle = {
    display: "flex",
    gap: 12,
    marginBottom: 22,
    marginTop: 4,
    flexWrap: "wrap",
  };

  const socialBtnStyle = {
    flex: isMobile ? "1 0 100%" : 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    border: "1.5px solid #002855",
    borderRadius: 7,
    padding: "10px 0",
    fontSize: "1rem",
    fontWeight: 500,
    background: "#fff",
    color: "#002855",
    cursor: "pointer",
    transition: "background 0.18s, color 0.18s, border 0.18s",
  };

  const googleBtnStyle = {};
  const facebookBtnStyle = {};
  const appleBtnStyle = {};

  const formGroupStyle = {
    marginBottom: 18,
  };

  const formLabelStyle = {
    fontSize: "0.97rem",
    color: "#444",
    marginBottom: 6,
    display: "block",
    fontWeight: 500,
  };

  const formInputStyle = {
    width: "100%",
    padding: "12px 14px",
    border: "2px solid #b2cbe4",
    borderRadius: 7,
    fontSize: "1rem",
    outline: "none",
    transition: "border 0.2s",
    background: "#f7faf9",
  };

  const formRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  };

  const rememberMeStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "0.97rem",
    color: "#333",
  };

  const checkboxStyle = {
    marginRight: 7,
    accentColor: "#002855",
  };

  const forgotLinkStyle = {
    color: "#e57373",
    textDecoration: "none",
    fontSize: "0.97rem",
    transition: "text-decoration 0.2s",
  };

  const btnRowStyle = {
    display: "flex",
    gap: 12,
    marginBottom: 18,
  };

  const btnLoginStyle = {
    flex: 1,
    padding: "11px 0",
    border: "none",
    borderRadius: 7,
    fontSize: "1.05rem",
    fontWeight: 600,
    cursor: "pointer",
    background: "#002855",
    color: "#fff",
    boxShadow: "0 2px 4px rgba(0, 40, 85, 0.07)",
    transition: "background 0.18s, color 0.18s, border 0.18s",
  };

  const btnCreateStyle = {
    flex: 1,
    padding: "11px 0",
    border: "2px solid #002855",
    borderRadius: 7,
    fontSize: "1.05rem",
    fontWeight: 600,
    cursor: "pointer",
    background: "#fff",
    color: "#002855",
    transition: "background 0.18s, color 0.18s, border 0.18s",
  };

  const termsStyle = {
    fontSize: "0.85rem",
    color: "#888",
    marginTop: 6,
    lineHeight: 1.4,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container" style={containerStyle}>
        <div className="left-panel" style={leftPanelStyle}>
          <div className="logo" style={logoStyle}>
            <span className="logo-icon" style={logoIconStyle}>
              <img src={logo} alt="Logo" style={logoImgStyle} />
            </span>
            RG Debt Relief
          </div>
          <div className="welcome" style={welcomeStyle}>Welcome</div>
          <div className="subtitle" style={subtitleStyle}>Please Log in to your account.</div>
          <div className="social-row" style={socialRowStyle}>
            <button
              className="social-btn google"
              style={{ ...socialBtnStyle, ...googleBtnStyle }}
              onClick={() => alert("Google Sign-In integration goes here!")}
            >
              <i className="fab fa-google"></i> Google
            </button>
            <button
              className="social-btn facebook"
              style={{ ...socialBtnStyle, ...facebookBtnStyle }}
              onClick={() => alert("Facebook Sign-In integration goes here!")}
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
            <button
              className="social-btn apple"
              style={{ ...socialBtnStyle, ...appleBtnStyle }}
              onClick={() => alert("Apple Sign-In integration goes here!")}
            >
              <i className="fab fa-apple"></i> Apple
            </button>
          </div>
          <form id="loginForm" autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group" style={formGroupStyle}>
              <label className="form-label" htmlFor="email" style={formLabelStyle}>
                Email Address
              </label>
              <input
                className="form-input"
                style={formInputStyle}
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <label className="form-label" htmlFor="password" style={formLabelStyle}>
                Password
              </label>
              <input
                className="form-input"
                style={formInputStyle}
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-row" style={formRowStyle}>
              <label className="remember-me" style={rememberMeStyle}>
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  style={checkboxStyle}
                />
                Remember me
              </label>
              <Link to="/" className="forgot-link" style={forgotLinkStyle}>
                Forgot password?
              </Link>
            </div>
            <div className="btn-row" style={btnRowStyle}>
              <button className="btn btn-login" style={btnLoginStyle} type="submit">
                Login
              </button>
              <button
                className="btn btn-create"
                style={btnCreateStyle}
                type="button"
                onClick={() => alert("Redirect to signup!")}
              >
                Create account
              </button>
            </div>
            <div className="terms" style={termsStyle}>
              By signing up you agree to our terms and that you have read our data policy.
            </div>
          </form>
        </div>
        {!isMobile && (
          <div className="right-panel" style={{ width: "50%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <img
              src={backgroundImage}
              alt="Login Background"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
