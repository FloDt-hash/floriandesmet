import React from "react";

export default function PrimaryButton({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="button-border-wrap">
      <button className="call-to-action">
        {children}{" "}
        <span className="material-symbols-outlined">arrow_outward</span>
      </button>
    </div>
  );
}
