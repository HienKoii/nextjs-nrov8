import HeroAvatar from "./HeroAvatar";

export default function Hero() {
  return (
    <div className="container-nro hero pb-3">
      <div className="hero-card">
        <img src="https://ngocrongonline.com/images/4rum_280x90.png" alt="Hero Background" className="hero-background" />

        <div className="hero-overlay" />

        <div className="hero-login">
          <HeroAvatar />
        </div>
      </div>
    </div>
  );
}
