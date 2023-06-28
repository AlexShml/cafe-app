import React from "react";
import "../App.css";

function ContactSection() {
  return (
    <section className="contact-section text-center " id="contact-section">
      <h2>
        <span>Контакты</span>
      </h2>
      <p>
        <span>
          Мы находимся по адресу: ул. Пушкина, 10. Вы можете связаться с нами по
          телефону: 8-800-555-55-55 или написать нам на почту: info@mycafe.ru.
        </span>
      </p>
    </section>
  );
}

export default ContactSection;
