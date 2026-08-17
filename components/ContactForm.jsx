'use client';

export default function ContactForm({ alertMessage, children }) {
  function handleSubmit(e) {
    e.preventDefault();
    alert(alertMessage);
  }

  return (
    <form className="form reveal" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
