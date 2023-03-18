export default function Container({ children, className, ...props }) {
    return (
        <div className={`w-full flex justify-center ${className}`} {...props}>
            <div className="max-w-xl w-full">
                {children}
            </div>
        </div>
    );
}

