import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

// Rest of the code...

const paragraphVariants = cva(
  // Here we are creating the basic form or appearance of our jutsu.
  // It includes styles for maximum width, text color, margin, and alignment.
  'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
  {
    // We are defining variations of our jutsu using the "size" variant.
    // It can have two forms: "default" and "sm" (small).
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm sm:text-base'
      }
    },
    // This specifies the default form of our jutsu.
    // If no size variant is provided, it will default to "default" size.
    defaultVariants: {
      size: 'default'
    }
  }
);

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement>,
 VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => {
  const { className, ...rest } = props;
  const variantClasses = paragraphVariants(rest);

  return <p className={`${className} ${variantClasses}`} {...rest} ref={ref} />;
});

// Set the display name for the Paragraph component
Paragraph.displayName = 'Paragraph';

export default Paragraph;
