export default function ImageDisplay(gambar) {
  return (
    <div className="image-display">
      <img src={gambar.src} alt={gambar.alt} />
    </div>
  );
}
