import Card from "components/card/Card";

const User = ({ user, years, totals, prizes, theme }) => (
  <Card avatarUrl={user.img} title={user.label} theme={theme}>
    <Card.Info title="Years" text={years} />
    <Card.Info title="Totals" text={totals} />
    <Card.Info
      title="Price"
      lines={prizes.map((prize) => ({
        label: prize.description,
        value: prize.price
      }))}
    />
  </Card>
);

export default User;
