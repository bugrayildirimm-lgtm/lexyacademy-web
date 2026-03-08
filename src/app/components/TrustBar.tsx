import s from "./styles.module.css";

const industries = [
  "Online Gaming", "Finance & Banking", "Fintech", "Real Estate",
  "Crypto & Web3", "Insurance", "iGaming Operators", "Payment Providers",
];

export default function TrustBar() {
  return (
    <div className={s.trustbar}>
      <div className={s.trustbarInner}>
        <div className={s.barLine} />
        <span>Trusted across industries</span>
      </div>
      <div className={s.marqueeWrap}>
        <div className={s.marqueeTrack}>
          {[...industries, ...industries].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
