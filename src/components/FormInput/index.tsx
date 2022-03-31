import { ReactComponent as IconError } from 'assets/images/icon-error.svg';
import clsx from 'clsx';
import { HTMLInputTypeAttribute } from 'react';
import { Path, useFormContext } from 'react-hook-form';

type Props<TFormValues> = {
  id: Path<TFormValues>;
  validation?: object;
  className?: string;
  placeholder?: string;
  errorPlaceholder?: string;
  type?: HTMLInputTypeAttribute;
  readOnly?: boolean;
};

const FormInput = <TFormValues extends Record<string, unknown>>({
  id,
  validation,
  className,
  placeholder,
  errorPlaceholder,
  type = 'text',
  readOnly = false,
}: Props<TFormValues>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[id];

  return (
    <div className="flex flex-col items-stretch gap-y-2">
      <div className="relative">
        <input
          className={clsx(
            `focus:outline-none w-full rounded-lg border-2 border-neutral-grayish-blue/10 p-4 text-sm font-semibold text-neutral-grayish-blue placeholder:text-sm placeholder:font-semibold focus:ring-0 lg:px-8 ${
              !error
                ? 'caret-accent-blue placeholder:text-neutral-grayish-blue/70 placeholder:brightness-95 focus:border-accent-blue/70'
                : 'caret-primary-red placeholder:text-primary-red focus:border-primary-red'
            }`,
            className
          )}
          {...register(id, validation)}
          type={type}
          name={id}
          id={id}
          readOnly={readOnly}
          placeholder={!error ? placeholder : errorPlaceholder}
          aria-describedby={id}
        />
        {error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 lg:pr-6">
            <IconError />
          </div>
        )}
      </div>
      {error && (
        <div className="text-right text-[0.6rem] font-medium italic text-primary-red brightness-95 lg:text-xs">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default FormInput;
