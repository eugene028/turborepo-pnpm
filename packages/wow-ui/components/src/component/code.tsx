import React from "react";

const Code = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
})=> {
  return <code className={className}>{children}</code>;
}

export default Code