import {Navigate} from 'react-router';
import {userData} from '../store/user';
import {useAppSelector} from '../store/storeHooks';

type ProtectedRouteProps = {
    redirectPath?: string;
    children: JSX.Element;
    checkAdmin?: boolean;
};

const ProtectedRoute = ({children, redirectPath = '/', checkAdmin}: ProtectedRouteProps) => {
    const user = useAppSelector(userData);

    if (!user) {
        return <Navigate to={redirectPath} replace />;
    } else if (checkAdmin && user.role !== 'admin') {
        return <Navigate to={'/'} replace />;
    }

    return children;
};

export default ProtectedRoute;
