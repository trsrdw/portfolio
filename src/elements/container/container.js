import style from "./style.module.scss";

export default function Container({ children, className }) {
    return (
        <div className={`${style.wrapper} ${className}`}>
            {children}
        </div>
    );
}