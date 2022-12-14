import { useSession, signIn, signOut } from "next-auth/react";

export default function User({className}){
    const {data:session} = useSession();

    if(session){
        return(
            <>
                <img onClick={signOut} src={session.user.image}alt="user-image" className={`after:h-12 w-12 rounded-full hover:bg-gray-600 cursor-pointer p-1 ${className}`}/>
            </>
        )
    }
    return(
        <>
        <button className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`} onClick={signIn}>Sign in</button>
        </>
    )
}