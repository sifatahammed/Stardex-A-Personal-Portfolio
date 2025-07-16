import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "../index.css";

import { FaFacebook, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "MD Sifat Ahammed Akash",
          from_email: form.email,
          to_email: "sifatahammed821@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setConfirmation("Thank you! I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again. :/");
      });
  };

  const socialIcons = [
    { icon: FaFacebook, url: "https://www.facebook.com/sifatahammed.akash.7/", color: "#1877F2", angle: 0 },
    { icon: FaWhatsapp, url: "https://wa.me/01759047551", color: "#25D366", angle: 60 },
    { icon: FaPhoneAlt, url: "tel:+8801759047551", color: "#4CAF50", angle: 120 },
    { icon: SiGmail, url: "mailto:sifatahammed821@gmail.com", color: "#D44638", angle: 180 },
    { icon: FaGithub, url: "https://github.com/sifatahammed/", color: "#333", angle: 240 },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/sifat-ahammed-a158271b2/", color: "#0A66C2", angle: 300 },
  ];

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
          <InputField
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Insert Your name here..."
            type="text"
          />
          {nameError && <span className="text-red-500">{nameError}</span>}

          <InputField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email address?"
            type="email"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}

          <InputField
            label="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What you want to say...?"
            type="text"
          />

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {confirmation && <p className="text-green-500">{confirmation}</p>}
        </form>
      </motion.div>

      {/* Rotating Social Icons */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex flex-col justify-center items-center"
      >
        <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
          {/* Rotating ring */}
          <div className="absolute inset-0 flex items-center justify-center group">
            <div className="relative w-full h-full rounded-full border-2 border-white spin-slow group-hover:paused">
              {/* Icons positioned around circle */}
              {socialIcons.map(({ icon: Icon, imgSrc, url, color, alt, angle }, i) => {
                const radius = 140;
                const x = radius * Math.cos((angle * Math.PI) / 180);
                const y = radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute w-16 h-16 rounded-full flex items-center justify-center border-2 border-white shadow-md hover:scale-110 transition-transform"
                    style={{
                      top: `calc(50% + ${y}px - 2rem)`,
                      left: `calc(50% + ${x}px - 2rem)`,
                      backgroundColor: color || "white",
                    }}
                  >
                    {Icon ? (
                      <Icon className="text-white" size={30} />
                    ) : (
                      <img src={imgSrc} alt={alt} className="w-6 h-6" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Center text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-2xl font-extrabold drop-shadow-lg">
  Find me on
</div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
