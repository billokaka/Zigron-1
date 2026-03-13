"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, fontFamily: "-apple-system, system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F2F2F2",
            padding: "24px",
          }}
        >
          <div style={{ textAlign: "center", maxWidth: "400px" }}>
            <h1 style={{ fontSize: "48px", color: "#C0272D", marginBottom: "16px" }}>
              Critical Error
            </h1>
            <p style={{ color: "#666", marginBottom: "32px" }}>
              A critical error occurred. Please try refreshing the page.
            </p>
            <button
              type="button"
              onClick={reset}
              style={{
                backgroundColor: "#C0272D",
                color: "white",
                fontWeight: "bold",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
