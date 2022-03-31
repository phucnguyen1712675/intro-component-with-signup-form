import { ReactNode } from 'react';
import {
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  SubmitErrorHandler,
} from 'react-hook-form';
import * as Yup from 'yup';
import clsx from 'clsx';

type Props<T extends Yup.AnyObjectSchema> = {
  children: ReactNode;
  methods: UseFormReturn<Yup.Asserts<T>>;
  onSubmit: SubmitHandler<Yup.Asserts<T>>;
  onError?: SubmitErrorHandler<Yup.Asserts<T>>;
  className?: string;
};

const Form = <T extends Yup.AnyObjectSchema>({
  children,
  methods,
  onSubmit,
  onError,
  className,
}: Props<T>) => {
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={clsx(
          'flex flex-col gap-y-4 rounded-lg bg-white p-6 shadow-[0_8px_0_0_rgba(0,0,0,0.2)] lg:p-10',
          className
        )}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
