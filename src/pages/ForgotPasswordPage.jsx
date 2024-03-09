import { useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../../config/supabase";
import { ImSpinner6 } from "react-icons/im";

const FORM_ERROR_MESSAGES = {
    EMAIL_REQUIRED: "Please enter your email address.",
    EMAIL_INVALID: "Please enter a valid email address.",
  };

const ForgotPasswordPage = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);




    const onSubmit = async (data) => {
            setIsLoading(true);
            try {
                const { data: passwordResetResponse, error } = await supabase.auth.resetPasswordForEmail( data.email, {
                  redirectTo: 'http://localhost:5173/onboarding/update-password',
                });
                if(!error){
                  console.log("Reset link sent successfully:", passwordResetResponse);
                }
                if(error){
                  setErrorMessage(error.message || null);
                }
              } catch (error) {
                console.error("Password reset error:", error);
              } finally {
                setIsLoading(false);
                setTimeout(() => {
                  setErrorMessage(null);
                }, 20000);
            }
      }

  return (
    <section className="">
        <h1 className="text-2xl 2xl:text-3xl font-bold font-kumbh text-white text-center">
            Reset Password
        </h1>
        <div className={`w-full max-w-72 2xl:max-w-sm flex-col flex`}>
            <p className="text-sm 2xl:text-[16px] text-[#e9e9ef] font-normal max-w-full  my-5 text-center">
                Enter the  email address associated with your account. We will send  a password reset link to this email address if it is associated with an account in our database. The link sent should be openwd on the same device used to request the link.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}  className="w-full flex flex-col gap-3 items-center">
          <div className="w-full">
          <input 
            type="email" 
            name="email" 
            id="email-id" 
            placeholder="Email Address" 
            className="w-full bg-black/95 rounded-sm 2xl:rounded-md p-3 2xl:p-4 text-sm 2xl:text-[16px] text-white/85 border-0 outline-0 focus-within:outline focus-within:outline-1 focus-within:outline-white/35 overflow-hidden outline-offset-[2px]"
            {...register('email', {
              required: {
                value: true,
                message: FORM_ERROR_MESSAGES.EMAIL_REQUIRED
              },
              pattern:{
                value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
                message: FORM_ERROR_MESSAGES.EMAIL_INVALID
              },
            })}
            />
            {errors?.email?.message && <p className="text-xs text-left text-red-600 mt-2">{errors?.email?.message}</p>}
          </div>

            <button onClick={handleSubmit(onSubmit)} disabled={!isValid} className="w-full flex items-center justify-center gap-3 px-5 py-2.5 disabled:bg-white/35  disabled:text-gray-400 disabled:cursor-not-allowed bg-white hover:bg-[#FFD11A] rounded-sm text-black hover:text-white text-sm font-bold transition-all duration-200 ease-in-out">
                <p>Request reset link</p>
                {isLoading && <ImSpinner6 className="size-5 animate-spin" />}
            </button>
            <p className="text-xs text-left text-red-600 mt-2">{errorMessage}</p>
        </form>
        </div>
    </section>
  )
}
export default ForgotPasswordPage