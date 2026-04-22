import "@/app/globals.css"; // هذي العلامة @ معناها "روح للمجلد الرئيسي وجب الملف"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}