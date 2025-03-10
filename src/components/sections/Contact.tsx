import { useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let error_count = 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Need to apply styles by style and not classname because tailwindcss
    // class have a lower priority than the toast styles
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message envoyé avec succès!", {
          style: {
            backgroundColor: "#16a34a", // bg-green-600
            color: "white",
            fontWeight: 600, // font-semibold
            padding: "12px 16px", // px-4 py-3
            borderRadius: "0.5rem", // rounded-lg
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-lg
            transform: "scale(0.95)", // scale-95
            transition: "transform 0.2s ease-in-out", // transition-transform
          },
          iconTheme: {
            primary: "white",
            secondary: "green",
          },
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        error_count++;
        toast.error(
          error_count < 2
            ? "Une erreur est survenue, veuillez réessayer."
            : "Il semble y avoir un problème, merci d'envoyer votre mail directement à e19riviere@gmail.com",
          {
            style: {
              backgroundColor: "#dc2626", // bg-red-600
              color: "white",
              fontWeight: 600, // font-semibold
              padding: "12px 16px", // px-4 py-3
              borderRadius: "0.5rem", // rounded-lg
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-lg
              transform: "scale(0.95)", // scale-95
              transition: "transform 0.2s ease-in-out", // transition-transform
            },
            iconTheme: {
              primary: "white",
              secondary: "red",
            },
          }
        );
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <Toaster position="top-right" />
      <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
        <h2
          className="text-3xl text-center font-bold bg-clip-text 
          text-transparent bg-gradient-to-r from-sky-600 to-cyan-400 mb-8"
        >
          Contact
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full border border-sky-600/30 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Votre Nom..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full border border-sky-600/30 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="exemple@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              rows={5}
              className="w-full border border-sky-600/30 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Votre Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-400 text-white font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition cursor-pointer"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};
