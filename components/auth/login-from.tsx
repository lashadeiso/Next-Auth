import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <div>
      <CardWrapper
        headerLabel="Welcom back"
        backButtonLabel="Dont have an account?"
        backButtonHref="/auth/register"
        showSocial
      >
        Login Form!
      </CardWrapper>
    </div>
  );
};
