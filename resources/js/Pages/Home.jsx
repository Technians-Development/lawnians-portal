import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FrontendLayout from '@/Layouts/FrontendLayout';

export default function home({ auth }) {
    return (
        <FrontendLayout>
            <Head title="Home" />

            <div className="py-24">
                <h1>This is home Page</h1>
            </div>
            </FrontendLayout>
    );
}
