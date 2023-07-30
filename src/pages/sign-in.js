import { Button } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();

  const { callbackUrl } = router.query;
  //   console.log({ callbackUrl });
  const handleGitHubAuth = () => {
    // Implement GitHub authentication logic here
    // Redirect the user to the GitHub authentication page
    signIn("github", {
      callbackUrl: callbackUrl,
    });
  };
  const handleGoogleAuth = () => {
    // Implement Google authentication logic here
    // Redirect the user to the Google authentication page
  };
  return (
    <div className="flex align-middle h-screen">
      <div
        style={{ border: "1px solid rgb(219 219 219)" }}
        className="flex flex-col items-center justify-center py-16  rounded w-80 mx-auto shadow-lg my-auto"
      >
        <h1 className="text-center">Login</h1>
        <Button
          type="primary"
          className="mb-4 bg-slate-900"
          onClick={handleGitHubAuth}
        >
          Sign in with GitHub
        </Button>
        {/* <Button onClick={handleGoogleAuth}>Sign in with Google</Button> */}
      </div>
    </div>
  );
};

export default SignIn;
