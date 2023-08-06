import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import DeleteAccDialog from '@/src/components/DeleteAccDialog';
import { getProvider } from '@/src/lib/getProvider';
import getEmail from '@/src/lib/getEmail';


export default withPageAuthRequired(async function Account() {
    const session = await getSession();
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-16">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-10">
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold text-gray-900">Account</h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Hi, {session?.user.name || session?.user.email}
                        </p>
                    </div>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Profile Details</h2>
                            <p>Name: {session?.user.name}</p>
                            <p>Email: {getEmail(session)}</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Account Provider</h2>
                            <div className="text-[#17B890]">Provider: {getProvider(session)}</div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Actions</h2>
                            <DeleteAccDialog />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}, { returnTo: '/account' });
