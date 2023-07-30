import { setAuthModalOpen } from "@/redux/features/user/user.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button, Modal } from "antd";
import { signIn } from "next-auth/react";

const LoginSection = () => {
  const dispatch = useAppDispatch();
  const { authModalOpen } = useAppSelector((state) => state.user);
  const handleGitHubAuth = () => {
    // Implement GitHub authentication logic here
    // Redirect the user to the GitHub authentication page
    signIn("github");
  };

  const handleGoogleAuth = () => {
    // Implement Google authentication logic here
    // Redirect the user to the Google authentication page
  };
  console.log({ authModalOpen });
  return (
    <Modal
      title={<p className="text-center text-xl m-0 p-1">Login</p>}
      open={authModalOpen}
      onCancel={() => dispatch(setAuthModalOpen(false))}
      width={270}
      footer={false}
    >
      <div className="flex flex-col items-center justify-center py-6">
        <Button
          type="primary"
          className="mb-4 bg-slate-900"
          onClick={handleGitHubAuth}
        >
          Sign in with GitHub
        </Button>
        {/* <Button onClick={handleGoogleAuth}>Sign in with Google</Button> */}
      </div>
    </Modal>
  );
};

export default LoginSection;
