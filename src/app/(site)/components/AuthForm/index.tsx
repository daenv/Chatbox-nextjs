'use client';

import Input from '@/app/components/Inputs/Input';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type Variant = 'LOGIN' | 'REGISTER';
const AuthForm = () => {
   const sesstion = useSession();
   const router = useRouter();
   const [variant, setVariant] = useState<Variant>('LOGIN');
   const [loading, setLoading] = useState(false);



   return (
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
         <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={() => {}}>
               {variant === 'REGISTER' /* && <Input /> */}
            </form>
         </div>
      </div>
   );
};

export default AuthForm;
