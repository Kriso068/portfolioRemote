// export const Button = ({className ="", size= "default", children, ...props}) => {

//     const baseClasses = "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

//     const sizeClasses = {
//         sm: "px-4 py-2 text-sm",
//         default: "px-6 py-3 text-base",
//         lg: "px-8 py-4 text-lg",
//     };
//     const classes = `${className} ${baseClasses} ${sizeClasses[size]}`;

//     return  <button className={classes} {...props}>
//                 <span className="relative flex items-center justify-center gap-2">
//                     {children}
//                 </span>
//             </button>
// }

export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  target,
  rel,
  type,
  ...props
}) => {
  const baseClasses =" w-full inline-flex items-center justify-center relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${className} ${baseClasses} ${sizeClasses[size]}`;

  // If href is provided, render an anchor (<a>)
  if (href) {
    const safeRel =
      target === "_blank"
        ? rel || "noopener noreferrer"
        : rel;

    return (
        <div>
            <a href={href} target={target} rel={safeRel} className={classes} {...props}>
                <span className="relative flex items-center justify-center gap-2">
                {children}
                </span>
            </a>
        </div>
    );
  }

  // Otherwise render a button
  return (
    <button type={type || "button"} className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2 ">
        {children}
      </span>
    </button>
  );
};
