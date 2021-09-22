export default function VectorFanShape(props) {
  return (
    <svg viewBox="0 0 105.077 150.435" height="50mm" width="75mm">
      <path
        d="M105.077 52.539c0 29.016-27.771 97.896-52.538 97.896C27.772 150.435 0 81.555 0 52.539 0 23.522 23.522 0 52.539 0c29.016 0 52.538 23.522 52.538 52.539z"
        opacity={0.99}
        fill={props.color}
        paintOrder="stroke fill markers"
      />
    </svg>
  );
}
