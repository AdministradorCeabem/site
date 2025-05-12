import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("https://formspree.io/f/xjkwrwzp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      // Redirecionar para a página de sucesso do Formspree
      window.location.href = "https://formspree.io/thanks";
    } catch (err) {
      setError("Erro ao enviar mensagem. Por favor, tente novamente.");
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xjkwrwzp"
      method="POST"
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-church-black"
        >
          Nome
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md border border-church-green/20 px-4 py-2 text-church-black shadow-sm focus:border-church-green focus:ring-church-green"
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-church-black"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border border-church-green/20 px-4 py-2 text-church-black shadow-sm focus:border-church-green focus:ring-church-green"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-church-black"
        >
          Assunto
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          className="mt-1 block w-full rounded-md border border-church-green/20 px-4 py-2 text-church-black shadow-sm focus:border-church-green focus:ring-church-green"
          placeholder="Assunto da mensagem"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-church-black"
        >
          Mensagem
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className="mt-1 block w-full rounded-md border border-church-green/20 px-4 py-2 text-church-black shadow-sm focus:border-church-green focus:ring-church-green"
          placeholder="Sua mensagem..."
        />
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-church-green px-4 py-2 text-white hover:bg-church-green/90 focus:outline-none focus:ring-2 focus:ring-church-green focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </button>
    </form>
  );
}
