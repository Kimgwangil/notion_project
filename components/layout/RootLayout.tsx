import { PropsWithChildren } from "react";
import Header from "./Header";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <div>Footer</div>
    </>
  );
};

export default RootLayout;