import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div id="error-page">
            <h1>Kire Mama,ai page to nai..onno page ja r naile muri kha mama!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
