import classNames from "classnames";

export default function Panel({ children, className, ...rest }) {
  const finalCLassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalCLassNames}>
      {children}
    </div>
  );
}
