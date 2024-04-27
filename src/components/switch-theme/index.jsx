import './styles.css';
import useLocalStorage from './useLocalStorage';

export default function SwitchTheme() {

    const [them, setTheme] = useLocalStorage('theme', 'dark');

    function hadnleToggleTheme() {
        setTheme(them === 'dark' ? 'light' : 'dark')
    }

    console.log(them)

    return (
        <>
        <div className="light-dark-mode" data-theme={them}>
            <div className="container">
                <p>Hello World</p>
                <button onClick={hadnleToggleTheme}>Switch Theme</button>
            </div>
        </div>
        </>
    )
}