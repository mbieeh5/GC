import IRoute  from '../interfaces/route';
import HomePage from '../pages/home';
import Lowongan from '../pages/Lowongan';
import Kuota from '../pages/kuota';
import Accessories from '../pages/accessories';


const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/Lowongan',
        name: 'Lowongan',
        component: Lowongan,
        exact: true
    },
    {
        path: '/Accessories',
        name: 'Accessories',
        component: Accessories,
        exact: true
    },
    {
        path: '/Kuota',
        name: 'Kuota',
        component: Kuota,
        exact: true
    }
]

export default routes;