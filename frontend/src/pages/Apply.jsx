import React, { useState } from "react";
import applyNowImg from '../assets/Media/applynow.png';
import ChatIcon from "../assets/Media/chat.png";
import CalculatorIcon from "../assets/Media/Calculator.png";
import CoinIcon from "../assets/Media/coin.png";


const styles = `
html, body {
  height: 100%; margin: 0; font-family: Arial, sans-serif;
}
body {
  background: #ffffff;
}
.container {
  background: white;
  width: 80%; max-width: 900px;
  min-height: 600px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  margin: 48px auto; /* Center the form horizontally with margin */
}
.image-side {
  flex: 1;
  background: url('../assets/Media/applynow.png') center/cover no-repeat;
}
.form-side {
  flex: 1;
  padding: 40px;
  position: relative;
}
.form-page {
  display: none;
  animation: fadeIn 0.5s ease-in-out;
}
.form-page.active {
  display: block;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
label { display: block; margin: 15px 0 5px; font-weight: bold; }
input, select, textarea {
  width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc;
}
.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.buttons {
  margin-top: 20px; display: flex; justify-content: space-between;
}
button {
  padding: 10px 20px; border: none; border-radius: 5px;
  cursor: pointer; font-weight: bold;
}
.next-btn { background: #4b38d3; color: white; }
.back-btn { background: #ccc; }

.radio-option input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  right: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.radio-option {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 6px 0;
}
.radio-option span:last-child {
  font-weight: bold;
}

.custom-radio {
  width: 20px;
  height: 20px;
  border: 2px solid #000000;
  border-radius: 6px;
  display: inline-block;
  position: relative;
  background: #fff;
  margin-left: 12px;
  transition: border-color 0.2s;
}

.radio-option input[type="checkbox"]:checked + .custom-radio {
  border-color: #000000;
  background: #000000;
}

.radio-option input[type="checkbox"]:checked + .custom-radio::after {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  background: #000000;
  border-radius: 2px;
  position: absolute;
  top: 3px;
  left: 3px;
}

.radio-option input[type="checkbox"]:focus + .custom-radio {
  outline: 2px solid #ffffff;
}

.radio-option input[type="checkbox"]:checked ~ .custom-radio,
.radio-option:hover {
  background: #fff7f7;
}
.radio-box-group {
  border: 2px solid #222;
  border-radius: 10px;
  background: #f7f7ff;
  padding: 18px 20px;
  margin-bottom: 24px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: normal;
  font-size: 1rem;
  cursor: pointer;
  padding: 6px 0;
}

.radio-row input[type="radio"] {
  accent-color: #4b38d3;
  width: 18px;
  height: 18px;
  margin: 0;
}
`;

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "",
  phone: "",
  state: "",
  debtAmount: "",
  typeOfDebt: [],
  employmentStatus: "",
  monthlyIncome: "",
  source: "",
  status: "",
  notes: "",
};

const debtTypes = ["Credit Cards", "Loans", "Medical"];
const sources = ["Facebook", "Google", "Referral"];
const statuses = ["New Client", "Current Client", "Previous Client"];
const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
];

export default function Apply() {
  const [form, setForm] = useState(initialForm);
  const [page, setPage] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const phoneLength = form.countryCode === "+1" ? 10 : 10;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "typeOfDebt") {
      setForm((f) => ({
        ...f,
        typeOfDebt: checked
          ? [...f.typeOfDebt, value]
          : f.typeOfDebt.filter((v) => v !== value),
      }));
    } else if (type === "checkbox" || type === "radio") {
      setForm((f) => ({ ...f, [name]: value }));
    } else if (name === "phone") {
      setForm((f) => ({
        ...f,
        phone: value.replace(/[^0-9]/g, "").slice(0, phoneLength),
      }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const validatePage = () => {
    if (page === 1) {
      return (
        form.firstName &&
        form.lastName &&
        form.email &&
        form.countryCode &&
        form.phone.length === phoneLength &&
        form.state
      );
    }
    if (page === 2) {
      return (
        form.debtAmount &&
        form.typeOfDebt.length > 0 &&
        form.employmentStatus &&
        form.monthlyIncome
      );
    }
    if (page === 3) {
      return form.source && form.status;
    }
    return true;
  };

  const handleNext = () => {
    if (!validatePage()) {
      alert("Please fill all required fields.");
      return;
    }
    setPage((p) => p + 1);
  };

  const handleBack = () => setPage((p) => p - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePage()) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("Form submitted!");
        setForm(initialForm);
        setPage(1);
      } else {
        alert("Submission failed.");
      }
    } catch {
      alert("Submission failed.");
    }
    setSubmitting(false);
  };

  return (
    <>
      <style>{styles}</style>
      <form className="container" onSubmit={handleSubmit} autoComplete="off">
        <div className="image-side" style={{ background: `url(${applyNowImg}) center/cover no-repeat` }} />
        <div className="form-side">
          <div className={`form-page${page === 1 ? " active" : ""}`}>
            <label>First Name*</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />

            <label>Last Name*</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />

            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Phone Number*</label>
            <div style={{ display: "flex", gap: 8 }}>
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                required
                style={{ maxWidth: 110 }}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="+1" data-length="10">
                  +1 (USA)
                </option>
              </select>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                maxLength={phoneLength}
                placeholder={`Enter ${phoneLength}-digit phone number`}
                style={{ flex: 1 }}
              />
            </div>

            <label>State*</label>
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <div className="buttons">
              <span />
              <button
                type="button"
                className="next-btn"
                onClick={handleNext}
                disabled={submitting}
              >
                Next
              </button>
            </div>
          </div>

          <div className={`form-page${page === 2 ? " active" : ""}`}>
            <label>Debt Amount*</label>
            <select
              name="debtAmount"
              value={form.debtAmount}
              onChange={handleChange}
              required
            >
              <option value="">Select Amount</option>
              <option>$1k–$5k</option>
              <option>$5k–$10k</option>
              <option>$10k–$20k</option>
              <option>$20k–$50k</option>
              <option>$50k–$100k</option>
              <option>$100k+</option>
            </select>

            <label>Type of Debt*</label>
            <div className="radio-box-group">
              {debtTypes.map((type) => (
                <label className="radio-option" key={type}>
                  <input
                    type="checkbox"
                    name="typeOfDebt"
                    value={type}
                    checked={form.typeOfDebt.includes(type)}
                    onChange={handleChange}
                  />
                  <span className="custom-radio"></span>
                  <span>{type}</span>
                </label>
              ))}
            </div>

            <label>Employment Status*</label>
            <select
              name="employmentStatus"
              value={form.employmentStatus}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Employment Status
              </option>
              <option>Employed</option>
              <option>Unemployed</option>
              <option>Self-employed</option>
            </select>

            <label>Monthly Income*</label>
            <input
              type="number"
              name="monthlyIncome"
              value={form.monthlyIncome}
              onChange={handleChange}
              required
            />

            <div className="buttons">
              <button
                type="button"
                className="back-btn"
                onClick={handleBack}
                disabled={submitting}
              >
                Back
              </button>
              <button
                type="button"
                className="next-btn"
                onClick={handleNext}
                disabled={submitting}
              >
                Next
              </button>
            </div>
          </div>

          <div className={`form-page${page === 3 ? " active" : ""}`}>
            <label>Source*</label>
            <div className="radio-box-group">
              {sources.map((src) => (
                <label className="radio-row" key={src}>
                  <input
                    type="radio"
                    name="source"
                    value={src}
                    checked={form.source === src}
                    onChange={handleChange}
                  />
                  <span>{src}</span>
                </label>
              ))}
            </div>

            <label>Status*</label>
            <div className="radio-box-group">
              {statuses.map((stat) => (
                <label className="radio-row" key={stat}>
                  <input
                    type="radio"
                    name="status"
                    value={stat}
                    checked={form.status === stat}
                    onChange={handleChange}
                  />
                  <span>
                    {stat === "New Client"
                      ? "New User"
                      : stat === "Current Client"
                      ? "Current Client"
                      : "Previous Client"}
                  </span>
                </label>
              ))}
            </div>

            <label>Comments</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Leave Your Comment"
            />

            <div className="buttons">
              <button
                type="button"
                className="back-btn"
                onClick={handleBack}
                disabled={submitting}
              >
                Back
              </button>
              <button
                type="submit"
                className="next-btn"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
     </form>
     {/* How It Works Section */}
    <section className="bg-[#f1f3f6] py-16">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 mb-10">
          You’re in control, our debt experts do the work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div>
            <img
              src={ChatIcon}
              alt="Chat Icon"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="font-semibold text-lg mb-2">
              Talk to us for a free consultation
            </h3>
            <p className="text-gray-600 text-sm">
              Tell us your situation, then find out your debt relief options – no obligation.
            </p>
          </div>
          {/* Step 2 */}
          <div>
            <img
              src={CalculatorIcon}
              alt="Plan Icon"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="font-semibold text-lg mb-2">
              We create an affordable plan that works for you
            </h3>
            <p className="text-gray-600 text-sm">
              Approve your plan, personalized from our suite of products.
            </p>
          </div>
          {/* Step 3 */}
          <div>
            <img
              src={CoinIcon}
              alt="Coins Icon"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="font-semibold text-lg mb-2">
              Get out of debt faster than you think
            </h3>
            <p className="text-gray-600 text-sm">
              Take back your life in as little as 24–48 months.
            </p>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}