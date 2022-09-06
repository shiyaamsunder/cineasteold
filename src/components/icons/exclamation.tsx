import { getIconColor } from "@utils";

export const ExclamationIcon = ({
  width = 24,
  height = 24,
  color = "currentColor",
}: {
  width?: number;
  height?: number;
  color?: "currentColor" | "danger" | "success" | "warning";
}) => {
  return (
    <svg
      fill="none"
      stroke={getIconColor(color)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
       />
    </svg>
  );
};
