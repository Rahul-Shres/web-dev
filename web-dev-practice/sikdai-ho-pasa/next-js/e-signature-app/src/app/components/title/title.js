export default function title({ text, classes }) {
  return (
    <h1 className={!classes ? (className = "text-5xl") : classes}>{text}</h1>
  );
}
