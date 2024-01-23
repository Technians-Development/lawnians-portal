import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import FrontendLayout from '@/Layouts/FrontendLayout';

export default function about({ auth }) {
    return (
        <FrontendLayout>
            <Head title="About" />

            <div className="py-24">
                <h1>This is About Page</h1>
            </div>
            </FrontendLayout>
    );
}
