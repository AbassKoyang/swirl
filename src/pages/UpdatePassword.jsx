import { useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../../config/supabase";
import { ImSpinner6 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const FORM_ERROR_MESSAGES = {
    PASSWORD_REQUIRED: "Please enter your password.",
    PASSWORD_MIN_LENGTH: "Minimum length of the password should be 8 characters.",
};

const UpdatePassword = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm();
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
          const { data: passwordResetResponse, error } = await supabase.auth.updateUser(
            { password: data.password }
          );
          if(!error){
            console.log("Password updated successfully:", passwordResetResponse);
            navigate('/feed')
          }
          if(error){
            setErrorMessage(error.message || null);
          }
        } catch (error) {
          console.error("Password update error", error);
        } finally {
          setIsLoading(false);
          setTimeout(() => {
            setErrorMessage(null);
          }, 2000);
        }
      };

  return (
    <section className="">
        <h1 className="text-2xl 2xl:text-3xl font-bold font-kumbh text-white text-center">
            Update Password
        </h1>
        <div className={`w-full max-w-72 2xl:max-w-sm flex-col flex`}>
            <p className="text-sm 2xl:text-[16px] text-[#e9e9ef] font-normal max-w-full  my-5 text-center">
                Enter a new password
            </p>

            <form onSubmit={handleSubmit(onSubmit)}  className="w-full flex flex-col gap-3 items-center">
            <div className="w-full">
          <input 
            type="password" 
            name="password" 
            id="password-id" 
            placeholder="Password" 
            className="w-full bg-black/95 rounded-sm 2xl:rounded-md p-3 2xl:p-4 text-sm 2xl:text-[16px] text-white/85 border-0 outline-0 focus-within:outline focus-within:outline-1 focus-within:outline-white/35 overflow-hidden outline-offset-[2px]"
            {...register('password', {
              required: {
                value: true,
                message: FORM_ERROR_MESSAGES.PASSWORD_REQUIRED
              },
              minLength:{
                value: 8,
                message: FORM_ERROR_MESSAGES.PASSWORD_MIN_LENGTH
              }
            })}
            />
            {errors?.password?.message && <p className="text-xs text-left text-red-600 mt-2">{errors?.password?.message}</p>}
          </div>

            <button onClick={handleSubmit(onSubmit)} disabled={!isValid} className="w-full flex items-center justify-center gap-3 px-5 py-2.5 disabled:bg-white/35  disabled:text-gray-400 disabled:cursor-not-allowed bg-white hover:bg-[#FFD11A] rounded-sm text-black hover:text-white text-sm font-bold transition-all duration-200 ease-in-out">
                <p>Update pasword</p>
                {isLoading && <ImSpinner6 className="size-5 animate-spin" />}
            </button>
            <p className="text-xs text-left text-red-600 mt-2">{errorMessage}</p>
        </form>
        </div>
    </section>
  )
}

export default UpdatePassword