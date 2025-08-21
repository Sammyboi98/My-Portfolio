import React from "react";

type Props = {
  className?: string;
};

const ContactBg: React.FC<Props> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 1059"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M-44.5159 495.2C1168.02 1095.17 1440 0 1440 0V1059H0.469482C0.469482 1059 -1257.05 -104.774 -44.5159 495.2Z"
        fill="#050A30"
      />
    </svg>
  );
};

export default ContactBg;
