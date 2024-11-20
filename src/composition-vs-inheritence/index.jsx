export function FancyBorder({ children }) {
  return <div className={"FancyBorder FancyBorder-"}>{children}</div>;
}

export function Dialog({ title, message }) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{title}</h1>
      <p className="Dialog-message">{message}</p>
    </FancyBorder>
  );
}

export function WelcomeDialog() {
  return (
    <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
  );
}
