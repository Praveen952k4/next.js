import AccountProfile from "components/forms/AccountProfile";
import { currentUser } from '@clerk/nextjs/server';

async function Page() {
    const user=await currentUser();
    const userInfo={};
    const userData={
        id: user?.id,
        ObjectId:userInfo?.id,
        username:userInfo?.username||user?.username,
        name: userInfo?.name||user?.firstName||"",
        bio:userInfo?.bio||"",
        image:userInfo?.image|| user?.imageUrl,
    }
    return (
      <main className="min-h-screen bg-gray-800 p-6 flex flex-col items-center justify-start">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">Welcome to Onboarding</h1>
        
        <section className="w-full max-w-2xl bg-black p-6 rounded-lg shadow-md space-y-4">
            <AccountProfile user={userData} btnTitle="Continue" />
        </section>
      </main>
    );
  }
  
  export default Page;
  