// app/cart-profile/layout.tsx
export default function CartLayout({ children }: { children: React.ReactNode }) {
    return (
      <section>
        <main>{children}</main>
      </section>
    );
  }