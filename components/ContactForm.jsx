'use client';

import Reveal from './Reveal';

export default function ContactForm({ alertMessage, children }) {
  function handleSubmit(e) {
    e.preventDefault();
    alert(alertMessage);
  }

  return (
    <Reveal as="form" onSubmit={handleSubmit} className="rounded-lg bg-surface-soft p-9">
      {children}
    </Reveal>
  );
}
