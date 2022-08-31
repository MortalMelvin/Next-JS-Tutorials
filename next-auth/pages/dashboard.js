import {useSession, signIn} from 'next-auth/react'

function Dashboard() {
    const {status} = useSession();
    if (status === 'loading') {
        return <h2>Loading...</h2>
    }
    if (status === 'unauthenticated') {
        return <h2>Access Denied</h2>
    }

    return (
        <>
            <h1>Protected page</h1>
            <p>You can view Dashboard Page, because you are Signed In</p>
        </>
    )
}

export default Dashboard
