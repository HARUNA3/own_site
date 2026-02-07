export default function Foo() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t bg-white">
            <div className="mx-auto flex justify-center max-w-5xl items-center px-4 py-6 text-sm text-gray-600">
                <p>© {year} Haru</p>
            </div>
        </footer>
    );
}

