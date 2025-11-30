export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 mt-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Neural Hive. All systems operational.
        </p>
      </div>
    </footer>
  );
}