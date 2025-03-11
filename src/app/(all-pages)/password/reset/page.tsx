import ResetStepTwoForm from "@/app/pageComponents/passwordResetPage/ResetStepTwoForm";

export default function PasswordResetPage({ searchParams }: any) {
  const { token, email } = searchParams;
  return (
    <div>
      <div>
        <ResetStepTwoForm
          data={{
            token,
            email,
          }}
        />
      </div>
    </div>
  );
}
