export function DottedBox() {
  return (
    <svg color={"rgba(55,65,81, 0.1)"} width="350" height="420" fill="none">
      <defs>
        <pattern
          id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
        </pattern>
      </defs>
      <rect
        width="404"
        height="404"
        fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
      ></rect>
    </svg>
  );
}
