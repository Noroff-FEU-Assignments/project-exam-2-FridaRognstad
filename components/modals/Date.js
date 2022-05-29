export default function DatePicker({ date }) {
  date = checkin.value + checkout.value;
  return (
    <div>
      <input id="checkin" type="date" />
      <input id="checkout" type="date" />
    </div>
  );
}
