import {Navigate} from 'react-router';
import {userToken} from '../store/user';
import {useAppSelector} from '../store/storeHooks';
import {JWTDecodeUtils} from '../shared/utilities';

type ProtectedRouteProps = {
    redirectPath?: string;
    children: JSX.Element;
    checkAdmin?: boolean;
};

const ProtectedRoute = ({children, redirectPath = '/', checkAdmin}: ProtectedRouteProps) => {
    const token = useAppSelector(userToken);
    const role = JWTDecodeUtils.getTokenField(token, 'role');

    if (role === null) return <Navigate to={redirectPath} replace />;
    if (checkAdmin && role !== 'admin') return <Navigate to={'/'} replace />;

    return children;
};

export default ProtectedRoute;
