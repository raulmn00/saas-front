export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <ul>
          <li>01</li>
          <li>01</li>
          <li>01</li>
          <li>01</li>
        </ul>
      </nav>

      {children}
    </section>
  );
}
