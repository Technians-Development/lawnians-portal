import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FrontendLayout from '@/Layouts/FrontendLayout';

export default function contact({ auth }) {
    return (
        <FrontendLayout>
            <Head title="Contact" />

            <div className="py-24">
                <h1>This is Contact Page</h1>
            </div>
            </FrontendLayout>
    );
}
