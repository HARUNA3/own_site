export default function Foo() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t bg-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 text-sm text-gray-600">
                <p>© {year} Haru</p>
                <p className="text-gray-500">Built with Next.js+TypeScript</p>
            </div>
        </footer>
    );
}

