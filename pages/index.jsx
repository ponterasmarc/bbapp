import Link from "next/link";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <h2>
        Go to <Link href="/login">Login</Link>
      </h2>
    </>
  );
};

export default Index;
