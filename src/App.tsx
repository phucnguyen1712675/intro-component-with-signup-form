import { Form, FormInput } from 'components';
import { useFormWithSchema } from 'hooks';
// import { FieldErrors } from 'react-hook-form';
import * as yup from 'yup';

export const signUpSchema = yup
  .object({
    firstName: yup.string().required('First Name cannot be empty'),
    lastName: yup.string().required('Last Name cannot be empty'),
    email: yup
      .string()
      .email('Looks like this is not an email')
      .required('Email cannot be empty'),
    password: yup
      .string()
      .required('Password cannot be empty')
      .min(8, 'Password must be at least 8 characters long'),
  })
  .required();

type SignUpSchema = typeof signUpSchema;

type SignUpPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

// function getTypedKeys<T>(obj: T): Array<keyof T> {
//   return Object.keys(obj) as Array<keyof typeof obj>;
// }

function App() {
  const methods = useFormWithSchema(signUpSchema);

  const onSubmit = (data: SignUpPayload) => {
    console.log(data);
  };

  return (
    <main className="min-h-screen w-full bg-primary-red bg-intro-mobile bg-cover bg-fixed bg-no-repeat lg:bg-intro-desktop">
      <div className="height-screen flex flex-col gap-y-20 overflow-auto px-10 pb-20 lg:mx-auto lg:h-screen lg:w-3/4 lg:flex-row lg:items-center lg:p-0">
        <div className="lg:basis-0 mt-[5.5rem] flex flex-col items-stretch gap-y-6 lg:mt-0 lg:flex-grow">
          <h1 className="mx-auto w-4/5 text-center text-2xl font-bold text-white lg:mx-0 lg:w-4/5 lg:text-left lg:text-5xl lg:leading-[1.2]">
            Learn to code by watching others
          </h1>
          <p className="text-center text-sm text-white lg:w-11/12 lg:text-left lg:text-base lg:leading-loose">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="lg:basis-0 flex flex-col items-stretch gap-y-6 lg:flex-grow">
          <div className="mt-1 flex justify-center rounded-lg bg-accent-blue px-8 py-6 text-center text-white shadow-[0_8px_0_0_rgba(0,0,0,0.2)] lg:mt-0">
            <span className="mx-auto w-3/4 text-sm">
              <span className="font-semibold">Try it free 7 days</span> then
              $20/mo. thereafter
            </span>
          </div>
          <Form<SignUpSchema> methods={methods} onSubmit={onSubmit}>
            <FormInput<SignUpPayload> id="firstName" placeholder="First Name" />
            <FormInput<SignUpPayload> id="lastName" placeholder="Last Name" />
            <FormInput<SignUpPayload>
              id="email"
              type="email"
              placeholder="Email Address"
              errorPlaceholder="email@example/com"
            />
            <FormInput<SignUpPayload>
              id="password"
              type="password"
              placeholder="Password"
            />
            <div className="flex flex-col items-stretch gap-y-4">
              <button
                className="rounded-md bg-primary-green p-4 text-sm uppercase text-white shadow-[0_4px_0_0_hsl(154,59%,45%)] transition-all hover:brightness-120 lg:text-base"
                type="submit"
              >
                Claim your free trial
              </button>
              <p className="mx-auto w-10/12 text-center text-[0.55rem] font-medium text-accent-blue/60 lg:w-full lg:text-[0.7rem]">
                By clicking the button, you are agreeing to our{' '}
                <span className="font-bold text-primary-red">
                  Terms and Services
                </span>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default App;
