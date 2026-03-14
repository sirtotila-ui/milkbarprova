import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Dove siete?",
    a: "Via delle Industrie 9, Ravenna. Di fronte al Parco Teodorico, zona ex Ca' Rossa. Non puoi sbagliare.",
  },
  {
    q: "Servono prenotazioni?",
    a: "Per il bar no, vieni quando vuoi. Per serate speciali e tornei ti consigliamo di prenotare su WhatsApp.",
  },
  {
    q: "C'è il Wi-Fi?",
    a: "Sì, Wi-Fi veloce e gratuito. Perfetto per studiare o lavorare nella sala dedicata.",
  },
  {
    q: "Fate serate a tema?",
    a: "Sì. Musica dal vivo il martedì, aperitivo-sushi il giovedì, tornei di biliardo e FIFA durante la settimana. Segui @milkravenna per restare aggiornato.",
  },
  {
    q: "Si può prenotare per feste private?",
    a: "Sì. Scrivici su WhatsApp per organizzare feste, compleanni o eventi privati. Abbiamo lo spazio e la voglia.",
  },
];

const SERVIZI = [
  { titolo: "Colazione", tagline: "Caffè, cappuccini, brioche" },
  { titolo: "Pranzo", tagline: "Panini, piadine, piatti del giorno" },
  { titolo: "Aperitivo & Cocktail", tagline: "Originali e classici" },
  { titolo: "Biliardo & Giochi", tagline: "Biliardino, carte, giochi di società" },
  { titolo: "PlayStation & Tornei", tagline: "PS5, FIFA, serate gaming" },
  { titolo: "Sala Studio", tagline: "Insonorizzata, Wi‑Fi, silenzio" },
];

const GALLERY_PLACEHOLDERS = [
  "[Bancone bar con macchina del caffè]",
  "[Sala con biliardo e luci neon]",
  "[Area PlayStation e gaming]",
  "[Dehors esterno coperto]",
  "[Cocktail serviti al bancone]",
  "[Sala studio insonorizzata]",
];

const RECENSIONI = [
  { testo: "Il mio bar preferito a Ravenna. Caffè ottimo, ambiente super accogliente, biliardo e PlayStation. Ci passo i pomeriggi. Anzi le giornate.", nome: "Alessio M.", piattaforma: "Google", stelle: "5" },
  { testo: "Locale spazioso e curato, personale gentile. I cocktail hanno nomi pazzeschi e sono pure buoni. La sala studio è un'idea geniale. Top.", nome: "Chiara R.", piattaforma: "Google", stelle: "5" },
  { testo: "Finalmente un bar diverso a Ravenna. Non il solito bar da colazione e via. Qui ci torni, ci stai, ci vivi. E il caffè è buono per davvero.", nome: "Marco T.", piattaforma: "Google", stelle: "5" },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        .milk-app * { box-sizing: border-box; }
        .milk-app { font-family: 'Outfit', sans-serif; background: #0A0A0A; color: rgba(255,255,255,0.6); font-size: clamp(16px, 2vw, 17px); line-height: 1.6; }
        .milk-app h1, .milk-app h2, .milk-app .font-heading { font-family: 'Outfit', sans-serif; font-weight: 700; color: #FFFFFF; }
        .milk-app section { padding: clamp(48px, 10vw, 80px) clamp(16px, 5vw, 24px); max-width: 1200px; margin: 0 auto; }
        .milk-app .btn { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 12px 24px; border-radius: 12px; font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 15px; text-decoration: none; transition: background 0.3s ease, border-color 0.3s ease; cursor: pointer; border: none; }
        .milk-app .btn-primary { background: #3C43BF; color: #FFFFFF; }
        .milk-app .btn-primary:hover { background: #4B52D4; }
        .milk-app .btn-outline { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: #FFFFFF; }
        .milk-app .btn-outline:hover { border-color: rgba(255,255,255,0.35); }
        .nav-links-desktop { display: flex; align-items: center; gap: clamp(16px, 4vw, 32px); flex-wrap: wrap; }
        .nav-hamburger { display: none; background: none; border: none; padding: 8px; cursor: pointer; color: #fff; }
        .nav-dropdown { display: none; position: absolute; top: 100%; left: 0; right: 0; background: rgba(10,10,10,0.98); backdrop-filter: blur(16px); flex-direction: column; padding: 16px; gap: 8px; border-bottom: 1px solid rgba(60,67,191,0.1); }
        .nav-dropdown.open { display: flex; }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none; }
          .nav-hamburger { display: flex; flex-direction: column; gap: 5px; }
        }
        @media (min-width: 769px) {
          .nav-dropdown { display: none !important; }
        }
      `}</style>

      <div className="milk-app">
        {/* Navbar */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "rgba(10,10,10,0.9)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(60,67,191,0.1)",
            padding: "12px clamp(16px, 5vw, 24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ fontFamily: "Outfit", fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>Milk</div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", letterSpacing: "2px" }}>Coffee & Friends</div>
          </a>
          <div className="nav-links-desktop">
            <a href="#chi-siamo" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Chi Siamo</a>
            <a href="#menu" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Menù</a>
            <a href="#locale" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Il Locale</a>
            <a href="#contatti" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Contatti</a>
            <a href="https://wa.me/393312854897?text=Ciao,%20vorrei%20prenotare!" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Prenota</a>
          </div>
          <button type="button" className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
            <span style={{ display: "block", width: "24px", height: "2px", background: "#fff" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "#fff" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: "#fff" }} />
          </button>
          <div className={`nav-dropdown ${menuOpen ? "open" : ""}`}>
            <a href="#chi-siamo" style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", textDecoration: "none", padding: "10px 0" }} onClick={() => setMenuOpen(false)}>Chi Siamo</a>
            <a href="#menu" style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", textDecoration: "none", padding: "10px 0" }} onClick={() => setMenuOpen(false)}>Menù</a>
            <a href="#locale" style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", textDecoration: "none", padding: "10px 0" }} onClick={() => setMenuOpen(false)}>Il Locale</a>
            <a href="#contatti" style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", textDecoration: "none", padding: "10px 0" }} onClick={() => setMenuOpen(false)}>Contatti</a>
            <a href="https://wa.me/393312854897?text=Ciao,%20vorrei%20prenotare!" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={{ marginTop: "8px", width: "100%", maxWidth: "200px" }} onClick={() => setMenuOpen(false)}>Prenota</a>
          </div>
        </nav>

        {/* Hero */}
        <section style={{
          backgroundImage: "linear-gradient(rgba(10,10,10,0.6), rgba(10,10,10,0.7)), url('/hero-bg.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingTop: "clamp(60px, 12vw, 100px)",
          paddingBottom: "clamp(48px, 10vw, 72px)",
        }}>
          <h1 style={{ fontSize: "clamp(48px, 10vw, 80px)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 4px 0", lineHeight: 1.1 }}>Milk.</h1>
          <h1 style={{ fontSize: "clamp(48px, 10vw, 80px)", fontWeight: 700, color: "#3C43BF", margin: "0 0 24px 0", lineHeight: 1.1 }}>Coffee & Friends.</h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", maxWidth: "520px", lineHeight: 1.8, marginBottom: "32px" }}>
            Colazioni stellari, pranzi veloci, aperitivi galattici. Biliardo, PlayStation, sala studio. Il tuo rifugio a Ravenna, dalle 8 a mezzanotte.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "48px" }}>
            <a href="https://wa.me/393312854897?text=Ciao,%20vorrei%20prenotare!" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Prenota il Tavolo</a>
            <a href="#menu" className="btn btn-outline">Guarda il Menù</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "24px", maxWidth: "400px" }}>
            <div><span style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF" }}>4.8</span><br /><span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>Google</span></div>
            <div><span style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF" }}>8-00</span><br /><span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>Orario</span></div>
            <div><span style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF" }}>2024</span><br /><span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>Dal</span></div>
          </div>
        </section>

        {/* Chi Siamo */}
        <section id="chi-siamo" style={{ background: "#111111" }}>
          <p style={{ fontSize: "11px", color: "#3C43BF", letterSpacing: "2px", marginBottom: "8px" }}>CHI SIAMO</p>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 4px 0" }}>Non È Solo Un Bar.</h2>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: 700, color: "#3C43BF", margin: "0 0 24px 0" }}>È Casa Tua.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", alignItems: "center" }}>
            <p style={{ fontSize: "clamp(16px, 2vw, 17px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
              Milk nasce nel 2024 da un sogno: creare un posto a Ravenna dove stare bene davvero. Non il solito bar dove prendi il caffè e scappi. Un posto dove fai colazione con calma, studi nel silenzio della sala dedicata, giochi a biliardo con gli amici, guardi la partita, ti godi un aperitivo galattico e rimani fino a mezzanotte. Siamo di fronte al Parco Teodorico, e il nostro logo — un UFO che illumina la scritta Milk — racconta chi siamo: un posto che unisce terra e stelle, quotidianità e magia.
            </p>
            <img src="/milk-sala.jpg" alt="Sala Milk con poltrone, biliardo e luci calde" style={{ width: "100%", borderRadius: "16px", aspectRatio: "4/3", objectFit: "cover", border: "1px solid rgba(60,67,191,0.08)" }} />
          </div>
        </section>

        {/* Cosa Facciamo */}
        <section style={{ background: "#0A0A0A" }}>
          <p style={{ fontSize: "11px", color: "#3C43BF", letterSpacing: "2px", marginBottom: "8px" }}>COSA FACCIAMO</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 32px 0" }}>Dal Caffè al Cocktail. E Tutto Quello in Mezzo.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {SERVIZI.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: "3px solid #3C43BF",
                  borderRadius: "12px",
                  padding: "24px 24px 24px 28px",
                }}
              >
                <h3 style={{ fontWeight: 600, color: "#FFFFFF", margin: "0 0 6px 0", fontSize: "17px", letterSpacing: "0.02em" }}>{s.titolo}</h3>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.45)", fontSize: "14px", lineHeight: 1.5 }}>{s.tagline}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Menù */}
        <section id="menu" style={{ background: "#111111" }}>
          <p style={{ fontSize: "11px", color: "#3C43BF", letterSpacing: "2px", marginBottom: "8px" }}>IL MENÙ</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 16px 0" }}>Il nostro menù</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "28px", maxWidth: "480px", lineHeight: 1.6 }}>Colazioni, pranzi, cocktail e drink. Scarica il PDF e sfoglia quando vuoi.</p>
          <a href="/menu-milk.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ minWidth: "200px" }}>Apri il menù (PDF)</a>
        </section>

        {/* Il Locale */}
        <section id="locale" style={{ background: "#0A0A0A" }}>
          <p style={{ fontSize: "11px", color: "#3C43BF", letterSpacing: "2px", marginBottom: "8px" }}>IL LOCALE</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 32px 0" }}>La Tua Base Spaziale.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {GALLERY_PLACEHOLDERS.map((text, i) => (
              <div
                key={i}
                style={{
                  background: "#1A1A1A",
                  borderRadius: "12px",
                  aspectRatio: "4/3",
                  border: "1px solid rgba(60,67,191,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.3)",
                  fontSize: "13px",
                  textAlign: "center",
                  padding: "12px",
                  overflow: "hidden",
                }}
              >
                {text === "[Bancone bar con macchina del caffè]" ? (
                  <img src="/milk-bancone.jpg" alt="Bancone bar con macchina del caffè" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : text === "[Sala con biliardo e luci neon]" ? (
                  <img src="/milk-sala-neon.jpg" alt="Sala con biliardo e luci neon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : text === "[Area PlayStation e gaming]" ? (
                  <img src="/milk-locale-burgers.jpg" alt="Area e cucina" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : text === "[Dehors esterno coperto]" ? (
                  <img src="/milk-locale-dehors.jpg" alt="Dehors esterno coperto" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : text === "[Cocktail serviti al bancone]" ? (
                  <img src="/milk-locale-drink.jpg" alt="Cocktail e drink" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : text === "[Sala studio insonorizzata]" ? (
                  <img src="/milk-locale-appetizers.jpg" alt="Aperitivi e stuzzichini" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  text
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recensioni */}
        <section style={{ background: "#111111" }}>
          <p style={{ fontSize: "11px", color: "#3C43BF", letterSpacing: "2px", marginBottom: "8px" }}>RECENSIONI</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 32px 0" }}>Cosa Dicono di Noi.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {RECENSIONI.map((r, i) => (
              <div
                key={i}
                style={{
                  background: "#0A0A0A",
                  borderLeft: "3px solid #3C43BF",
                  borderRadius: "12px",
                  padding: "28px",
                }}
              >
                <p style={{ margin: "0 0 16px 0", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>"{r.testo}"</p>
                <p style={{ margin: 0, color: "#FFFFFF", fontWeight: 600 }}>{r.nome}</p>
                <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>{r.stelle} — {r.piattaforma}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Orari e Contatti */}
        <section id="contatti" style={{ background: "#0A0A0A" }}>
          <p style={{ fontSize: "11px", color: "#3C43BF", letterSpacing: "2px", marginBottom: "8px" }}>DOVE SIAMO</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 32px 0" }}>Vieni a Trovarci.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", alignItems: "start" }}>
            <div>
              <p style={{ margin: "0 0 8px 0", color: "rgba(255,255,255,0.6)" }}>📍 Via delle Industrie 9, Ravenna</p>
              <p style={{ margin: "0 0 20px 0", fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>Di fronte al Parco Teodorico</p>
              <p style={{ margin: "0 0 8px 0" }}><a href="tel:+393312854897" style={{ color: "#3C43BF", fontSize: "20px", fontWeight: 600, textDecoration: "none" }}>📞 331 285 4897</a></p>
              <p style={{ margin: "0 0 8px 0" }}><a href="mailto:milkravenna@gmail.com" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>📧 milkravenna@gmail.com</a></p>
              <p style={{ margin: "0 0 24px 0" }}>📱 Instagram: <a href="https://instagram.com/milkravenna" target="_blank" rel="noopener noreferrer" style={{ color: "#3C43BF", textDecoration: "none" }}>@milkravenna</a></p>
              <p style={{ margin: "0 0 8px 0", color: "rgba(255,255,255,0.6)" }}><strong style={{ color: "#FFFFFF" }}>Orari:</strong></p>
              <p style={{ margin: "0 0 24px 0", color: "rgba(255,255,255,0.6)" }}>Lun-Dom: 8:00 - 00:00</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <a href="https://wa.me/393312854897?text=Ciao,%20vorrei%20prenotare!" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Prenota su WhatsApp</a>
                <a href="tel:+393312854897" className="btn btn-outline" style={{ borderColor: "#3C43BF", color: "#3C43BF" }}>Chiama</a>
              </div>
            </div>
            <div style={{ background: "#111111", borderRadius: "12px", overflow: "hidden", aspectRatio: "4/3", minHeight: "280px" }}>
              <iframe
                src="https://www.google.com/maps?q=Via+delle+Industrie+9,+48110+Ravenna+RA,+Italy&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Milk - Coffee & Friends, Via delle Industrie 9 Ravenna"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: "#111111" }}>
          <p style={{ fontSize: "11px", color: "#3C43BF", letterSpacing: "2px", marginBottom: "8px" }}>FAQ</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, color: "#FFFFFF", margin: "0 0 24px 0" }}>Domande Frequenti</h2>
          <div style={{ maxWidth: "700px" }}>
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                style={{
                  borderLeft: openFaq === i ? "2px solid #3C43BF" : "2px solid transparent",
                  marginBottom: "8px",
                  background: openFaq === i ? "rgba(60,67,191,0.05)" : "transparent",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "20px 20px 20px 16px",
                    textAlign: "left",
                    background: "transparent",
                    border: "none",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {item.q}
                  <span style={{ fontSize: "20px", color: "#3C43BF" }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 20px 20px 48px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "15px" }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{ background: "#050505", padding: "clamp(40px, 8vw, 64px) clamp(16px, 5vw, 24px)", borderTop: "1px solid rgba(60,67,191,0.1)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ fontSize: "22px", fontWeight: 700, color: "#FFFFFF" }}>Milk</div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", letterSpacing: "2px", marginBottom: "24px" }}>Coffee & Friends</div>
            <p style={{ margin: "0 0 8px 0", color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>Instagram <a href="https://instagram.com/milkravenna" target="_blank" rel="noopener noreferrer" style={{ color: "#3C43BF", textDecoration: "none" }}>@milkravenna</a> · <a href="https://facebook.com/MilkCoffeeAndFriends" target="_blank" rel="noopener noreferrer" style={{ color: "#3C43BF", textDecoration: "none" }}>Facebook</a></p>
            <p style={{ margin: "0 0 8px 0", color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>Via delle Industrie 9, Ravenna · 331 285 4897 · milkravenna@gmail.com</p>
            <p style={{ margin: "0 0 24px 0", color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>Lun-Dom 8:00-00:00</p>
            <p style={{ margin: "0 0 8px 0", color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>© 2026 Milk - Coffee & Friends — Via delle Industrie 9, Ravenna</p>
            <p style={{ margin: "0 0 24px 0", color: "rgba(255,255,255,0.3)", fontSize: "12px", maxWidth: "560px" }}>Questo sito non utilizza cookie di profilazione. Vengono utilizzati esclusivamente cookie tecnici necessari al funzionamento del sito.</p>
            <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.12)" }}>
              Sito realizzato da <a href="https://ecfmedia.it" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.12)", textDecoration: "none" }}>ECF Media</a>
            </p>
          </div>
        </footer>

        {/* WhatsApp fisso */}
        <a
          href="https://wa.me/393312854897?text=Ciao,%20vorrei%20prenotare!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Prenota su WhatsApp"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 1000,
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>
    </>
  );
}
