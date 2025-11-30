//Main Component

function App() {
  // Burası TypeScript Alanı
  const username: string = "Okcain";
  const appVersion: number = 1.0;

  // JSX (Görsel Alan) Alanı: Burada HTML benzeri yapılar kullanılır
  return (
    <div style={{ padding: "20px", fontFamily: "Arial"}}>
      <h1>Hello React! 👋</h1>

      {/* Süslü parantezler ile TypeScript değişkenlerini JSX içinde kullanabiliriz */}
      <p>Welcome back, <strong>{username}</strong>.</p>

      <p>Running App Version: {appVersion}</p>

      <button>Click Me (Not active yet)</button>
    </div>
  );
}

export default App;